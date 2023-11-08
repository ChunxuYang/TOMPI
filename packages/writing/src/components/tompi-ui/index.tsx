import { useSetAtom } from "jotai";
import { ExternalToast, toast } from "sonner";

import { commentsAtom } from "@/stores/comments";

// extend toast

function useTompiUI() {
  const setComments = useSetAtom(commentsAtom);
  function notification(message: string, data?: ExternalToast) {
    return toast(message, data);
  }

  function highlight(editor: any, text: string, highlight: string) {
    const regex = new RegExp(highlight, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  }

  /**
   *
   * @param paragraphIndex: the index of the paragraph
   * @param comment: the comment to add
   */
  function comment(paragraphIndex: number, comment: string) {
    setComments((comments) => {
      return [
        ...comments,
        {
          id: `comment-${comments.length}`,
          type: "comment",
          paragraphIndex,
          comment,
        },
      ];
    });
  }

  const UI = {
    notification,
    highlight,
    comment,
  };

  return UI;
}

export default useTompiUI;
