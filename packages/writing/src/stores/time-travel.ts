import { atom } from "jotai";
import { EditorState } from "lexical";

type TimeTravelLogItemType = {
  time: number;
  editorState: EditorState;
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

type TimeTravelSaveLogItem = {
  saveTime: number;
  log: TimeTravelLogsType;
};

export type TimeTravelLogsType = TimeTravelLogItemType[];

export const currentTimeTravelLogAtom = atom<TimeTravelLogsType>([]);

export const timeTravelLogListAtom = atom<TimeTravelSaveLogItem[]>([]);

export const timeTravelRecorderStateAtom = atom<TimeTravelRecorderState>(
  TimeTravelRecorderState.Idle
);

export const timeTravelReplayerStateAtom = atom<TimeTravelReplayerState>(
  TimeTravelReplayerState.Idle
);

export const timeTravelStateAtom = atom<TimeTravelState>(
  TimeTravelState.Recording
);

export const latestEditorStateAtom = atom<EditorState | null>(null);
