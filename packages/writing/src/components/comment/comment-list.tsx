import { useAtom, useAtomValue } from "jotai";
import { splitAtom } from "jotai/utils";

import CommentItem from "@/components/comment/comment-item";
import { commentsAtom } from "@/stores/comments";

export default function CommentList() {
  const splitedComments = splitAtom(commentsAtom);
  const [comments, dispatch] = useAtom(splitedComments);

  return (
    <div className="space-y-4 min-w-fit">
      {comments.map((comment, id) => (
        <CommentItem
          key={id}
          commentAtom={comment}
          onRemove={() => {
            console.log("remove");
            dispatch({ type: "remove", atom: comment });
          }}
        />
      ))}
    </div>
  );
}
