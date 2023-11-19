"use client";

import { useTimeTravelLogs } from "@/utils/time-travel-log";
import { Editor } from "@tompi/writing";

export default function Home() {
  const {
    timeTravelLogList,
    addTimeTravelLog,
    removeTimeTravelLog,
    updateTimeTravelLog,
  } = useTimeTravelLogs([]);
  return (
    <main className="flex w-screen h-screen">
      <div className="flex-1 p-4 flex relative">
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
      </div>
    </main>
  );
}
