import { useAtom, useAtomValue } from "jotai";
import {
  $createRangeSelection,
  $getNodeByKey,
  $getRoot,
  $getTextContent,
  $setSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  EditorConfig,
  ElementNode,
  LexicalCommand,
  LexicalEditor,
  ParagraphNode,
  TextNode,
} from "lexical";
import { useEffect } from "react";

import {
  _commentsAtom,
  commentIdStore,
  commentsAtom,
  CommentType,
  currentActiveCommentAtom,
  currentActiveCommentIdAtom,
  PointType,
} from "@/stores/comments";
import {
  $createMarkNode,
  $getMarkIDs,
  $isMarkNode,
  $unwrapMarkNode,
  $wrapSelectionInMarkNode,
  MarkNode,
} from "@lexical/mark";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $wrapNodeInElement,
  addClassNamesToElement,
  mergeRegister,
} from "@lexical/utils";

import { CustomParagraphNode } from "./custom-paragraph-plugin";

const HIGHLIGHT_RANGE_COMMAND: LexicalCommand<{
  paragraphId: string;
  id: string;
}> = createCommand();

export class CommentTextNode extends TextNode {
  __commentId: string;
  __active: boolean = false;

  static getType(): string {
    return "commentText";
  }

  static clone(node: CommentTextNode): CommentTextNode {
    return new CommentTextNode(node.__text, node.__commentId, node.__key);
  }

  constructor(text: string, commentId: string, key?: string) {
    super(text, key);
    this.__commentId = commentId;
  }

  createDOM(config: EditorConfig): HTMLElement {
    const element = super.createDOM(config);
    element.classList.add(
      "bg-yellow-200",
      "underline",
      "cursor-pointer",
      "dark:bg-yellow-700"
    );
    // todo: add event listener
    element.addEventListener("mouseenter", (e) => {
      e.stopPropagation();
      e.preventDefault();

      commentIdStore.setState({
        activeCommentId: this.__commentId,
      });

      // commentStore.set(currentActiveCommentIdAtom, this.__commentId);
    });

    element.addEventListener("mouseleave", (e) => {
      e.stopPropagation();
      e.preventDefault();

      commentIdStore.setState({
        activeCommentId: null,
      });

      // commentStore.set(currentActiveCommentIdAtom, null);
    });

    return element;
  }

  updateDOM(
    prevNode: CommentTextNode,
    dom: HTMLElement,
    config: EditorConfig
  ): boolean {
    const isUpdated = super.updateDOM(prevNode, dom, config);
    if (prevNode.__active !== this.__active) {
      if (this.__active) {
        dom.classList.add("bg-yellow-300", "dark:bg-yellow-600");
      } else {
        dom.classList.remove("bg-yellow-300", "dark:bg-yellow-600");
      }
    }
    return isUpdated;
  }
}

export default function CommentPlugin() {
  const [editor] = useLexicalComposerContext();
  const currentActiveComment = useAtomValue(currentActiveCommentAtom);

  const comments = useAtomValue(_commentsAtom);

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        HIGHLIGHT_RANGE_COMMAND,
        ({ paragraphId, id }) => {
          // get the paragraph node
          const rootNode = $getRoot();
          const paragraphNodes = rootNode
            .getChildren()
            .filter((node) => node instanceof CustomParagraphNode);

          const paragraphNode = paragraphNodes.find(
            (node) => node.__id === paragraphId
          );

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      )
    );
  }, [editor]);

  // the text between all comment ranges should be highlighted
  useEffect(() => {
    // remove all comment text nodes

    let addedIndex = 0;

    comments.forEach((comment) => {
      editor.dispatchCommand(HIGHLIGHT_RANGE_COMMAND, {
        paragraphId: comment.paragraphId,
        id: comment.id,
      });

      addedIndex++;
    });
  }, [comments]);

  // useEffect(() => {
  //   if (currentActiveComment) {
  //     const { id } = currentActiveComment;
  //     const node = $getNodeByKey(`comment-node-${id}`);
  //     if (!node) {
  //       return;
  //     }

  //     // set the node as active
  //     node.__active = true;
  //   }
  // }, [currentActiveComment]);

  return null;
}
