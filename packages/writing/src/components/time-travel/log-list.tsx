import { useSetAtom } from "jotai";

import {
  currentTimeTravelLogAtom,
  latestEditorStateAtom,
  TimeTravelSaveLogItem,
  TimeTravelState,
  timeTravelStateAtom,
} from "@/stores/time-travel";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface LogListProps {
  logList: TimeTravelSaveLogItem[];
  onDeleteLog: (id: string) => void;
  onAddLog: (log: TimeTravelSaveLogItem) => void;
}

export default function LogList({
  logList,
  onDeleteLog,
  onAddLog,
}: LogListProps) {
  const [editor] = useLexicalComposerContext();
  const setLatestEditorState = useSetAtom(latestEditorStateAtom);
  // const [timeTravelLogList, setTimeTravelLogList] = useAtom(
  //   timeTravelLogListAtom
  // );

  const setTimeTravelState = useSetAtom(timeTravelStateAtom);
  const setCurrentTimeTravelLog = useSetAtom(currentTimeTravelLogAtom);

  return (
    <div className="flex flex-col space-y-2 w-full">
      {logList.length === 0 ? (
        <div className="text-center text-muted-foreground text-sm">
          No logs yet.
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Save Time</TableHead>
              <TableHead>Length</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logList.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{new Date(log.saveTime).toLocaleString()}</TableCell>
                <TableCell>{log.log.length} Actions</TableCell>
                <TableCell className="flex space-x-2">
                  <Button
                    className="px-0"
                    variant={"link"}
                    onClick={() => {
                      // setTimeTravelLogs(log.log);
                      setCurrentTimeTravelLog(log.log);
                      setLatestEditorState(editor.getEditorState());
                      setTimeTravelState(TimeTravelState.Replaying);
                      editor.focus();
                    }}
                  >
                    Replay
                  </Button>
                  <Button
                    className="px-0"
                    variant={"link"}
                    onClick={() => {
                      onDeleteLog(log.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
