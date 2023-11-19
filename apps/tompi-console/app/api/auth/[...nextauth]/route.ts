import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

console.log("GITHUB_ID", process.env.GITHUB_ID);
console.log("GITHUB_SECRET", process.env.GITHUB_SECRET);

const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const user = {
          id: "1",
          name: "Test",
          email: "test@test.com",
          password: "test",
        };
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
