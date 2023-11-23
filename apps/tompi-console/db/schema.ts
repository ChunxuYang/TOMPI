import { InferSelectModel, relations } from "drizzle-orm";
import {
  integer,
  jsonb,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { SerializedEditorState } from "lexical";

import type { AdapterAccount } from "@auth/core/adapters";

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),

  username: text("username").unique(),
});

export type UserModel = InferSelectModel<typeof users>;

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

export const editorStates = pgTable("editorState", {
  id: uuid("id").defaultRandom().primaryKey(),
  time: timestamp("time", { mode: "date", withTimezone: true }).notNull(),
  editorState: jsonb("editorState").notNull().$type<SerializedEditorState>(),
  travelLogId: uuid("travelLogId").notNull(),
  // content is a jsonb type
  // content: text("content").notNull().$type<any>(),
});

export const timeTravelLogs = pgTable("timeTravelLog", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("userId").notNull(),
  saveTime: timestamp("saveTime", { mode: "date", withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type TimeTravelLogModel = InferSelectModel<typeof timeTravelLogs>;
export type EditorStateModel = InferSelectModel<typeof editorStates>;

export const timeTravelLogsRelations = relations(
  timeTravelLogs,
  ({ one, many }) => ({
    user: one(users, {
      fields: [timeTravelLogs.userId],
      references: [users.id],
    }),
    editorStates: many(editorStates),
  })
);

export const editorStatesRelations = relations(editorStates, ({ one }) => ({
  timeTravelLog: one(timeTravelLogs, {
    fields: [editorStates.travelLogId],
    references: [timeTravelLogs.id],
  }),
}));
