"use client";

import dynamic from "next/dynamic";
import { useTransition } from "react";

import { addTimeTravelLog, removeTimeTravelLog } from "@/db/actions";
import { useTimeTravelLogs } from "@/utils/time-travel-log";
import { EditorProps, TimeTravelSaveLogItem } from "@tompi/writing";

const Editor = dynamic<EditorProps>(
  () => import("@tompi/writing").then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

interface TompiEditorProps {
  timeTravelLogList: TimeTravelSaveLogItem[];
}

export default function TompiEditor({ timeTravelLogList }: TompiEditorProps) {
  // const {
  //   // timeTravelLogList,
  //   addTimeTravelLog,
  //   removeTimeTravelLog,
  //   updateTimeTravelLog,
  // } = useTimeTravelLogs([]);

  const [isPending, startTransition] = useTransition();

  const onAddLog = async (log: TimeTravelSaveLogItem) => {
    console.log("onAddLog", log);
    fetch("/api/time-travel", {
      method: "POST",
      body: JSON.stringify(log),
    });
  };

  const onDeleteLog = async (id: string) => {
    fetch("/api/time-travel", {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  };

  return (
    <div className="flex-1 relative">
      <Editor
        timeTravelConfiguration={{
          enabled: true,
          logsList: timeTravelLogList,
          onAddLog,
          onUpdateLog: () => {},
          onDeleteLog,
        }}
      />
    </div>
  );
}
