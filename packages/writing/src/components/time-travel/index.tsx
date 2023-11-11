import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

import {
  timeTravelLogsAtom,
  TimeTravelRecorderState,
  timeTravelRecorderStateAtom,
  TimeTravelReplayerState,
  timeTravelReplayerStateAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  LoopIcon,
  PlayIcon,
  ReloadIcon,
  StopIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

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
import PauseForm from "./pause-form";

const PLAYBACK_SPEEDS = [0.5, 0.25, 1, 2, 4];

export default function TimeTravel() {
  const [timeTravelState, setTimeTravelState] = useAtom(
    timeTravelRecorderStateAtom
  );

  const [timeTravelLogs, setTimeTravelLogs] = useAtom(timeTravelLogsAtom);

  const [playbackSpeedIndex, setPlaybackSpeedIndex] = useState(2);
  const currentStepRef = useRef<number>(0);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [replayState, setReplayState] = useAtom(timeTravelReplayerStateAtom);
  const [editor] = useLexicalComposerContext();

  const totalSteps = timeTravelLogs.length - 1;

  useEffect(() => {
    if (timeTravelState === TimeTravelRecorderState.Finished) {
      editor.setEditable(false);
    } else {
      editor.setEditable(true);
    }
  }, [timeTravelState]);

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
          currentStepRef.current++;
          setSliderValue(currentStepRef.current);

          const newStep = currentStepRef.current;

          editor.setEditorState(timeTravelLogs[newStep].editorState);

          play();
        }, timeDiff / PLAYBACK_SPEEDS[playbackSpeedIndex]);
      };

      play();

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [replayState, timeTravelLogs, editor, playbackSpeedIndex, totalSteps]);

  const [pauseFormOpen, setPauseFormOpen] = useState<boolean>(false);
  return (
    <>
      <PauseForm open={pauseFormOpen} onOpenChange={setPauseFormOpen} />

      <Card>
        <CardHeader>
          <CardTitle>Time Travel</CardTitle>
          <CardDescription>See how your essay has evolved.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center space-x-2">
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
                setTimeTravelState(TimeTravelRecorderState.Ready);
                currentStepRef.current = totalSteps;
                setSliderValue(totalSteps);
              }}
            >
              <StopIcon className="w-4 h-4 mr-2" />
              Stop Recording
            </Button>
          )}
          {timeTravelState === TimeTravelRecorderState.Ready && (
            <>
              <Button
                variant={"secondary"}
                onClick={() => {
                  setTimeTravelState(TimeTravelRecorderState.Recording);
                }}
              >
                <PlayIcon className="w-4 h-4 mr-2" />
                Record Again
              </Button>
              <Button
                variant={"default"}
                onClick={() => {
                  setTimeTravelState(TimeTravelRecorderState.Finished);
                }}
              >
                <LoopIcon className="w-4 h-4 mr-2" />
                Replay
              </Button>
            </>
          )}

          {timeTravelState === TimeTravelRecorderState.Finished && (
            <div className="flex flex-col space-y-2 w-full">
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

                    setSliderValue(index);

                    setReplayState(TimeTravelReplayerState.Idle);
                    setTimeTravelState(TimeTravelRecorderState.Idle);
                  }
                }}
              >
                Exit
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
