import { render, screen } from "@testing-library/react";
import { TagItem } from "@/features/tag-list/ui/tag-item";
import userEvent from "@testing-library/user-event";

describe("tag item", () => {
  it("should call delete callback", async () => {
    const onDelete = jest.fn();
    render(
      <TagItem
        tag={{
          id: "tagId",
          name: "tagName",
        }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Удалить"));
    expect(onDelete).toHaveBeenCalled();
  });
});
