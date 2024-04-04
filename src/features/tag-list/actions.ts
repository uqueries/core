"use server";

import { revalidatePath } from "next/cache";
import { tagRepository } from "@/features/tag-list/tag-repository";

export const createTagAction = async (
  revalidatePagePath: string,
  command: CreateTagListElementCommand,
) => {
  await tagRepository.createTagElement(command);
  await revalidatePath(revalidatePagePath);
};
