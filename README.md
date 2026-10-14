# Akshay Biradar — consultancy landing page

Client-facing site for software that has to hold up as a product grows. The public name is Akshay Biradar. The production host is `https://www.biradarakshay.com`.

Product requirements live in `requirements.md`. Public copy, services, projects, and links live in `src/content/site.ts`.

## Local setup

Requires Node.js 22 or newer.

```powershell
npm install
npm run dev
```

Open the URL Astro prints. The contact form works without a Web3Forms key: it opens your email app and does not claim the message was sent.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local development server |
| `npm run check` | Typecheck Astro and TypeScript |
| `npm test` | Content and enquiry-validation tests |
| `npm run build` | Static production build into `dist/` |
| `npm run preview` | Serve the production build locally |

There is no separate ESLint setup. `npm run check` is the typecheck.

## Edit the page

Change `src/content/site.ts`.

- `site.portfolioUrl` — leave `""` until the engineering portfolio has a public URL. An empty value renders no link.
- `projects` — add a card by appending an object. Set `href` and `linkLabel` only for a real `http` or `https` URL. Omit `href` when there is no page to open.
- `services` — `placement: "lead"` is a main service. `placement: "related"` sits under them.
- Do not add client names, testimonials, metrics, certifications, rates, or availability.

Service links such as “Discuss this challenge” open the contact form with that topic selected (`/?topic=backend-engineering#contact`).

## Contact form

Enquiries are meant for `enquiry@biradarakshay.com`.

**Without a Web3Forms key** (the current default):

- The form validates in the browser.
- Submit opens a `mailto:` message to `enquiry@biradarakshay.com` with the fields filled in.
- The page says the email app should open, and that nothing has been sent yet.
- Phone and budget can be left blank.
- A plain email link is always on the page.

**With a Web3Forms key:**

1. Create an access key at [web3forms.com](https://web3forms.com) for `enquiry@biradarakshay.com`.
2. Open the verification email and confirm that inbox is the recipient.
3. Copy `.env.example` to `.env` and set `PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. For GitHub Pages, add a repository secret with the same name and value.
5. Rebuild. The key is public by Web3Forms’ design and will be visible in the built page. It is still not a password, and it should not be committed.
6. Send a real test enquiry. Confirm it arrives at `enquiry@biradarakshay.com`, the reply-to address is the visitor’s work email, a blank phone number is accepted, and a failed submit shows an error rather than a success message.

Web3Forms is called from the browser. There is no backend. The honeypot field `botcheck` is the spam check included here. Turn on any extra spam controls in the Web3Forms dashboard if you want them.

## Deploy

The site is a static Astro build deployed to GitHub Pages from `.github/workflows/deploy.yml` on every push to `main`.

Canonical URL: `https://www.biradarakshay.com`

`public/CNAME` contains `www.biradarakshay.com`, so asset paths stay at the domain root.

In the GitHub repository:

1. Settings → Pages → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `www.biradarakshay.com`. Save it. With a GitHub Actions deploy, the domain also has to be saved here.
3. At the DNS host for `biradarakshay.com`, add a CNAME record from `www` to `akshay11168.github.io`.
4. After the certificate is issued, enforce HTTPS.

`www` is the host this repo is built for. The apex domain (`biradarakshay.com` without `www`) is a separate DNS decision and is not the canonical URL.

The workflow runs tests, the typecheck, and the production build. If `PUBLIC_WEB3FORMS_ACCESS_KEY` is unset, the build still succeeds and the form stays on the email-app path.

## Launch checklist

- [x] Public name: Akshay Biradar
- [x] Enquiry address: enquiry@biradarakshay.com
- [x] Canonical host: https://www.biradarakshay.com
- [x] Selected work: messaging system, offer engine, GPay Activity Studio, static PDF host
- [ ] DNS for `www` and GitHub Pages custom domain, then a live HTTPS check
- [ ] Web3Forms access key, recipient verification, and a real delivery test
- [ ] Public links or fuller non-confidential descriptions for the messaging system and the offer engine
- [ ] Engineering portfolio URL, when that site exists (`site.portfolioUrl`)
- [ ] Rates and availability stay unpublished unless you decide otherwise
- [ ] Testimonials and client names stay off the page unless you explicitly approve them

Location is intentionally omitted.
