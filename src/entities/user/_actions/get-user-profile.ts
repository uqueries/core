"use server";

import { z } from "zod";
import { getUserUseCase } from "@/entities/user/_use-cases/get-user";
import { getAppSessionStrictServer } from "@/entities/user/session.server";

const propsSchema = z.object({
  userId: z.string(),
});

const profileSchema = z.object({
  email: z.string(),
  name: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
});

const resultSchema = z.object({
  profile: profileSchema,
});
export const getUserProfileAction = async (
  props: z.infer<typeof propsSchema>,
) => {
  const { userId } = propsSchema.parse(props);
  const session = await getAppSessionStrictServer();
  const user = await getUserUseCase.exec({ userId, session });

  return resultSchema.parseAsync({
    profile: user,
  });
};
