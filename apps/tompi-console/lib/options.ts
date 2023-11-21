import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { db } from "@/db";
import { users } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

// import GithubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "user-1057",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        throw new Error("Please contact Chunxu for inner access.");
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.name = token.name;
        session.user.image = token.image as string;
      }
      return session;
    },

    async jwt({ token, user }) {
      const email = token.email;

      const dbUser = (
        await db
          .select()
          .from(users)
          .where(eq(users.email, email as string))
      )[0];

      if (!dbUser) {
        token.id = user.id;
      } else {
        if (!dbUser.username) {
          await db
            .update(users)
            .set({
              username: nanoid(10),
            })
            .where(eq(users.id, dbUser.id));
        }
      }

      return {
        id: dbUser.id,
        email: dbUser.email,
        username: dbUser.username,
        name: dbUser.name,
        image: dbUser.image,
      };
    },
  },
};
