# Deployment Checklist

## Local Verification

- Run `npm install`.
- Run `npm run build`.
- Run `npm run verify`.
- If a lint script is added later, run `npm run lint`.

## Vercel Setup

- Deploy the repository to Vercel.
- Set `PUBLIC_SITE_URL` to the final production URL, including `https://`.
- Re-run the Vercel build after setting `PUBLIC_SITE_URL`.

## Launch Checks

- Test the homepage.
- Test `/projects`.
- Test `/hire-me`.
- Test the resume button.
- Test the email button.
- Test GitHub and LinkedIn links.
- Test the mobile layout.
- Test the LinkedIn preview.
