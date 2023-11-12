import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

import {
  latestEditorStateAtom,
  timeTravelLogListAtom,
  TimeTravelLogsType,
  TimeTravelRecorderState,
  timeTravelRecorderStateAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { PlayIcon, StopIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";
import LogList from "./log-list";

export default function Recorder() {
  const [editor] = useLexicalComposerContext();

  const [timeTravelRecorderState, setTimeTravelRecorderState] = useAtom(
    timeTravelRecorderStateAtom
  );

  const setTimeTravelLogList = useSetAtom(timeTravelLogListAtom);

  const currentTimeTravelLogs = useRef<TimeTravelLogsType>([]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (timeTravelRecorderState === TimeTravelRecorderState.Recording) {
          currentTimeTravelLogs.current = [
            ...currentTimeTravelLogs.current,
            {
              time: Date.now(),
              editorState,
            },
          ];
        }
      })
    );
  }, [editor, timeTravelRecorderState]);

  return (
    <div className="flex flex-col space-y-4 w-full">
      {timeTravelRecorderState === TimeTravelRecorderState.Idle && (
        <Button
          variant={"default"}
          onClick={() => {
            // setTimeTravelLogs([]);
            currentTimeTravelLogs.current = [];
            setTimeTravelRecorderState(TimeTravelRecorderState.Recording);
          }}
        >
          <PlayIcon className="w-4 h-4 mr-2" />
          Start Recording
        </Button>
      )}
      {timeTravelRecorderState === TimeTravelRecorderState.Recording && (
        <Button
          variant={"outline"}
          onClick={() => {
            setTimeTravelRecorderState(TimeTravelRecorderState.Idle);

            setTimeTravelLogList((prev) => [
              ...prev,
              {
                saveTime: Date.now(),
                log: currentTimeTravelLogs.current,
              },
            ]);

            toast.success("Recording saved.");
          }}
        >
          <StopIcon className="w-4 h-4 mr-2" />
          Stop Recording
        </Button>
      )}
      <LogList />
    </div>
  );
}
