import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { EditorState } from "lexical";
import { useCallback, useEffect } from "react";

import TimeTravel from "@/components/time-travel";
import {
  timeTravelLogsAtom,
  TimeTravelRecorderState,
  timeTravelRecorderStateAtom,
  TimeTravelReplayerState,
  timeTravelReplayerStateAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";

export default function TimeTravelPlugin() {
  const [editor] = useLexicalComposerContext();
  const [timeTravelLogs, setTimeTravelLogs] = useAtom(timeTravelLogsAtom);
  const timeTraverRecorderState = useAtomValue(timeTravelRecorderStateAtom);
  const timeTravelReplayerState = useAtomValue(timeTravelReplayerStateAtom);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (
          timeTraverRecorderState === TimeTravelRecorderState.Recording &&
          timeTravelReplayerState !== TimeTravelReplayerState.Playing
        ) {
          console.log("recording", timeTravelLogs.length);
          setTimeTravelLogs((logs) => [
            ...logs,
            {
              time: Date.now(),
              editorState,
            },
          ]);
        }
      })
    );
  }, [
    editor,
    timeTraverRecorderState,
    timeTravelReplayerState,
    timeTravelLogs,
  ]);

  return (
    <div className="absolute top-0 left-0 z-20 m-4">
      <TimeTravel />
    </div>
  );
}
