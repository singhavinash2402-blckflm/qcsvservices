# Enquiry email setup

How website enquiries reach the client's mailbox.

## How it works

1. A visitor submits the enquiry form (popup or home page section).
2. A server action validates the details, checks for spam, and calls the Resend
   email API.
3. Resend sends one email to the client mailbox (`CONTACT_TO_EMAIL`). The visitor's
   address is set as Reply-To, so replying answers the visitor directly.

Nothing is stored. If Resend is unavailable, the visitor sees a message asking
them to email the address directly.

## Settings (hosting environment variables)

| Name                 | Example                                           | Notes                                                       |
| -------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| `RESEND_API_KEY`     | `re_...`                                          | Create in Resend with sending access only. Never commit it. |
| `CONTACT_TO_EMAIL`   | `info@qcsvservices.in`                            | Mailbox that receives enquiries.                            |
| `CONTACT_FROM_EMAIL` | `QCSV Services Website <website@qcsvservices.in>` | Must use the domain verified in Resend.                     |

Set them for Production and Preview in the hosting dashboard, and in `.env.local`
for local testing. Restart the dev server after changing `.env.local`.

## DNS records (GoDaddy)

Resend gives three records for the verified domain. In GoDaddy, enter only the
host part, not the full domain:

| Type       | Host to enter       | Value                                |
| ---------- | ------------------- | ------------------------------------ |
| MX         | `send`              | Copy from Resend (priority as shown) |
| TXT (SPF)  | `send`              | Copy from Resend                     |
| TXT (DKIM) | `resend._domainkey` | Copy from Resend, exactly            |

These sit on the `send` subdomain and the DKIM selector, so they do not touch
the mailbox records at the root of the domain. Do not enable receiving (Inbound)
in Resend for this domain. Resend also offers an Auto Configure button for GoDaddy.

Keep one SPF record only at the root of the domain (the mailbox provider's).
After Resend shows "Verified", add a DMARC record in monitoring mode:

| Type | Host     | Value                                               |
| ---- | -------- | --------------------------------------------------- |
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:info@qcsvservices.in` |

## Testing

1. Open the site, send an enquiry, check it arrives at the mailbox (also check spam).
2. Press Reply and confirm the visitor's address is filled in.
3. Send with the hidden field filled (developer tools) and confirm nothing is sent.
4. Remove `RESEND_API_KEY` temporarily and confirm the visitor sees the fallback message.
