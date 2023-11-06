"use client";

import {
  $createTextNode,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  DecoratorNode,
  LexicalCommand,
  LexicalNode,
  NodeKey,
} from "lexical";
import { ReactNode, useEffect } from "react";

import { Button } from "@tompi/ui";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@tompi/ui";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

// import {
//   $createAiHighlightNode,
//   AiHiglightNode,
// } from "../nodes/ai-highlight-node";

export const TOGGLE_AI_HIGHLIGHT_COMMAND: LexicalCommand<string> =
  createCommand();

export class AiHiglightNode extends DecoratorNode<ReactNode> {
  __variant: string;
  __text: string;
  __correction: string;
  __onAccept: () => void;
  __onDecline: () => void;

  constructor(
    variant: string,
    text: string,
    correction: string,
    onAccept: () => void,
    onDecline: () => void,
    key?: NodeKey,
  ) {
    super(key);
    this.__variant = variant;
    this.__text = text;
    this.__correction = correction;
    this.__onAccept = onAccept;
    this.__onDecline = onDecline;
  }

  static getType(): string {
    return "ai-highlight";
  }

  static clone(node: AiHiglightNode): AiHiglightNode {
    return new AiHiglightNode(
      node.__variant,
      node.__text,
      node.__correction,
      node.__onAccept,
      node.__onDecline,
      node.__key,
    );
  }

  createDOM(): HTMLElement {
    return document.createElement("span");
  }

  updateDOM(): false {
    return false;
  }

  decorate(): ReactNode {
    // const { variant } = props.node.attrs;
    let textCN =
      "underline cursor-pointer decoration-2 underline-offset-4 inline ";

    switch (this.__variant) {
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
      <HoverCard openDelay={0} closeDelay={200}>
        <HoverCardTrigger asChild>
          <span className={textCN} contentEditable={false}>
            {this.__text}
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="space-y-4">
          <div className="text-sm">
            ... <span className="text-green-600">{this.__correction}</span>{" "}
            <span className="text-red-600 line-through">{this.__text}</span> ...
          </div>
          <div className="flex items-center gap-2" contentEditable={false}>
            <Button
              size={"sm"}
              onClick={() => {
                // props.deleteNode();

                // props.editor.commands.insertContent(
                //   props.node.attrs.correction
                // );
                this.__onAccept();

                // insert correction as a text node
                // this.remove();
              }}
            >
              Accept
            </Button>
            <Button
              size={"sm"}
              variant={"link"}
              onClick={() => {
                this.__onDecline();
                // props.deleteNode();

                // props.editor.commands.insertContent(props.node.attrs.text);
              }}
            >
              Decline
            </Button>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }
}

export const $createAiHighlightNode = (
  variant: string,
  text: string,
  correction: string,
  onAccept: () => void,
  onDecline: () => void,
) => {
  return new AiHiglightNode(variant, text, correction, onAccept, onDecline);
};

export const $isAiHighlightNode = (node?: LexicalNode): boolean => {
  return node instanceof AiHiglightNode;
};

export default function AiHighlightPlugin({
  debugMode,
}: {
  debugMode?: boolean;
}) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([AiHiglightNode])) {
      throw new Error(
        "TwitterPlugin: TweetNode not registered on editor (initialConfig.nodes)",
      );
    }

    return editor.registerCommand<string>(
      TOGGLE_AI_HIGHLIGHT_COMMAND,
      () => {
        const selection = $getSelection();

        if (!$isRangeSelection(selection)) {
          return false;
        }

        // record text content
        const text = selection.getTextContent();
        // remove selection and insert ai-highlight node
        selection.removeText();

        const correction = "Here is a correction";

        const node = $createAiHighlightNode(
          "error",
          text,
          correction,
          () => {
            // when accept, remove ai-highlight node and insert correction
            editor.update(() => {
              node.replace($createTextNode(correction));
            });
          },
          () => {
            // remove ai-highlight node and insert text
            // node.remove();
            // selection.insertText(text);
            editor.update(() => {
              node.replace($createTextNode(text));
            });
          },
        );

        selection.insertNodes([node]);
        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor]);

  return null;
}
