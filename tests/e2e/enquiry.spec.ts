import { expect, test, type Locator, type Page } from "@playwright/test";

// The form refuses submissions made within a few seconds of opening, to slow
// bots. Real visitors take longer, so tests wait a little first.
const MIN_FILL_WAIT = 2_800;

async function openPopup(page: Page, path = "/services/sap-services") {
  await page.goto(path);
  await page
    .getByRole("main")
    .getByRole("button", { name: /request a consultation/i })
    .first()
    .click();
  const dialog = page.getByRole("dialog", { name: "Request a consultation" });
  await expect(dialog).toBeVisible();
  return dialog;
}

async function fillValid(
  dialog: Locator,
  message = "We need support with a system upgrade."
) {
  await dialog.getByLabel("Name", { exact: true }).fill("Test Visitor");
  await dialog.getByLabel("Company", { exact: true }).fill("Test Company");
  await dialog.getByLabel("Business email").fill("visitor@example.com");
  await dialog.getByLabel("Message", { exact: true }).fill(message);
}

test("the call to action opens a popup on the same page and Escape closes it", async ({
  page
}) => {
  const dialog = await openPopup(page);
  await expect(page).toHaveURL(/\/services\/sap-services$/);
  // Opened from a service page, so that service is preselected.
  await expect(dialog.getByLabel("Area of interest")).toHaveValue(
    "SAP Services"
  );

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("the server shows a clear message next to a field that needs fixing", async ({
  page
}) => {
  const dialog = await openPopup(page);
  await fillValid(dialog, "too short");
  await page.waitForTimeout(MIN_FILL_WAIT);
  await dialog.getByRole("button", { name: "Send enquiry" }).click();

  await expect(
    dialog.getByText(/tell us a little about your project/i)
  ).toBeVisible();
  // What the visitor typed is kept.
  await expect(dialog.getByLabel("Name", { exact: true })).toHaveValue(
    "Test Visitor"
  );
});

test("when email is not configured the visitor is given the mailbox address", async ({
  page
}) => {
  const dialog = await openPopup(page);
  await fillValid(dialog);
  await page.waitForTimeout(MIN_FILL_WAIT);
  await dialog.getByRole("button", { name: "Send enquiry" }).click();

  const alert = dialog.getByRole("alert");
  await expect(alert).toContainText(/could not send/i);
  await expect(alert).toContainText("info@qcsvservices.in");
});

test("submissions that fill the hidden trap field are quietly ignored", async ({
  page
}) => {
  const dialog = await openPopup(page);
  await fillValid(dialog);
  await dialog.locator('input[name="website"]').evaluate((input) => {
    (input as HTMLInputElement).value = "spam";
  });
  await page.waitForTimeout(MIN_FILL_WAIT);
  await dialog.getByRole("button", { name: "Send enquiry" }).click();

  // The bot sees a normal success message, and nothing is sent.
  await expect(dialog.getByRole("status")).toContainText(/enquiry sent/i);
});
