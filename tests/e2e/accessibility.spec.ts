import { expect, test } from "@playwright/test";

const pages = [
  "/",
  "/services",
  "/services/sap-services",
  "/services/quality-assurance",
  "/industries/pharmaceuticals",
  "/about",
  "/success-stories",
  "/privacy"
];

type Violation = {
  id: string;
  impact?: string | null;
  nodes: { target: unknown }[];
};

/**
 * Automated WCAG scan. It fails on serious and critical problems. Colour contrast
 * findings are recorded as annotations for review instead of failing the run.
 * Needs: npm install -D @axe-core/playwright
 */
async function scan(page: import("@playwright/test").Page, label: string) {
  let AxeBuilder: typeof import("@axe-core/playwright").default;
  try {
    AxeBuilder = (await import("@axe-core/playwright")).default;
  } catch {
    test.skip(true, "Install @axe-core/playwright to run accessibility scans.");
    return;
  }

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  const violations = results.violations as Violation[];

  const contrast = violations.filter((v) => v.id === "color-contrast");
  for (const item of contrast) {
    const targets = item.nodes
      .slice(0, 5)
      .map((node) => JSON.stringify(node.target))
      .join(" ");
    // Printed so it shows in the normal test output as well as the HTML report.
    console.log(
      `[contrast] ${label}: ${item.nodes.length} element(s). First: ${targets}`
    );
    test.info().annotations.push({
      type: "contrast-review",
      description: `${label}: ${item.nodes.length} element(s)`
    });
  }

  const blocking = violations.filter(
    (v) =>
      v.id !== "color-contrast" &&
      (v.impact === "serious" || v.impact === "critical")
  );
  expect(
    blocking.map((v) => `${v.id} (${v.nodes.length})`),
    `${label}: serious accessibility problems`
  ).toEqual([]);
}

for (const path of pages) {
  test(`accessibility scan, light theme: ${path}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    await scan(page, `light ${path}`);
  });
}

for (const path of ["/", "/services/sap-services", "/about"]) {
  test(`accessibility scan, dark theme: ${path}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.addInitScript(() =>
      window.localStorage.setItem("theme", "dark")
    );
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    await scan(page, `dark ${path}`);
  });
}
