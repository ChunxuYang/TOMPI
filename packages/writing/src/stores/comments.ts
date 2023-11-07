import { atom, createStore } from "jotai";
import { atomWithStore } from "jotai-zustand";
import { splitAtom } from "jotai/utils";
import { createStore as createZustandStore } from "zustand/vanilla";

export type PointType = {
  key: string;
  offset: number;
};

export type CommentType = {
  id: string;
  // from: number;
  paragraphIndex: number;
  comment: string;
};

export const _commentsAtom = atom<CommentType[]>([
  {
    id: "3da02fe4-1eb7-41e9-b0a4-7ebc7f8acf7e",
    paragraphIndex: 0,
    comment: "This is a comment",
  },
  {
    id: "146b4244-2030-4a18-be2b-238b29dcc781",
    paragraphIndex: 1,
    comment: "This is another comment",
  },
]);

export const commentsAtom = splitAtom(_commentsAtom);
// export const currentActiveCommentIdAtom = atom<string | null>(null);

const store = createStore();

export const currentActiveCommentAtom = atom((get) => {
  const comments = get(_commentsAtom);
  const currentActiveCommentId = get(currentActiveCommentIdAtom);
  if (currentActiveCommentId === null) {
    return null;
  }
  return (
    comments.find(
      (comment) => comment.id === currentActiveCommentId.activeCommentId
    ) ?? null
  );
});

export const commentIdStore = createZustandStore(() => ({
  activeCommentId: null as string | null,
}));

export const currentActiveCommentIdAtom = atomWithStore(commentIdStore);
