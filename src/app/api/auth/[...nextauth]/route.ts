import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Route",
      credentials: {
        email: { placeholder: "user@gamil.com", type: "email" },
        password: { type: "password" },
      },
      async authorize(data) {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify({
              email: data?.email,
              password: data?.password,
            }),
            headers: { "Content-Type": "application/json" },
          },
        );

        const payload = await response.json();

        if (response.ok) {
          return {
            id: payload.user.email,
            userRes: payload.user,
            tokenRes: payload.token,
          };
        } else {
          throw Error(payload.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userRes = user.userRes;
        token.tokenRes = user.tokenRes;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.userRes;
      session.token = token.tokenRes as string;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
