import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default {
  schema: "./db/schema.ts",
  driver: "pg",
  out: "./db/drizzle",
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL as string,
  },
} satisfies Config;
