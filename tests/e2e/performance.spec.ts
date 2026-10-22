import { expect, test } from "@playwright/test";

type ShiftWindow = Window & { __cls?: number };

test("the home page does not shift while it loads and the hero image rotates", async ({
  page
}) => {
  test.setTimeout(30_000);

  await page.addInitScript(() => {
    const target = window as ShiftWindow;
    target.__cls = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const shift = entry as PerformanceEntry & {
          value: number;
          hadRecentInput: boolean;
        };
        if (!shift.hadRecentInput)
          target.__cls = (target.__cls ?? 0) + shift.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
  });

  await page.goto("/");
  // Long enough to cover the first hero image change (every 7.5 seconds).
  await page.waitForTimeout(9_000);

  const shift = await page.evaluate(() => (window as ShiftWindow).__cls ?? 0);
  // Google treats anything under 0.1 as good. Aim well below it.
  expect(shift).toBeLessThan(0.05);
});
