import { eq } from "drizzle-orm";
import { User } from "next-auth";

import { db, UsersTable } from "@/lib/drizzle";

type LoginFn = (username: string, password: string) => Promise<User>;

export const login: LoginFn = async (username, password) => {
  // if no such table, create it
  let user;

  user = await db
    .select()
    .from(UsersTable)
    .where(eq(UsersTable.username, username))
    .then((users) => users[0]);

  if (!user) {
    throw new Error(`No user found for username: ${username}`);
  }
  if (user.password !== password) {
    throw new Error(`Invalid password for username: ${username}`);
  }
  return {
    ...user,
    id: user.id.toString(),
  };
};
