import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

import {
  TimeTravelLogsType,
  TimeTravelRecorderState,
  timeTravelRecorderStateAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { PlayIcon, StopIcon } from "@radix-ui/react-icons";

import { TimeTravelConfiguration } from "../lexical-editor/plugins/timetravel-plugin";
import { Button } from "../ui/button";
import LogList from "./log-list";

interface RecorderProps {
  timeTravelConfiguration: TimeTravelConfiguration;
}

export default function Recorder({ timeTravelConfiguration }: RecorderProps) {
  const [editor] = useLexicalComposerContext();

  const [timeTravelRecorderState, setTimeTravelRecorderState] = useAtom(
    timeTravelRecorderStateAtom
  );

  // const setTimeTravelLogList = useSetAtom(timeTravelLogListAtom);

  const currentTimeTravelLogs = useRef<TimeTravelLogsType>([]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        console.log(editorState.toJSON());
        if (timeTravelRecorderState === TimeTravelRecorderState.Recording) {
          currentTimeTravelLogs.current = [
            ...currentTimeTravelLogs.current,
            {
              time: new Date(),
              editorState: editorState.toJSON(),
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

            // setTimeTravelLogList((prev) => [
            //   ...prev,
            //   {
            //     saveTime: Date.now(),
            //     log: currentTimeTravelLogs.current,
            //   },
            // ]);

            timeTravelConfiguration.onAddLog({
              id: Math.random().toString(),
              saveTime: new Date(),
              log: currentTimeTravelLogs.current,
            });

            toast.success("Recording saved.");
          }}
        >
          <StopIcon className="w-4 h-4 mr-2" />
          Stop Recording
        </Button>
      )}
      <LogList
        logList={timeTravelConfiguration.logsList}
        onDeleteLog={timeTravelConfiguration.onDeleteLog}
        onAddLog={timeTravelConfiguration.onAddLog}
      />
    </div>
  );
}
