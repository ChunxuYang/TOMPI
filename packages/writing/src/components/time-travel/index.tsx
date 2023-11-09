import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import {
  timeTravelLogsAtom,
  TimeTravelRecorderState,
  timeTravelRecorderStateAtom,
  TimeTravelReplayerState,
  timeTravelReplayerStateAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { PlayIcon, ReloadIcon, StopIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Slider } from "../ui/slider";
import { Toggle } from "../ui/toggle";

const PLAYBACK_SPEEDS = [0.5, 0.25, 1, 2, 4];

export default function TimeTravel() {
  const [timeTravelState, setTimeTravelState] = useAtom(
    timeTravelRecorderStateAtom
  );

  const [timeTravelLogs, setTimeTravelLogs] = useAtom(timeTravelLogsAtom);

  const [playbackSpeedIndex, setPlaybackSpeedIndex] = useState(2);
  // const [currentStep, setCurrentStep] = useState<number>(0);
  const currentStepRef = useRef<number>(0);
  const [sliderValue, setSliderValue] = useState<number>(0);

  // useEffect(() => {
  //   setSliderValue(currentStepRef.current);
  // }, [currentStepRef.current]);

  const [replayState, setReplayState] = useAtom(timeTravelReplayerStateAtom);
  const [editor] = useLexicalComposerContext();

  // const sliderRef = useRef<HTMLInputElement>(null);

  const totalSteps = timeTravelLogs.length - 1;

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

        timeoutId = setTimeout(() => {
          // currentStepRef.current++;
          // const index = currentStepRef.current;

          currentStepRef.current++;
          // const slider = sliderRef.current;
          // if (slider !== null) {
          //   slider.value = String(currentStepRef.current);
          // }

          setSliderValue(currentStepRef.current);

          const newStep = currentStepRef.current;

          editor.setEditorState(timeTravelLogs[newStep].editorState);

          play();
        }, timeDiff / PLAYBACK_SPEEDS[playbackSpeedIndex]);

        // timeoutId = setTimeout(() => {
        //   // currentStepRef.current++;
        //   // const index = currentStepRef.current;
        //   const newStep = currentStep + 1;
        //   setCurrentStep(newStep);

        //   editor.setEditorState(timeTravelLogs[newStep].editorState);
        //   play();
        // }, timeDiff / PLAYBACK_SPEEDS[playbackSpeedIndex]);
      };

      play();

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [replayState, timeTravelLogs, editor, playbackSpeedIndex, totalSteps]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Time Travel</CardTitle>
        <CardDescription>See how your essay has evolved.</CardDescription>
      </CardHeader>
      <CardContent>
        {timeTravelState === TimeTravelRecorderState.Idle && (
          <Button
            variant={"default"}
            onClick={() => {
              setTimeTravelLogs([]);
              setTimeTravelState(TimeTravelRecorderState.Recording);
            }}
          >
            <PlayIcon className="w-4 h-4 mr-2" />
            Start Recording
          </Button>
        )}
        {timeTravelState === TimeTravelRecorderState.Recording && (
          <Button
            variant={"outline"}
            onClick={() => {
              setTimeTravelState(TimeTravelRecorderState.Finished);
              currentStepRef.current = totalSteps;
              setSliderValue(totalSteps);
            }}
          >
            <StopIcon className="w-4 h-4 mr-2" />
            Stop Recording
          </Button>
        )}
        {timeTravelState === TimeTravelRecorderState.Finished && (
          <Button
            variant={"default"}
            onClick={() => {
              setTimeTravelState(TimeTravelRecorderState.Recording);
              toast("Recording in progress");
            }}
          >
            <PlayIcon className="w-4 h-4 mr-2" />
            Record Again
          </Button>
        )}
      </CardContent>
      <Separator />
      {timeTravelState === TimeTravelRecorderState.Finished && (
        <CardFooter>
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
                      setSliderValue(0);
                    }
                  } else {
                    setReplayState(TimeTravelReplayerState.Idle);
                  }
                }}
              >
                {
                  {
                    [TimeTravelReplayerState.Idle]: (
                      <PlayIcon className="w-4 h-4" />
                    ),
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
              value={[sliderValue]}
              onValueChange={([ind]) => {
                // const ind = Number(value);
                setSliderValue(ind);
                const editorState = timeTravelLogs[ind].editorState;
                editor.setEditorState(editorState);
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
                  // setCurrentStep(index);
                  // currentStepRef.current = index;
                  // const slider = sliderRef.current;

                  // if (slider !== null) {
                  //   slider.value = String(index);
                  // }

                  setSliderValue(index);

                  setReplayState(TimeTravelReplayerState.Idle);
                  setTimeTravelState(TimeTravelRecorderState.Idle);
                }
              }}
            >
              Exit
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
