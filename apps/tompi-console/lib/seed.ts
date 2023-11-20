import { db } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";

import { NewUser, User, UsersTable } from "./drizzle";

const newUsers: NewUser[] = [
  {
    username: "admin",
    password: "HewAuZz+61lw+w==",
  },
];

export async function seedUser() {
  // Create table with raw SQL
  const createTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
  `);
  console.log(`Created "users" table`);

  const insertedUsers: User[] = await db
    .insert(UsersTable)
    .values(newUsers)
    .returning();
  console.log(`Seeded ${insertedUsers.length} users`);

  return {
    createTable,
    insertedUsers,
  };
}
