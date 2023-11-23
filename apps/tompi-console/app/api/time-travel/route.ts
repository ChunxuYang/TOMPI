import { NextRequest, NextResponse } from "next/server";

import {
  addTimeTravelLog,
  getTimeTravelLogs,
  removeTimeTravelLog,
} from "@/db/actions";

// import type { TimeTravelSaveLogItem } from "@tompi/writing";
export async function GET() {
  const logs = await getTimeTravelLogs();
  return NextResponse.json(logs);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  await addTimeTravelLog(body);
  return NextResponse.json({
    status: "ok",
  });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  await removeTimeTravelLog(body);
  return NextResponse.json({
    status: "ok",
  });
}
