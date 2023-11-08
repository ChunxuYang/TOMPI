import { useAtomValue } from "jotai";
import {
  $getRoot,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  EditorConfig,
  LexicalCommand,
  TextNode,
} from "lexical";
import { useEffect } from "react";

import {
  commentIdStore,
  commentsAtom,
  currentActiveCommentAtom,
} from "@/stores/comments";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";

import { CustomParagraphNode } from "./custom-paragraph-plugin";

const HIGHLIGHT_RANGE_COMMAND: LexicalCommand<{
  paragraphIndex: number;
  id: string;
}> = createCommand();

export default function CommentPlugin() {
  const [editor] = useLexicalComposerContext();
  const currentActiveComment = useAtomValue(currentActiveCommentAtom);

  const comments = useAtomValue(commentsAtom);

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        HIGHLIGHT_RANGE_COMMAND,
        ({ paragraphIndex, id }) => {
          // get the paragraph node
          const rootNode = $getRoot();
          const paragraphNodes = rootNode
            .getChildren()
            .filter(
              (node) => node instanceof CustomParagraphNode
            ) as CustomParagraphNode[];

          const paragraphNode = paragraphNodes[paragraphIndex];

          if (!paragraphNode) {
            return false;
          }

          editor.update(() => {
            paragraphNode.setComment(true);
          });

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      )
    );
  }, [editor]);

  // the text between all comment ranges should be highlighted
  useEffect(() => {
    // remove all paragraph comments
    editor.update(() => {
      const rootNode = $getRoot();
      const paragraphNodes = rootNode
        .getChildren()
        .filter(
          (node) => node instanceof CustomParagraphNode
        ) as CustomParagraphNode[];

      paragraphNodes.forEach((node) => {
        node.setComment(false);
      });
    });

    let addedIndex = 0;

    comments.forEach((comment) => {
      editor.dispatchCommand(HIGHLIGHT_RANGE_COMMAND, {
        paragraphIndex: comment.paragraphIndex,
        id: comment.id,
      });

      addedIndex++;
    });
  }, [comments]);

  useEffect(() => {
    editor.update(() => {
      // remove all comment text nodes
      const rootNode = $getRoot();
      const paragraphNodes = rootNode
        .getChildren()
        .filter(
          (node) => node instanceof CustomParagraphNode
        ) as CustomParagraphNode[];

      paragraphNodes.forEach((node) => {
        node.setActive(false);
      });
      if (currentActiveComment) {
        const { paragraphIndex } = currentActiveComment;

        const rootNode = $getRoot();
        const paragraphNodes = rootNode
          .getChildren()
          .filter(
            (node) => node instanceof CustomParagraphNode
          ) as CustomParagraphNode[];

        const paragraphNode = paragraphNodes[paragraphIndex];

        if (!paragraphNode) {
          return;
        }

        // set the node as active

        paragraphNode.setActive(true);
      }
    });
  }, [currentActiveComment, comments]);

  return null;
}
