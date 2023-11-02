import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Editor, Node } from "@tiptap/core";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    aiHighlight: {
      toggleAiHighlight: () => ReturnType;
    };
  }
}
const AiHighlightNode = (props: any) => {
  const { type } = props.node.attrs;
  let textCN = "underline cursor-pointer decoration-2 underline-offset-4 ";

  switch (type) {
    case "error":
      textCN += "decoration-red-500 group-hover:bg-red-100";
      break;
    case "warning":
      textCN += "decoration-yellow-500 group-hover:bg-yellow-100";
      break;
    case "info":
      textCN += "decoration-blue-500 group-hover:bg-blue-100";
      break;
    default:
      break;
  }

  return (
    <NodeViewWrapper className="ai-highlight inline group">
      <HoverCard openDelay={0} closeDelay={200}>
        <HoverCardTrigger asChild>
          <span className={textCN} contentEditable={false}>
            {props.node.attrs.text}
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="space-y-4">
          <div className="text-sm">
            ...{" "}
            <span className="text-green-600">
              {props.node.attrs.correction}
            </span>{" "}
            <span className="text-red-600 line-through">
              {props.node.attrs.text}
            </span>{" "}
            ...
          </div>
          <div className="flex items-center gap-2" contentEditable={false}>
            <Button
              size={"sm"}
              onClick={() => {
                props.deleteNode();

                props.editor.commands.insertContent(
                  props.node.attrs.correction
                );
              }}
            >
              Accept
            </Button>
            <Button
              size={"sm"}
              variant={"link"}
              onClick={() => {
                props.deleteNode();

                props.editor.commands.insertContent(props.node.attrs.text);
              }}
            >
              Decline
            </Button>
          </div>
        </HoverCardContent>
      </HoverCard>
    </NodeViewWrapper>
  );
};

interface AiHighlightExtenstionOptions {}

const AiHighlightExtenstion = Node.create<AiHighlightExtenstionOptions>({
  name: "aiHighlight",
  group: "inline",
  inline: true,
  content: "text*",
  // editable: false,

  addOptions() {
    return {};
  },

  addAttributes() {
    return {
      text: {
        default: "Here is a highlight",
      },

      correction: {
        default: "Here is a correction",
      },

      type: {
        default: "error",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "ai-highlight",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["ai-highlight", HTMLAttributes];
  },

  addCommands() {
    return {
      // get current selection, if it's not empty, delete it and render a new node
      toggleAiHighlight:
        () =>
        ({
          commands,
          state,
        }: {
          commands: Editor["commands"];
          state: Editor["state"];
        }) => {
          const { selection } = state;

          if (!selection || selection.empty) {
            return false;
          }

          const { from, to } = selection;
          const content = state.doc.textBetween(from, to);

          commands.deleteSelection();

          return commands.insertContent({
            type: "aiHighlight",
            attrs: {
              text: content,
              correction: "Here is a correction",
            },
          });
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(AiHighlightNode);
  },
});

export default AiHighlightExtenstion;
