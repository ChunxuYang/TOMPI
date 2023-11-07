import CommentItem from "@/components/comment/comment-item";
import { commentsAtom } from "@/stores/comments";
import { useAtomValue } from "jotai";

export default function CommentList() {
  const comments = useAtomValue(commentsAtom);

  return (
    <div className="space-y-4 min-w-fit">
      {comments.map((comment, id) => (
        <CommentItem key={id} commentAtom={comment} />
      ))}
    </div>
  );
}
