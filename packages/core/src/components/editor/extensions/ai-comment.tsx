import {
  Node,
  ReactNodeViewRenderer,
  NodeViewWrapper,
  Editor,
} from "@tiptap/react";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useEffect, useCallback } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AiCommentNode = (props: any) => {
  const accept = () => {
    props.updateAttributes({
      comment: "Accepted",
    });

    const currentPos = props.getPos();
    const editor = props.editor as Editor;

    // Get the parent node of the current position
    const parent = editor.state.doc.resolve(currentPos).parent;

    if (parent) {
      const tr = editor.state.tr;

      // Modify the content of the parent node
      const newNodeContent = props.node.attrs.modification;
      const newNode = editor.state.schema.text(newNodeContent);

      tr.replaceWith(currentPos - parent.nodeSize + 3, currentPos + 1, newNode);

      // Apply the transaction to the editor's state
      editor.view.dispatch(tr);

      // Update the editor's content to reflect the changes
      // editor.commands.setContent(editor.view.state.doc);
    }
  };

  return (
    <NodeViewWrapper className="ai-comment absolute -right-16 top-0">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded-full mx-2" size="icon">
            <Lightbulb size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <div className="space-y-2">
            <p className="text-sm">{props.node.attrs.comment}</p>

            {/* <p className="text-sm text-gray-500 border border-1 p-2 rounded-sm">
              {props.node.attrs.modification}
            </p> */}
            {/* <Alert>
              <AlertTitle>AI Suggested Modification</AlertTitle>
              <AlertDescription>
                {props.node.attrs.modification}
              </AlertDescription>
            </Alert> */}

            <Button
              // variant="outline"
              // className="text-sm font-normal w-full"
              onClick={accept}
            >
              Let AI fix it
            </Button>

            {/* <Button onClick={accept}>Accept</Button> */}
          </div>
        </PopoverContent>
      </Popover>
    </NodeViewWrapper>
  );
};

interface AiCommentExtensionOptions {
  complete: (prompt: string) => Promise<string | null | undefined>;
}

const AiCommentExtension = Node.create<AiCommentExtensionOptions>({
  name: "aiComment",
  group: "inline",
  inline: true,
  atom: true,
  content: "inline*",
  // selectable: false,

  // configuration options
  addOptions() {
    return {
      complete: (prompt: string) => {
        // default value
        return new Promise<string | null | undefined>((resolve) => {
          resolve("Here is a comment with prompt: " + prompt);
        });
      },
    };
  },

  addAttributes() {
    return {
      comment: {
        default: "Here is a comment",
      },
      modification: {
        default: "Here is a modification",
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: "ai-comment",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["ai-comment", HTMLAttributes];
  },
  addNodeView() {
    return ReactNodeViewRenderer(AiCommentNode);
  },

  onTransaction({ transaction }) {
    // console.log(transaction);

    const complete = this.options.complete;

    // when the user starts a new paragraph, insert a new ai-comment to the previous paragraph if it doesn't have one
    if (transaction.docChanged) {
      const { doc, selection } = transaction;

      const { $from } = selection;

      if ($from.parent.type.name === "paragraph" && $from.parentOffset === 0) {
        // check if the previous paragraph has an ai-comment
        const prevParagraph = doc.resolve($from.before());
        const prevParagraphNode = prevParagraph.nodeBefore;

        if (prevParagraphNode && prevParagraphNode.type.name === "paragraph") {
          const prevParagraphNodeLastChild = prevParagraphNode.lastChild;

          if (
            prevParagraphNodeLastChild &&
            prevParagraphNodeLastChild.type.name !== "aiComment"
          ) {
            // get the text of the previous paragraph
            const prevParagraphText = prevParagraphNode.textContent;
            console.log(prevParagraphText);

            complete(prevParagraphText).then((res) => {
              const { comment, modification } = JSON.parse(
                res || "{comment: '', modification: ''}"
              ) as any;
              const pos = prevParagraph.pos - 1;

              // insert into the previous paragraph at the end
              this.editor.commands.insertContentAt(pos, {
                type: "aiComment",
                attrs: {
                  comment: comment || "Here is a comment...",
                  modification: modification || "Here is a modification...",
                },
              });

              // focus to the new paragraph
              this.editor.commands.focus(pos + 3);
            });

            // return tr;
          }
        }
      }
    }
  },
});

export default AiCommentExtension;
