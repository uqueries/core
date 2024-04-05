import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbClient } from "@/shared/lib/db";
import { privateConfig } from "@/shared/config/private";
import { compact } from "lodash-es";

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],
  providers: compact([
    privateConfig.GITHUB_APP_ID &&
      privateConfig.GITHUB_APP_SECRET &&
      GithubProvider({
        clientId: privateConfig.GITHUB_APP_ID,
        clientSecret: privateConfig.GITHUB_APP_SECRET,
      }),
  ]),
};
