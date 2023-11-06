import { atom } from "jotai";
import { splitAtom } from "jotai/utils";

export type CommentType = {
  id: string;
  from: number;
  to: number;
  comment: string;
};

const _commentsAtom = atom<CommentType[]>([
  {
    id: "3da02fe4-1eb7-41e9-b0a4-7ebc7f8acf7e",
    from: 0,
    to: 10,
    comment: "This is a comment",
  },
  {
    id: "146b4244-2030-4a18-be2b-238b29dcc781",
    from: 20,
    to: 30,
    comment: "This is another comment",
  },
]);

export const commentsAtom = splitAtom(_commentsAtom);
