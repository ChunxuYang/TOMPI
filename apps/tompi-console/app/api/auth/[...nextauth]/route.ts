import * as dotenv from "dotenv";
import NextAuth from "next-auth";

import { options } from "@/lib/options";

dotenv.config({
  path: ".env.local",
});

const handler = NextAuth(options);

export { handler as GET, handler as POST };
