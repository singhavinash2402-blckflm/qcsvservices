# Runbook

Everyday tasks and what to do when something goes wrong.

## Quick facts

| Item           | Value                                           |
| -------------- | ----------------------------------------------- |
| Live site      | https://www.qcsvservices.in                     |
| Hosting        | Vercel (project `qcsvservices`)                 |
| Source         | GitHub repository `qcsvservices`, branch `main` |
| Enquiry email  | Resend, delivering to `info@qcsvservices.in`    |
| Domain and DNS | GoDaddy                                         |

## Release a change

1. Create a branch, make the change, run `npm run typecheck && npm run lint && npm run format:check && npm run build`.
2. Open a pull request. Wait for CI and the Vercel preview.
3. Check the preview. Merge into `main`. Vercel deploys to production automatically.

## Roll back a bad release

1. Vercel dashboard, project, **Deployments**.
2. Find the last good production deployment, open the menu, choose **Promote to Production**.
3. Fix the problem on a branch, then release again.

## Change an environment variable

1. Vercel, project, **Settings**, **Environment Variables**. Edit the value for Production (and Preview).
2. Redeploy: **Deployments**, latest, **Redeploy**. Variables only apply to new deployments.
3. Keep `.env.example` in the repository in step with the list of names.

## Update content

| To change                                | Edit                                                                                            |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Contact details, company name            | `src/config/site.ts`                                                                            |
| A service, industry, story or About text | the matching file in `src/config/`                                                              |
| Add a service                            | add one entry in `src/config/services.ts`, add its photo as `public/images/services/<slug>.jpg` |
| Show an announcement above the menu      | set `announcement` in `src/config/site.ts`                                                      |
| Privacy Policy or Terms                  | `src/config/legal.ts` (update the date)                                                         |

Photos: 2000 px wide JPEG, under about 400 KB. Run `npm run check:images` to find missing files.

## Search engine indexing

- On: set `NEXT_PUBLIC_ALLOW_INDEXING` to `true` for Production, then redeploy.
- Off: set it to anything else and redeploy. Pages become `noindex` and `robots.txt` blocks crawlers.

## Redirect the default Vercel address to the real domain

Vercel keeps serving `qcsvservices.vercel.app` after a custom domain is connected.

1. Vercel, project, **Settings**, **Domains**.
2. Find the `.vercel.app` entry, click **Edit**, choose to redirect it to `www.qcsvservices.in`, save.

## Enquiry emails are not arriving

1. Vercel logs: look for "Enquiry not sent" (settings missing) or "Resend returned" with a status.
2. Resend dashboard, **Emails**: is the message listed? What status?
3. Resend, **Domains**: all records must show Verified. If not, check the three DNS records in GoDaddy.
4. Check the mailbox spam folder and that the mailbox is not full.
5. Check the three environment variables exist for Production.
6. If Resend is down, the form shows visitors the mailbox address as a fallback.

## Rotate the Resend API key

1. Resend, **API Keys**: create a new key with sending access only.
2. Update `RESEND_API_KEY` in Vercel, redeploy, send a test enquiry.
3. Delete the old key.

## Dependency updates

- Dependabot opens weekly pull requests. Merge minor and patch updates once CI is green.
- Major versions (for example a new Next.js, React or Tailwind major) need a branch, a full test
  run and a visual check before merging.
- After any update run the browser tests (`docs/07-quality/test-plan.md`).
- Security advisories: the check that matters is `npm audit --omit=dev` (packages that ship to
  visitors). CI runs it. Advisories in build tools (for example the Tailwind 3 and ESLint
  chains) cannot be reached by visitors; they clear when those tools move to new major versions.
  Do not run `npm audit fix --force`.
- To try a major update from a Dependabot pull request on your computer:
  `git fetch origin pull/<number>/head:pr-<number>`, `git checkout pr-<number>`, `npm ci`, then
  `npm run typecheck && npm run lint && npm run build && npm run test:e2e`. Merge only if all pass
  and the screenshots (`npm run test:screens`) look the same.

## Content Security Policy

The policy is in `next.config.ts` and is currently report-only. To enforce it, open the live
site in a browser, watch the console for policy messages across several pages, fix anything
legitimate that is reported, then rename the header to `Content-Security-Policy`.

## If the site is down

1. Open the Vercel status page and the project's latest deployment logs.
2. Check the domain has not expired and DNS records for `www` are intact (GoDaddy).
3. Promote the previous good deployment (see above).
4. If the cause is a code change, revert the pull request in GitHub.
