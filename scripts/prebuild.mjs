// Runs automatically before `npm run build`.
// 1. Clears stale types that `next dev` writes to .next/dev.
// 2. Warns about image paths used in the code that are missing from /public.
import {
  existsSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync
} from "node:fs";
import { join } from "node:path";

rmSync(".next/dev", { recursive: true, force: true });

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const imagePattern =
  /["'`](\/images\/[^"'`\s]+\.(?:jpe?g|png|webp|svg|avif))["'`]/g;
const missing = new Map();

for (const file of walk("src").filter((f) => /\.(ts|tsx)$/.test(f))) {
  for (const match of readFileSync(file, "utf8").matchAll(imagePattern)) {
    if (!existsSync(join("public", match[1]))) {
      missing.set(match[1], file);
    }
  }
}

if (missing.size > 0) {
  console.warn(
    "\nWarning: images referenced in code but missing from /public:"
  );
  for (const [path, file] of missing)
    console.warn(`  ${path}  (used in ${file})`);
  console.warn("");
}

// Production builds should have the enquiry form configured.
if (process.env.VERCEL_ENV === "production") {
  const required = ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL"];
  const absent = required.filter((name) => !process.env[name]);
  if (absent.length > 0) {
    console.warn(
      `\nWarning: enquiry form settings missing in production: ${absent.join(", ")}\n`
    );
  }
}
