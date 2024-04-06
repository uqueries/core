import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbClient } from "@/shared/lib/db";
import { privateConfig } from "@/shared/config/private";
import { compact } from "lodash-es";

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],
  providers: compact([
    EmailProvider({
      server: {
        host: privateConfig.EMAIL_SERVER_HOST,
        port: Number(privateConfig.EMAIL_SERVER_PORT),
        auth: {
          user: privateConfig.EMAIL_SERVER_USER,
          pass: privateConfig.EMAIL_SERVER_PASSWORD,
        },
      },
      from: privateConfig.EMAIL_FROM,
    }),
    privateConfig.GITHUB_APP_ID &&
      privateConfig.GITHUB_APP_SECRET &&
      GithubProvider({
        clientId: privateConfig.GITHUB_APP_ID,
        clientSecret: privateConfig.GITHUB_APP_SECRET,
      }),
  ]),
};
