import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";

import { CommentType, currentActiveCommentIdAtom } from "@/stores/comments";
import { Button, Card, CardFooter, CardHeader, CardTitle } from "@tompi/ui";

interface CommentItemProps {
  commentAtom: PrimitiveAtom<CommentType>;
}

export default function CommentItem({ commentAtom }: CommentItemProps) {
  const comment = useAtomValue(commentAtom);
  const [currentActiveCommentId, setCurrentActiveCommentId] = useAtom(
    currentActiveCommentIdAtom
  );
  return (
    <Card
      className={
        currentActiveCommentId.activeCommentId === comment.id
          ? "shadow-lg"
          : "shadow-sm"
      }
      onMouseEnter={() =>
        setCurrentActiveCommentId(() => ({ activeCommentId: comment.id }))
      }
      onMouseLeave={() =>
        setCurrentActiveCommentId(() => ({ activeCommentId: null }))
      }
    >
      <CardHeader>
        <CardTitle>{comment.comment}</CardTitle>
      </CardHeader>
      {currentActiveCommentId.activeCommentId === comment.id && (
        <CardFooter className="flex justify-between">
          <Button variant="outline">Decline</Button>
          <Button>Accept</Button>
        </CardFooter>
      )}
    </Card>
  );
}
