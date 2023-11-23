ALTER TABLE "editorState" ALTER COLUMN "time" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "editorState" ALTER COLUMN "time" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "editorState" ALTER COLUMN "time" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "timeTravelLog" ALTER COLUMN "saveTime" SET NOT NULL;