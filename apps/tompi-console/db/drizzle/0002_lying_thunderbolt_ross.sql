CREATE TABLE IF NOT EXISTS "editorState" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"time" timestamp DEFAULT now(),
	"editorState" jsonb NOT NULL,
	"travelLogId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "timeTravelLog" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" text NOT NULL,
	"saveTime" timestamp DEFAULT now()
);
