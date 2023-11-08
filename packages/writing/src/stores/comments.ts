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

export const commentsAtom = atom<CommentType[]>([]);

// export const commentsAtom = splitAtom(_commentsAtom);
// export const currentActiveCommentIdAtom = atom<string | null>(null);

const store = createStore();

export const currentActiveCommentAtom = atom((get) => {
  const comments = get(commentsAtom);
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
