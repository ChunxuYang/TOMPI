import { useAtomValue } from "jotai";
import { useEffect } from "react";

import { TimeTravelState, timeTravelStateAtom } from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import LogList from "./log-list";
import Recorder from "./recorder";
import Replayer from "./replayer";

export default function TimeTravel() {
  const [editor] = useLexicalComposerContext();
  const timeTravelState = useAtomValue(timeTravelStateAtom);

  useEffect(() => {
    if (timeTravelState === TimeTravelState.Replaying) {
      editor.setEditable(false);
    } else {
      editor.setEditable(true);
    }
  }, [editor, timeTravelState]);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Time Travel</CardTitle>
          <CardDescription>See how your essay has evolved.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center space-x-2">
          {
            {
              [TimeTravelState.Recording]: <Recorder />,
              [TimeTravelState.Replaying]: <Replayer />,
            }[timeTravelState]
          }
        </CardContent>
      </Card>
    </>
  );
}
