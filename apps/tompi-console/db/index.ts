import { drizzle } from "drizzle-orm/neon-http";

import { neon, neonConfig } from "@neondatabase/serverless";

import * as schema from "./schema";

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DRIZZLE_DATABASE_URL as string);
export const db = drizzle(sql, { schema });
