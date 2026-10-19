import { expect, test } from "@playwright/test";

test("every page in the sitemap loads with one heading, title, description and canonical link", async ({
  page,
  request
}) => {
  test.setTimeout(120_000);

  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const xml = await response.text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname
  );
  expect(paths.length).toBeGreaterThanOrEqual(30);

  for (const path of paths) {
    const result = await page.goto(path);
    expect(result?.status(), `${path} status`).toBe(200);
    await expect(page.locator("h1"), `${path} h1`).toHaveCount(1);
    await expect(page, `${path} title`).toHaveTitle(/\S+/);
    await expect(
      page.locator('meta[name="description"]'),
      `${path} description`
    ).toHaveAttribute("content", /.{40,}/);

    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(canonical, `${path} canonical`).not.toBeNull();
    expect(new URL(canonical as string).pathname, `${path} canonical`).toBe(
      path
    );
  }
});

test("key pages load without browser errors", async ({ page }) => {
  const problems: string[] = [];
  const policyNotes: string[] = [];

  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const text = message.text();
    if (text.includes("[Report Only]")) policyNotes.push(text);
    else problems.push(`console: ${text}`);
  });

  for (const path of [
    "/",
    "/services",
    "/services/sap-services",
    "/industries/pharmaceuticals",
    "/about",
    "/success-stories"
  ]) {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
  }

  // Policy notes are informational while the policy is report-only.
  for (const note of policyNotes) {
    test
      .info()
      .annotations.push({ type: "csp-report-only", description: note });
  }
  expect(problems).toEqual([]);
});

test("an unknown address shows the not-found page with a 404 status", async ({
  page
}) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: /could not find that page/i })
  ).toBeVisible();
});

test("robots, manifest and the skip link are in place", async ({
  page,
  request
}) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  // The test server runs with indexing switched off.
  expect(await robots.text()).toContain("Disallow: /");

  const manifest = await request.get("/manifest.webmanifest");
  expect(manifest.status()).toBe(200);
  expect((await manifest.json()).name).toBe("QCSV Services");

  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" })
  ).toBeFocused();
});

test("success story links jump to the right story", async ({ page }) => {
  await page.goto("/success-stories#sap-validation");
  await expect(page.locator("#sap-validation")).toBeInViewport();
});

test("the services page ends with the consultation call to action", async ({
  page
}) => {
  await page.goto("/services");
  await expect(
    page.getByRole("heading", { name: "Tell us what your project needs." })
  ).toHaveCount(1);
});

test("framework diagrams render on their service pages", async ({ page }) => {
  await page.goto("/services/quality-assurance");
  await expect(
    page.getByRole("img", { name: /Quality assurance cycle/ })
  ).toBeVisible();

  await page.goto("/services/project-management");
  await expect(
    page.getByRole("img", { name: /Project management methodology/ })
  ).toBeVisible();
});
