import { expect, test } from "@playwright/test";

test("header is transparent over the hero, then solid after scrolling", async ({
  page
}) => {
  await page.goto("/");
  const header = page.locator("header");
  await expect(header).toHaveAttribute("data-overlay", "true");

  await page.evaluate(() => window.scrollTo(0, 1200));
  await expect(header).toHaveAttribute("data-overlay", "false");
});

test("desktop menu links work and Contact scrolls to the form", async ({
  page,
  isMobile
}) => {
  test.skip(isMobile, "The desktop menu is hidden on phones.");

  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary navigation" });

  await nav.getByRole("link", { name: "Industries" }).click();
  await expect(page).toHaveURL(/\/industries$/);

  await nav.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);

  await page.goto("/");
  await nav.getByRole("link", { name: "Contact" }).click();
  await expect(page.locator("#contact")).toBeInViewport();
});

test("mobile menu opens, has no Home link and reaches the pages", async ({
  page,
  isMobile
}) => {
  test.skip(!isMobile, "Phone layout only.");

  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  const menu = page.getByRole("navigation", { name: "Mobile navigation" });

  await expect(menu.getByRole("link", { name: "Industries" })).toBeVisible();
  await expect(
    menu.getByRole("link", { name: "Home", exact: true })
  ).toHaveCount(0);

  await menu.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
});

test("the logo returns to the home page", async ({ page }) => {
  await page.goto("/about");
  await page.getByRole("link", { name: "QCSV Services home" }).first().click();
  await expect(page).toHaveURL(/\/$/);
});
