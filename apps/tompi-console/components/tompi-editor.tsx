"use client";

import dynamic from "next/dynamic";

import { useTimeTravelLogs } from "@/utils/time-travel-log";
import { EditorProps } from "@tompi/writing";

const Editor = dynamic<EditorProps>(
  () => import("@tompi/writing").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

export default function TompiEditor() {
  const {
    timeTravelLogList,
    addTimeTravelLog,
    removeTimeTravelLog,
    updateTimeTravelLog,
  } = useTimeTravelLogs([]);

  return (
    <div className="flex-1 relative">
      <Editor
        timeTravelConfiguration={{
          enabled: true,
          logsList: timeTravelLogList,
          onAddLog: addTimeTravelLog,
          onUpdateLog: updateTimeTravelLog,
          onDeleteLog: removeTimeTravelLog,
        }}
      />
    </div>
  );
}
