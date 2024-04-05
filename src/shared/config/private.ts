import { z } from "zod";

const privateConfigSchema = z.object({
  GITHUB_APP_ID: z.string().optional(),
  GITHUB_APP_SECRET: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
