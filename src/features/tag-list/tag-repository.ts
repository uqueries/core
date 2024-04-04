import { cache } from "react";
import { dbClient } from "@/shared/lib/db";

class TagRepository {
  getTagList = cache((): Promise<TagListElement[]> => dbClient.tag.findMany());
  createTagElement = (
    command: CreateTagListElementCommand,
  ): Promise<TagListElement> => {
    return dbClient.tag.create({
      data: command,
    });
  };
  deleteTagElement = (
    command: DeleteTagListElementCommand,
  ): Promise<TagListElement> => {
    return dbClient.tag.delete({
      where: { id: command.id },
    });
  };
}

export const tagRepository = new TagRepository();
