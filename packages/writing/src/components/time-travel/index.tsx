import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

import {
  blockThresholdInSecAtom,
  TimeTravelState,
  timeTravelStateAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Label } from "@radix-ui/react-label";

import { TimeTravelConfiguration } from "../lexical-editor/plugins/timetravel-plugin";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import Recorder from "./recorder";
import Replayer from "./replayer";

export default function TimeTravel({
  configuration,
}: {
  configuration: TimeTravelConfiguration;
}) {
  const [editor] = useLexicalComposerContext();
  const timeTravelState = useAtomValue(timeTravelStateAtom);
  const [blockThresholdInSec, setBlockThresholdInSec] = useAtom(
    blockThresholdInSecAtom
  );

  useEffect(() => {
    const rootElement = editor.getRootElement();

    if (!rootElement) {
      return;
    }

    rootElement.contentEditable =
      timeTravelState === TimeTravelState.Replaying ? "false" : "true";
  }, [editor, timeTravelState]);

  if (!configuration || !configuration.enabled) {
    return null;
  }

  return (
    <>
      {/* <PauseForm open={true} onOpenChange={() => {}} onClose={() => {}} /> */}
      <Card>
        <CardHeader>
          <CardTitle>Time Travel</CardTitle>
          <CardDescription>See how your essay has evolved.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center space-x-2">
          {
            {
              [TimeTravelState.Recording]: (
                <Recorder timeTravelConfiguration={configuration} />
              ),
              [TimeTravelState.Replaying]: <Replayer />,
            }[timeTravelState]
          }
        </CardContent>
        <CardFooter>
          <div className="flex flex-col space-y-2 w-full">
            <Label htmlFor="blockThresholdInSec">
              Block Threshold (in sec)
            </Label>
            <Input
              id="blockThresholdInSec"
              type="number"
              placeholder="Block Threshold"
              value={blockThresholdInSec}
              onChange={(e) => {
                setBlockThresholdInSec(Number(e.target.value));
              }}
            />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
