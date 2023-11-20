"use client";

// import { Editor } from "@tompi/writing";
import dynamic from "next/dynamic";

import { useTimeTravelLogs } from "@/utils/time-travel-log";

const Editor = dynamic(
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
