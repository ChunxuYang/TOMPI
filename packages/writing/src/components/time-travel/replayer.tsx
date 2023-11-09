import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";

import {
  timeTravelLogsAtom,
  TimeTravelReplayerState,
  timeTravelReplayerStateAtom,
  timeTravelReplayStepAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { PlayIcon, ReloadIcon, StopIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Toggle } from "../ui/toggle";

const PLAYBACK_SPEEDS = [0.5, 0.25, 1, 2, 4];

export default function Replayer() {
  const [playbackSpeedIndex, setPlaybackSpeedIndex] = useState(2);
  // const [currentStep, setCurrentStep] = useAtom(timeTravelReplayStepAtom);
  const currentStepRef = useRef<number>(0);
  const [replayState, setReplayState] = useAtom(timeTravelReplayerStateAtom);
  const timeTravelLogs = useAtomValue(timeTravelLogsAtom);
  const [editor] = useLexicalComposerContext();

  const totalSteps = timeTravelLogs.length - 1;

  useEffect(() => {
    if (replayState === TimeTravelReplayerState.Playing) {
      let timeoutId: ReturnType<typeof setTimeout>;

      const play = () => {
        const currentStep = currentStepRef.current;

        if (currentStep === totalSteps) {
          setReplayState(TimeTravelReplayerState.Finished);
          return;
        }

        const currentTime = timeTravelLogs[currentStep].time;
        const nextTime = timeTravelLogs[currentStep + 1].time;
        const timeDiff = nextTime - currentTime;

        timeoutId = setTimeout(() => {
          currentStepRef.current++;
          const index = currentStepRef.current;

          editor.setEditorState(timeTravelLogs[index].editorState);
          play();
        }, timeDiff / PLAYBACK_SPEEDS[playbackSpeedIndex]);
      };

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [replayState, timeTravelLogs, editor]);

  return (
    <div className="flex flex-col space-y-2 w-full mt-2">
      <div className="grid grid-cols-3 items-center">
        <Toggle
          className="justify-self-start"
          variant="default"
          aria-label="autoplay"
          pressed={replayState === TimeTravelReplayerState.Playing}
          onPressedChange={(pressed) => {
            if (pressed) {
              setReplayState(TimeTravelReplayerState.Playing);

              if (currentStepRef.current === totalSteps) {
                currentStepRef.current = 0;
              }
            } else {
              setReplayState(TimeTravelReplayerState.Idle);
            }
          }}
        >
          {
            {
              [TimeTravelReplayerState.Idle]: <PlayIcon className="w-4 h-4" />,
              [TimeTravelReplayerState.Playing]: (
                <StopIcon className="w-4 h-4" />
              ),
              [TimeTravelReplayerState.Finished]: (
                <ReloadIcon className="w-4 h-4" />
              ),
            }[replayState]
          }
        </Toggle>
        <Label className="justify-self-center">
          Step {currentStepRef.current}/{totalSteps}
        </Label>
        <Button
          variant={"link"}
          className="justify-self-end"
          onClick={() => {
            setPlaybackSpeedIndex(
              (playbackSpeedIndex + 1) % PLAYBACK_SPEEDS.length
            );
          }}
        >
          {PLAYBACK_SPEEDS[playbackSpeedIndex]}x
        </Button>
      </div>
      <Slider
        min={1}
        max={totalSteps}
        value={[currentStepRef.current]}
        onValueChange={([value]) => {
          setReplayState(TimeTravelReplayerState.Idle);
          currentStepRef.current = value;
          editor.setEditorState(timeTravelLogs[value].editorState);
        }}
      />

      <Button
        variant={"link"}
        className="self-end"
        onClick={() => {
          const rootElement = editor.getRootElement();

          if (rootElement !== null) {
            rootElement.contentEditable = "true";
            const index = totalSteps;
            const editorState = timeTravelLogs[index].editorState;
            editor.setEditorState(editorState);
            currentStepRef.current = index;

            setReplayState(TimeTravelReplayerState.Idle);
          }
        }}
      >
        Exit
      </Button>
    </div>
  );
}
