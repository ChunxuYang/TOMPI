import { CommentType } from "@/stores/comments";
import { PrimitiveAtom, useAtomValue } from "jotai";
import { Card, CardFooter, CardHeader, CardTitle } from "@tompi/ui";
import { Button } from "@tompi/ui";

interface CommentItemProps {
  commentAtom: PrimitiveAtom<CommentType>;
}

export default function CommentItem({ commentAtom }: CommentItemProps) {
  const comment = useAtomValue(commentAtom);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{comment.comment}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Decline</Button>
        <Button>Accept</Button>
      </CardFooter>
    </Card>
  );
}
