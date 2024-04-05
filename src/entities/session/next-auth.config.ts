import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const nextAuthConfig: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_ID ?? "",
      clientSecret: process.env.GITHUB_APP_SECRET ?? "",
    }),
  ],
};
