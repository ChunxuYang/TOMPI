import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { EditorState } from "lexical";
import { useCallback, useEffect, useRef, useState } from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import {
  blockThresholdInSecAtom,
  currentTimeTravelLogAtom,
  latestEditorStateAtom,
  TimeTravelReplayerState,
  timeTravelReplayerStateAtom,
  TimeTravelState,
  timeTravelStateAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { PlayIcon, ReloadIcon, StopIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";
import PauseForm from "./pause-form";

const PLAYBACK_SPEEDS = [0.5, 0.25, 1, 2, 4];

export default function Replayer() {
  const [editor] = useLexicalComposerContext();

  const timeTravelLogs = useAtomValue(currentTimeTravelLogAtom);

  const latestEditorState = useAtomValue(latestEditorStateAtom);

  const [replayState, setReplayState] = useAtom(timeTravelReplayerStateAtom);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const currentStepRef = useRef<number>(0);
  const [pauseFormOpen, setPauseFormOpen] = useState(false);
  const setTimeTravelState = useSetAtom(timeTravelStateAtom);

  const blockThresholdInSec = useAtomValue(blockThresholdInSecAtom);

  const setEditorState = useCallback(
    (editorState: EditorState) => {
      console.log("setEditorState", editorState);
      editor.setEditorState(editorState);
    },
    [editor]
  );

  const totalSteps = timeTravelLogs.length - 1;

  useEffect(() => {
    setEditorState(timeTravelLogs[totalSteps].editorState);
    currentStepRef.current = totalSteps;
    setSliderValue(totalSteps);
  }, [totalSteps]);

  const [playbackSpeedIndex, setPlaybackSpeedIndex] = useState(2);

  useEffect(() => {
    if (replayState === TimeTravelReplayerState.Playing) {
      let timeoutId: ReturnType<typeof setTimeout>;

      const play = () => {
        const currentStep = currentStepRef.current;

        if (currentStepRef.current === totalSteps) {
          setReplayState(TimeTravelReplayerState.Finished);
          return;
        }

        const currentTime = timeTravelLogs[currentStep].time;
        const nextTime = timeTravelLogs[currentStep + 1].time;
        const timeDiff = nextTime - currentTime;

        if (timeDiff > blockThresholdInSec * 1000) {
          setPauseFormOpen(true);
          setReplayState(TimeTravelReplayerState.Idle);
          return;
        }

        timeoutId = setTimeout(() => {
          currentStepRef.current++;
          setSliderValue(currentStepRef.current);

          const newStep = currentStepRef.current;

          setEditorState(timeTravelLogs[newStep].editorState);

          play();
        }, timeDiff / PLAYBACK_SPEEDS[playbackSpeedIndex]);
      };

      play();

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [
    replayState,
    timeTravelLogs,
    editor,
    playbackSpeedIndex,
    totalSteps,
    blockThresholdInSec,
  ]);

  return (
    <div className="flex flex-col space-y-2 w-full">
      <PauseForm
        open={pauseFormOpen}
        onOpenChange={setPauseFormOpen}
        onClose={() => {
          setPauseFormOpen(false);
          currentStepRef.current++;
          setSliderValue(currentStepRef.current);
          setReplayState(TimeTravelReplayerState.Playing);
        }}
      />

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
                setSliderValue(0);
              }
            } else {
              setReplayState(TimeTravelReplayerState.Idle);
              setPauseFormOpen(true);
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
          Step {sliderValue}/{totalSteps}
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
        value={[sliderValue]}
        onValueChange={([ind]) => {
          setSliderValue(ind);
          const editorState = timeTravelLogs[ind].editorState;
          setEditorState(editorState);
        }}
      />

      <div className="flex justify-between items-center">
        <Button
          variant={"link"}
          onClick={() => {
            const index = totalSteps;

            if (latestEditorState) {
              setEditorState(latestEditorState);
            }

            setSliderValue(index);

            setReplayState(TimeTravelReplayerState.Idle);
            setTimeTravelState(TimeTravelState.Recording);
          }}
        >
          Exit
        </Button>
      </div>
    </div>
  );
}
