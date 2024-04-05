import { tagRepository } from "@/features/tag-list/tag-repository";
import { TagItem } from "@/features/tag-list/ui/tag-item";
import { revalidatePath } from "next/cache";

export async function TagList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const tagList = await tagRepository.getTagList();

  const handleDeleteAction = async (tagId: string) => {
    "use server";
    await tagRepository.deleteTagElement({ id: tagId });
    await revalidatePath(revalidatePagePath);
  };

  return (
    <div className="space-y-4 py-4">
      <h1>Список тегов:</h1>
      {tagList.map((element) => (
        <TagItem
          tag={element}
          key={element.id}
          onDelete={handleDeleteAction.bind(null, element.id)}
        />
      ))}
    </div>
  );
}
