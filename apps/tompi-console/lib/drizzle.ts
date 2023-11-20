import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, uniqueIndex } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

import { sql } from "@vercel/postgres";

export const UsersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  password: text("password").notNull(),
});

export type User = InferSelectModel<typeof UsersTable>;
export type NewUser = InferInsertModel<typeof UsersTable>;

// Connect to Vercel Postgres
export const db = drizzle(sql);
