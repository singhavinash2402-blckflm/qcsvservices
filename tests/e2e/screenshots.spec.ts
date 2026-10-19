import { test } from "@playwright/test";

// Not part of normal runs. Use `npm run test:screens` to capture full-page
// pictures (desktop and phone) in ./screenshots for visual review.
const pages = [
  "/",
  "/services",
  "/services/quality-assurance",
  "/services/it-infrastructure-qualification",
  "/industries/pharmaceuticals",
  "/about",
  "/success-stories",
  "/privacy"
];

const name = (path: string) =>
  path === "/" ? "home" : path.slice(1).replace(/\//g, "-");

for (const path of pages) {
  test(`capture light ${path} @screens`, async ({ page }, testInfo) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: `screenshots/${testInfo.project.name}-light-${name(path)}.png`,
      fullPage: true
    });
  });
}

for (const path of ["/", "/services/sap-services"]) {
  test(`capture dark ${path} @screens`, async ({ page }, testInfo) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.addInitScript(() =>
      window.localStorage.setItem("theme", "dark")
    );
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: `screenshots/${testInfo.project.name}-dark-${name(path)}.png`,
      fullPage: true
    });
  });
}

test("capture the consultation popup @screens", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/services/sap-services");
  await page
    .getByRole("main")
    .getByRole("button", { name: /request a consultation/i })
    .first()
    .click();
  await page.getByRole("dialog").waitFor();
  await page.screenshot({
    path: `screenshots/${testInfo.project.name}-popup.png`
  });
});
