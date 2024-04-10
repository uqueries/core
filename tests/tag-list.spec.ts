import { test, expect } from "@playwright/test";

test("create/delete tag", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Test Tag");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(
    page.getByText("Test TagTag descriptionИзменитьУдалить"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Удалить" }).click();
  await expect(
    page.getByText("Test TagTag descriptionИзменитьУдалить"),
  ).not.toBeVisible();
});
