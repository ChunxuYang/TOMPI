import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CommentType, currentActiveCommentIdAtom } from "@/stores/comments";

interface CommentItemProps {
  commentAtom: PrimitiveAtom<CommentType>;
  onRemove: () => void;
}

export default function CommentItem({
  commentAtom,
  onRemove,
}: CommentItemProps) {
  const comment = useAtomValue(commentAtom);
  const [currentActiveCommentId, setCurrentActiveCommentId] = useAtom(
    currentActiveCommentIdAtom
  );
  return (
    <Card
      className={"w-64"}
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
          <Button
            variant="outline"
            onClick={() => {
              onRemove();
            }}
          >
            Decline
          </Button>
          <Button>Accept</Button>
        </CardFooter>
      )}
    </Card>
  );
}
