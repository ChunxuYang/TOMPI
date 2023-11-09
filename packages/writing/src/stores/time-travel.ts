import { atom } from "jotai";
import { EditorState } from "lexical";

type TimeTravelLogItemType = {
  time: number;
  editorState: EditorState;
};
export enum TimeTravelRecorderState {
  Idle = "idle",
  Recording = "recording",
  Finished = "finished",
}

export enum TimeTravelReplayerState {
  Idle = "idle",
  Playing = "playing",
  Finished = "finished",
}

export type TimeTravelLogsType = TimeTravelLogItemType[];

export const timeTravelLogsAtom = atom<TimeTravelLogsType>([]);

export const timeTravelRecorderStateAtom = atom<TimeTravelRecorderState>(
  TimeTravelRecorderState.Idle
);

export const timeTravelReplayerStateAtom = atom<TimeTravelReplayerState>(
  TimeTravelReplayerState.Idle
);

export const timeTravelReplayStepAtom = atom<number>(0);
