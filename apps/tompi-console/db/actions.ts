"use server";

import { and, eq, inArray, isNull, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/db";
import { getAuthSession } from "@/lib/options";
import { TimeTravelSaveLogItem } from "@tompi/writing";

import { editorStates, timeTravelLogs } from "./schema";

export async function getTimeTravelLogs(): Promise<TimeTravelSaveLogItem[]> {
  const session = await getAuthSession();

  if (!session) {
    throw Error("Not logged in");
  }

  const userId = session.user.id;

  const logsWithEditorStates =
    (await db.query.timeTravelLogs.findMany({
      with: {
        editorStates: true,
      },
      where: eq(timeTravelLogs.userId, userId),
    })) || [];

  const logs: TimeTravelSaveLogItem[] = (logsWithEditorStates || []).map(
    (log) => ({
      id: log.id,
      saveTime: log.saveTime,
      log: log.editorStates.map((editorState) => ({
        id: editorState.id,
        time: editorState.time,
        editorState: editorState.editorState,
      })),
    })
  );

  revalidatePath("/");

  return logs;
}

export async function addTimeTravelLog(log: TimeTravelSaveLogItem) {
  console.log("addTimeTravelLog 333", log);
  const session = await getAuthSession();

  if (!session) {
    throw Error("Not logged in");
  }

  const userId = session.user.id;

  const travelLogId = uuidv4();

  await db.insert(timeTravelLogs).values([
    {
      userId,
      id: travelLogId,
      saveTime: new Date(log.saveTime),
    },
  ]);

  console.log("added time travel log", travelLogId);

  console.log(log.log[0].time);

  await db.insert(editorStates).values(
    log.log.map((logItem) => ({
      time: new Date(logItem.time),
      editorState: logItem.editorState,
      travelLogId: travelLogId,
    }))
  );

  revalidatePath("/");
}

export async function removeTimeTravelLog(id: string) {
  const session = await getAuthSession();

  if (!session) {
    throw Error("Not logged in");
  }

  const userId = session.user.id;

  await db
    .delete(timeTravelLogs)
    .where(and(eq(timeTravelLogs.id, id), eq(timeTravelLogs.userId, userId)));

  // delete all editor states associated with this log
  await db.delete(editorStates).where(eq(editorStates.travelLogId, id));

  revalidatePath("/");
}
