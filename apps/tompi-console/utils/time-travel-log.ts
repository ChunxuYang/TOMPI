"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

import { TimeTravelSaveLogItem } from "@tompi/writing";

export const useTimeTravelLogs = (
  initialTimeTravelLogList: TimeTravelSaveLogItem[]
) => {
  const [timeTravelLogList, setTimeTravelLogList] = useState<
    TimeTravelSaveLogItem[]
  >(initialTimeTravelLogList);

  const { data: session } = useSession();

  const userId = session?.user.id;

  console.log("userId", userId);

  const addTimeTravelLog = (log: TimeTravelSaveLogItem) => {
    setTimeTravelLogList((prev) => [...prev, log]);
  };

  const removeTimeTravelLog = (id: string) => {
    setTimeTravelLogList((prev) => prev.filter((log) => log.id !== id));
  };

  const updateTimeTravelLog = (id: string, log: TimeTravelSaveLogItem) => {
    setTimeTravelLogList((prev) => {
      const index = prev.findIndex((log) => log.id === id);
      if (index === -1) {
        return prev;
      }
      return [...prev.slice(0, index), log, ...prev.slice(index + 1)];
    });
  };

  return {
    timeTravelLogList,
    addTimeTravelLog,
    removeTimeTravelLog,
    updateTimeTravelLog,
  };
};
