import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { SerializedEditorState } from "lexical";

type TimeTravelLogItemType = {
  time: Date;
  editorState: SerializedEditorState;
};

export enum TimeTravelState {
  Recording = "recording",
  Replaying = "relaying",
}

export enum TimeTravelRecorderState {
  Idle = "idle",
  Recording = "recording",
}

export enum TimeTravelReplayerState {
  Idle = "idle",
  Playing = "playing",
  Finished = "finished",
}

export type TimeTravelSaveLogItem = {
  id: string;
  saveTime: Date;
  log: TimeTravelLogsType;
};

export type TimeTravelLogsType = TimeTravelLogItemType[];

export type TimeTravelSaveLogListType = TimeTravelSaveLogItem[];

// put above together as a single atom
export const timeTravelAtom = atom<{
  timeTravelState: TimeTravelState;
  timeTravelRecorderState: TimeTravelRecorderState;
  timeTravelReplayerState: TimeTravelReplayerState;
  currentTimeTravelLog: TimeTravelLogsType;
  latestEditorState: SerializedEditorState | null;
  blockThresholdInSec: number;
}>({
  timeTravelState: TimeTravelState.Recording,
  timeTravelRecorderState: TimeTravelRecorderState.Idle,
  timeTravelReplayerState: TimeTravelReplayerState.Idle,
  currentTimeTravelLog: [],
  latestEditorState: null,
  blockThresholdInSec: 5,
});

export const currentTimeTravelLogAtom = focusAtom(timeTravelAtom, (optic) =>
  optic.prop("currentTimeTravelLog")
);

export const timeTravelRecorderStateAtom = focusAtom(timeTravelAtom, (optic) =>
  optic.prop("timeTravelRecorderState")
);

export const timeTravelReplayerStateAtom = focusAtom(timeTravelAtom, (optic) =>
  optic.prop("timeTravelReplayerState")
);

export const timeTravelStateAtom = focusAtom(timeTravelAtom, (optic) =>
  optic.prop("timeTravelState")
);

export const latestEditorStateAtom = focusAtom(timeTravelAtom, (optic) =>
  optic.prop("latestEditorState")
);

export const blockThresholdInSecAtom = focusAtom(timeTravelAtom, (optic) =>
  optic.prop("blockThresholdInSec")
);
