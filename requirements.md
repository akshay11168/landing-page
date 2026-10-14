# Requirements: Consulting & Software Engineering Landing Page

> **Repository:** `akshay11168/landing-page`  
> **Purpose:** Build a client-facing website that helps turn relevant visitors into consulting, freelance, and software-engineering enquiries.  
> **Long-term direction:** Establish the foundation for an independent software consultancy/company, starting with focused, high-value services and evolving over time.

---

## 1. Instructions to the AI coding agent

You are working inside an existing repository: `https://github.com/akshay11168/landing-page`.

1. **Inspect before changing.** Read the current repository structure, package files, framework, existing components, styles, assets, scripts, deployment setup, and README before making implementation decisions.
2. Preserve useful existing work. Do not replace the stack or rebuild the repository from scratch unless the existing setup genuinely prevents the requirements from being met. Explain any necessary migration before performing it.
3. Treat this document as the product and design brief. Where implementation details are unspecified, choose the simplest maintainable option compatible with the repository.
4. Implement a working, responsive website—not just a mockup or static screenshot. All visible navigation, project links, contact actions, forms, and interactive controls must work.
5. Use real, supplied facts only. Do not invent client names, testimonials, company logos, certifications, revenue, performance improvements, project metrics, or case-study outcomes.
6. If a detail is unknown, keep it configurable and mark it clearly as a placeholder in the code/content. Do not publish placeholder text such as `Lorem ipsum`, fake email addresses, or fabricated social proof.
7. After implementation, run the available lint, type-check, test, and production-build commands. Fix issues introduced by the implementation and document any checks that could not be run.
8. Update the README with local setup, development, build, deployment, and content-editing instructions appropriate to the actual stack.

## 2. Product vision

Create a sharp, credible, personal consultancy landing page for **Akshay Biradar**, a Senior Software Engineer building toward an independent software company.

The site should help a founder, CTO, product leader, or engineering decision-maker quickly understand:

- What kinds of engineering problems Akshay can help solve.
- Which services are available.
- Whether the services fit their current business or technical challenge.
- What relevant work and technical experience can be explored.
- How to start a conversation about a project.

This is **not merely an online CV** and should not feel like a generic developer portfolio. Its primary job is commercial: make it easy for potential clients to understand the value of working with Akshay and contact him.

The business can begin as an independent consultancy/freelance practice. The information architecture and code should leave room for a future company name, additional consultants, more services, and a larger body of case studies without requiring a redesign.

## 3. Business context and positioning

### Current professional profile

- Name: **Akshay Biradar**
- Current designation: **Senior Software Engineer**
- Professional background: software development since May 2019.
- Core strengths and interests: backend engineering, scalable systems, system design, distributed systems, integrations, databases, and cloud infrastructure.
- Main technologies: TypeScript, Node.js, NestJS, PostgreSQL, Redis, and AWS.
- Additional relevant experience/interests include SQL, TypeORM, messaging systems, offer/coupon engines, data ingestion integrations, observability, Docker, Kubernetes, Terraform, and production engineering.

Do not imply that every technology listed is a specialist-level service. Emphasize the strongest fit: backend systems, reliability, data-intensive workflows, integrations, and cloud-aware architecture.

### Initial positioning

Position Akshay as a hands-on backend engineering and systems consultant who helps product teams build, improve, and scale the systems behind their products.

**Working positioning statement (editable):**

> I help product teams build dependable backend systems, untangle complex integrations, and prepare their software for the next stage of growth.

This is a direction for the copy, not a mandatory final headline. The final headline should be concise, specific, human, and understandable to a non-specialist founder as well as a technical CTO.

### Intended audience

Prioritize:

1. Founders and CTOs at startups and small-to-medium product companies.
2. Product teams whose backend is becoming difficult to maintain or scale.
3. Companies needing a senior backend engineer for a defined project or a period of delivery support.
4. Teams modernizing Node.js services, improving database performance, or integrating external systems.
5. Businesses that need technical discovery, architecture guidance, implementation help, or a second engineering opinion.

Do not target every possible customer. The page should make backend and systems expertise the clear center of gravity.

### Client problems to speak to

Use plain, outcome-oriented language around problems such as:

- A backend that has become difficult to change safely.
- Slow or unreliable API and database workflows.
- Race conditions, duplicate processing, or concurrency issues.
- Complex third-party integrations and inconsistent incoming data.
- Systems that need better observability and operational clarity.
- A product that needs a stronger technical foundation before growth.
- A team that needs senior implementation support but is not ready to hire a full-time specialist.
- A new product or service that needs sound backend architecture without unnecessary complexity.

Describe these as problems Akshay can help investigate and solve—not as guaranteed outcomes or claims that every client will experience a specific improvement.

## 4. Services to present

Create clear service cards with a concise description, suitable-client context, and a practical outcome. Keep service content in a centralized data structure or content file so it can be edited without changing layout code.

### Service 1: Backend Engineering

Design and implement backend APIs and business logic using TypeScript, Node.js, and NestJS.

Potential work:
- API design and implementation.
- Modular backend services.
- Refactoring and maintainability improvements.
- Authentication and authorization integration where appropriate.
- Background processing and asynchronous workflows.
- Codebase assessment and targeted remediation.

### Service 2: System Design & Architecture

Help teams make sensible architecture decisions based on current needs and expected growth.

Potential work:
- Architecture reviews and technical discovery.
- Service boundaries and modularization.
- Data-flow and integration design.
- Reliability, failure-mode, and scalability reviews.
- Architecture decision records and implementation plans.
- Trade-off analysis that avoids unnecessary overengineering.

### Service 3: PostgreSQL, Data & Performance

Improve the design and behavior of data-heavy backend workflows.

Potential work:
- Schema and query review.
- SQL-first query optimization.
- Transaction boundaries and concurrency control.
- Indexing and data-access patterns.
- Data migrations and large-table migration planning.
- Data retention and archival approaches where appropriate.

### Service 4: Integrations & Event-Driven Workflows

Build dependable connections between services and external systems.

Potential work:
- Third-party API integrations.
- Data ingestion and normalization.
- Messaging and asynchronous processing.
- Retry, idempotency, and duplicate-handling strategies.
- Outbox/event-driven patterns where suitable.
- Failure handling and integration observability.

### Service 5: Redis & Distributed Coordination

Use Redis and related patterns where they solve a real business problem.

Potential work:
- Caching strategies.
- Rate limiting and short-lived state.
- Distributed locks and coordination, with careful analysis of their limits.
- Queues or work coordination where appropriate.
- Cache invalidation and consistency trade-offs.

Do not market Redis as the answer to every scaling problem. Explain trade-offs when relevant.

### Service 6: AWS & Production Readiness

Help teams improve deployment foundations and production visibility.

Potential work:
- AWS architecture and deployment reviews.
- RDS, ECS/EKS, load balancing, and CloudFront-related design where appropriate.
- Infrastructure-as-code reviews and Terraform implementation.
- Logging, metrics, traces, and alerting.
- OpenTelemetry-based observability planning.
- Operational readiness and failure-mode reviews.

Represent the actual level of service honestly. Do not imply AWS certifications or formal credentials that have not been supplied.

### Service presentation rules

- Feature the strongest three or four services first; place related capabilities under them instead of creating a wall of cards.
- Each service should explain the **business/engineering problem**, the **work involved**, and the **kind of result sought**.
- Avoid guarantees such as “10x faster,” “zero downtime,” or “infinitely scalable.”
- Avoid generic claims such as “best-in-class solutions,” “digital transformation,” or “cutting-edge innovation.”
- Make it clear that engagement begins with understanding the problem and selecting an appropriate scope.

## 5. Engagement models

Show a short section explaining how clients can work with Akshay. Keep it flexible; do not publish rates until they are deliberately supplied.

Possible models:

1. **Focused project** — a clearly scoped feature, integration, migration, or backend improvement.
2. **Technical discovery / architecture review** — investigate a problem, clarify trade-offs, and produce actionable recommendations.
3. **Fractional or ongoing engineering support** — recurring senior backend help for a team that needs expertise without a full-time hire.
4. **Implementation partnership** — work with the client's team from design through delivery for an agreed scope.

Do not promise availability, response times, hours per week, or engagement terms that have not been confirmed. Use language such as “Engagements are scoped around the problem, constraints, and team.”

## 6. Site structure and sections

Build a polished single-page landing page first. Keep components and content organized so additional pages can be added later if useful.

### 6.1 Header / navigation

- Name or simple wordmark: `Akshay Biradar` or a configurable future consultancy brand.
- Navigation links: Services, Work, Approach, About, FAQ (optional).
- Primary CTA: **Discuss a project** or **Start a conversation**.
- Mobile navigation must be keyboard accessible and usable without a mouse.
- Keep the header visually light. A sticky header is optional only if it improves usability.

### 6.2 Hero

The first screen must quickly answer: who is this for, what problems can Akshay help with, and what should a visitor do next?

Include:
- A clear headline focused on backend systems and engineering outcomes.
- One or two sentences describing the types of teams/problems served.
- Primary CTA that moves to the contact section or opens the chosen contact method.
- Secondary CTA such as “Explore selected work.”
- A small, factual expertise line, for example: `TypeScript · Node.js · PostgreSQL · Redis · AWS`.
- An understated visual motif inspired by engineering notes, diagrams, system maps, or workshop artifacts.

Do not use an oversized generic gradient, stock photo of a person at a laptop, fake dashboard, or meaningless animated terminal.

### 6.3 Problem / value section

Use a short, scannable section that lets visitors recognize their situation. Example themes:

- “Your backend is slowing product work down.”
- “Integrations are becoming harder to trust.”
- “You need a clearer technical direction before building more.”

Use concise supporting copy. Avoid making the visitor read a long essay before seeing the services.

### 6.4 Services

Present the services defined in Section 4. Use a small number of well-designed cards or rows, not a huge grid of every technology. Each item should have:
- Service name.
- Client problem it addresses.
- What Akshay can do.
- A small CTA such as “Discuss this challenge” that leads to contact and optionally pre-fills the enquiry topic.

### 6.5 Selected work / project blocks

The site must include display blocks for projects, each with a clear title, summary, role/contribution (when confirmed), relevant technology, and link(s).

Known work themes from Akshay's background:

**A. Messaging system**
- Known fact: Akshay has built a messaging system.
- The exact architecture, scale, business context, and measured impact have not been supplied.
- Describe it as a messaging-system project only until further facts are provided.
- Potential tags: `Backend systems`, `Messaging` (use only if accurate to the implementation).
- Link: configurable; do not invent a repository or case-study URL.

**B. Offer / coupon engine**
- Known fact: Akshay has built an offer engine.
- Related technical experience discussed includes campaigns, coupons, redemptions, limits, PostgreSQL, Redis, concurrency safety, and asynchronous generation. Only attribute these details to the public project if they accurately reflect the real implementation.
- Do not publish internal or confidential implementation details.
- Link: configurable; do not invent a repository or case-study URL.

**C. Agency data-ingestion integrations**
- Known fact: Akshay has built integrations with an agency to ingest data.
- Exact client, agency name, data source, scale, and outcomes are not supplied.
- Keep client/agency identity anonymous unless permission and a public reference are explicitly provided.
- Link: configurable; do not invent a repository or case-study URL.

Project cards should support:
- Title.
- Short, specific summary.
- Problem / context (optional).
- Contribution (optional).
- Approach / interesting engineering challenge (optional).
- Outcome (optional; only with verified evidence).
- Technology tags.
- Primary link and optional secondary link.
- `featured` flag and sort order.

If no public links are ready, the card can link to a site section or show a non-clickable “Case study coming soon” only if it reads intentionally and does not imply a published case study exists. Prefer a short, honest summary over empty buttons.

Create a central data source (for example, a typed TypeScript array or JSON/TS content module) so project cards are easy to add and reorder. Use safe external-link behavior and accessible labels. Never render empty links.

### 6.6 How I work

Show a practical and reassuring delivery approach:

1. **Understand** — clarify business context, constraints, current architecture, and what success means.
2. **Diagnose** — identify the main bottlenecks, risks, and trade-offs before jumping to tools.
3. **Plan** — agree on a scoped approach, milestones, and what will not be done.
4. **Build or advise** — implement, review, or guide the agreed work.
5. **Validate and hand over** — test the result, document important decisions, and make the next steps clear.

Keep this grounded and concise. Do not claim formal processes or service-level agreements that have not been established.

### 6.7 About

Introduce Akshay as a hands-on Senior Software Engineer with experience building backend features and systems, integrations, and data-driven workflows.

Emphasize:
- Engineering judgment and clear trade-offs.
- Practical delivery, not architecture for its own sake.
- Maintainability, reliability, and observability.
- Ability to work with existing teams and codebases.
- Communication that makes complex technical decisions understandable.

Do not invent employers, client names, degrees, awards, certifications, or detailed employment history. Career history has not been supplied for this brief.

### 6.8 Contact / conversion section

This is the most important action section.

Headline direction: **“Have a backend problem worth untangling?”** or another direct, human alternative.

Include:
- A concise invitation to describe the problem.
- Primary contact option: email, once a real public business email is configured.
- Optional contact form with:
  - Name (required).
  - Work email (required).
  - Company or product (optional).
  - What do you need help with? (required; select or free text).
  - Brief project/problem description (required).
  - Phone number (optional; clearly label it as optional and do not block submission if it is blank).
  - Budget/timeline (optional; do not make these required).
- Keep the form short and low-friction. Do not require a phone number or budget to submit an enquiry.
- Provide a direct email link as a fallback for visitors who prefer to contact Akshay themselves.
- A privacy note explaining how enquiry details will be used, once the handling method is known.
- Clear validation, loading, success, and error states if a form is implemented.

**Email delivery requirements:** The main form must deliver the enquiry to Akshay's configured business email. **Use Web3Forms as the chosen provider for the initial implementation.** Integrate its form submission API with the landing page so enquiries are delivered to Akshay's configured email. Do not substitute Formspree or another provider unless Web3Forms proves incompatible with the existing setup and the reason is documented. A custom serverless endpoint using an email delivery provider such as Resend may be considered later if more control is needed. Do not add a backend solely for the form.

Each notification should include the submitted fields, selected service, project description, and the client's email as the reply-to address where supported. Do not expose API secrets in frontend code. Document provider setup, environment variables, delivery destination, and how to test real delivery.

**Important:** A form must actually deliver messages somewhere. Do not build a decorative form that silently discards submissions. Configure Web3Forms for the primary form submission path. If its access key or recipient setup is not yet available:
- Keep the form integration ready for configuration through an environment/configuration placeholder appropriate to the framework.
- Document how Akshay obtains/configures the Web3Forms access key and verifies the recipient email.
- Keep a real `mailto:`-based contact path as a fallback until Web3Forms delivery has been configured and tested.
- Never pretend a message has been sent if it has not.
- Show a success state only after the provider confirms submission; on failure, show a useful error and retry path.
- Include appropriate validation and spam protection supported by the chosen provider.
- Do not commit secrets or API keys to the repository.

Make the primary CTA easy to find near the top and at the bottom of the page.

### 6.9 Footer

Include:
- Name or configurable brand.
- A short positioning phrase.
- Email, once configured.
- LinkedIn: `https://www.linkedin.com/in/biradar-akshay/`
- GitHub: `https://github.com/akshay11168`
- Link to the separate engineering portfolio, once its public URL is configured.
- Copyright year generated dynamically if supported by the chosen stack.
- No dead social icons or placeholder links.

## 7. Separate engineering portfolio

This landing page and the engineering portfolio are separate properties with different purposes:

- **Consulting landing page:** commercial clarity, services, relevant project examples, trust, and client enquiries.
- **Engineering portfolio:** deeper technical writing, engineering decisions, project breakdowns, and professional profile.

Do not turn this landing page into a long CV or duplicate the portfolio in full. Link between the two when the portfolio URL is available. Keep the landing page focused on potential clients and business outcomes.

## 8. Visual design direction

### Overall vibe: Engineering workshop

The site should feel like a thoughtful engineer's workshop: precise, hands-on, well organized, slightly unexpected, and confident. It should feel custom designed rather than generated from a generic SaaS template.

### Palette

Use a restrained palette built around:

- **Warm cream / paper:** primary background.
- **Electric blue:** primary action and selected accents.
- **Bright yellow:** occasional highlight, annotation, label, or small visual punch.
- **Dark ink / charcoal:** body text and high-contrast elements.
- Neutral borders and muted supporting text as needed.

Choose accessible shades and test text contrast. Bright yellow should not be used for small text on a white/cream background if contrast is insufficient.

### Design balance

Aim for roughly **80% clean and professional, 20% quirky**.

Use:
- Strong editorial typography and clear hierarchy.
- Generous but purposeful whitespace.
- Monospace labels for technical metadata, section indices, or small annotations.
- Crisp borders, restrained card treatments, and occasional asymmetry.
- Simple engineering-inspired diagrams, arrows, annotations, grids, or hand-drawn-style marks where they help explain something.
- A few bold, memorable copy moments rather than constant visual noise.
- Deliberate, consistent spacing and a cohesive design system.

Quirkiness should come from layout, copy, small annotations, and visual details—not from making the website hard to use.

Avoid:
- Generic purple/blue SaaS gradients.
- Excessive glassmorphism, floating blobs, and meaningless glow effects.
- Huge rounded cards everywhere.
- Stock photos, fabricated client logos, or decorative illustrations unrelated to the work.
- Skill progress bars, fake metrics, fake testimonials, and fake company badges.
- A full-screen terminal aesthetic or excessive code snippets.
- Excessive animation, parallax, cursor effects, and scroll-jacking.
- Overly corporate stock copy.

### Motion and interaction

- Keep interactions minimal and purposeful.
- Use subtle hover/focus states and short transitions.
- Respect `prefers-reduced-motion`.
- Avoid animations that delay reading or CTA access.
- All interactive elements must have visible keyboard focus.
- Prefer semantic HTML and native browser behavior.

### Responsive behavior

Design mobile-first and verify at narrow, medium, and wide viewport sizes. At minimum, check a small mobile width (~320–375 px), a typical phone (~390–430 px), tablet, and desktop. Avoid horizontal overflow and tiny tap targets.

## 9. Content and copywriting rules

- Use direct, specific, calm, technically credible language.
- Write for both a founder who understands the business problem and a CTO who wants to know whether the engineering fit is real.
- Lead with the problem solved and the value of the engagement; mention technologies as supporting evidence.
- Keep paragraphs short and headings useful.
- Use first person (“I”) while the practice is solo. Make the brand/name configurable so the site can later transition to a company identity.
- Do not imply there is already a team or agency if Akshay is operating independently.
- Do not invent testimonials, clients, case-study metrics, uptime guarantees, performance percentages, pricing, availability, certifications, or a company history.
- Avoid claims like “industry-leading,” “world-class,” “rockstar,” “revolutionary,” and “guaranteed.”
- Do not describe the service as cheap or compete only on price.
- Include concrete examples of suitable projects, but label examples as examples where they are hypothetical.
- Keep copy editable independently of presentation components where practical.

## 10. Technical implementation requirements

### General

- Inspect and follow the existing repository's framework and conventions first.
- Prefer the smallest practical dependency footprint.
- Use TypeScript if the repository already uses it or it can be introduced without unnecessary migration.
- Keep components focused and composable.
- Keep content data separate from layout.
- Use semantic HTML and accessible controls.
- Do not add a database or backend unless required for a real feature.
- Do not add a CMS, analytics, tracking scripts, or third-party service without a clear need and documented configuration.

### Quality

- No broken links, console errors, hydration errors, or obvious layout shifts.
- Use optimized local assets where possible and avoid unnecessary heavy image libraries.
- Use descriptive component names and maintainable CSS.
- Do not use emoji as a substitute for interface icons.
- Add tests for important behavior if the existing project has a test setup.
- Ensure forms, menus, links, and CTAs are keyboard accessible.
- Handle empty optional content safely (e.g., no project link means no link button).

### Contact form and privacy

If a form provider or backend is selected:
- Store its configuration in environment variables where applicable.
- Add an `.env.example` with names and placeholder values only; never commit real credentials.
- Validate user input on the server when a server endpoint is used.
- Include basic spam prevention appropriate to the chosen setup.
- Do not log or expose unnecessary personal information.
- Treat the phone number as optional throughout client-side and server-side validation.
- Document where form submissions are delivered and how to test real email delivery.
- Add a privacy statement that accurately reflects the actual implementation; do not make unsupported compliance claims.
- Set the submitted work email as the reply-to address where the provider supports it, while using a verified sender identity as required by the email service.
- Make success and failure states truthful and accessible.

Use Web3Forms for the primary contact form. Document its setup and delivery test. A `mailto:` link is a fallback, not proof that an email was sent.

## 11. SEO and sharing

Implement foundational SEO:

- Unique page title and meta description.
- Canonical URL when the production domain is known.
- Open Graph and social sharing metadata.
- Favicon/app icon using an original, simple mark or a suitable existing asset.
- Semantic heading hierarchy (one primary H1).
- Descriptive link text and meaningful image alt text.
- Sitemap and robots file if appropriate to the chosen framework and deployment.
- Basic structured data only if it can be accurate; use `Person` or `ProfessionalService` only where the data and intended public identity support it.
- Avoid keyword stuffing and fabricated organization details.

Suggested title direction: `Backend Engineering & Systems Consulting | Akshay Biradar`

Suggested description direction: `Backend engineering, system design, integrations, PostgreSQL, Redis, and AWS support for product teams building dependable software.`

Treat both as editable drafts.

## 12. Performance, accessibility, and security

Target a fast, usable site on mobile and slower connections.

- Avoid unnecessary JavaScript and large dependencies.
- Optimize fonts and images; use system fonts or a small number of appropriately loaded font files.
- Avoid layout shifts by reserving space for visual assets.
- Use correct contrast, focus states, landmarks, labels, and meaningful alt text.
- Ensure keyboard navigation and screen-reader-friendly form errors.
- Respect reduced-motion preferences.
- Use secure external-link attributes where applicable.
- Never expose secrets in frontend code or commit credentials.
- Use safe handling for external URLs and user-supplied form content.
- Avoid collecting unnecessary personal data.

Use Lighthouse or equivalent checks where available. Aim for strong accessibility, performance, best-practice, and SEO results, but do not sacrifice real usability to chase a score.

## 13. Analytics and lead measurement

Do not add invasive tracking by default. The initial site should work without analytics.

Keep a future option to measure:
- Primary CTA clicks.
- Contact form starts and successful submissions.
- Project link clicks.

Only add analytics after the provider, privacy implications, and consent requirements have been considered. Do not send contact-form contents or sensitive user data to analytics.

## 14. Configuration and placeholders

Create a single, easy-to-find content/configuration module for values that may change, including:

- Public name / brand name.
- Short tagline.
- Public contact email.
- LinkedIn URL.
- GitHub URL.
- Engineering portfolio URL.
- Production site URL.
- Project cards and external URLs.
- Services and order.
- Contact form provider settings (environment variables only).

Known links:
- GitHub: `https://github.com/akshay11168`
- LinkedIn: `https://www.linkedin.com/in/biradar-akshay/`
- Repository: `https://github.com/akshay11168/landing-page`

Unknown and intentionally not invented:
- Public business email.
- Final company/consultancy name.
- Production domain.
- Public links for the messaging system, offer engine, and data-ingestion integrations.
- Approved client names, testimonials, and measurable outcomes.
- Public URL of the separate engineering portfolio.
- Pricing and current availability.

Make these gaps visible in the README or a launch checklist, not as broken links on the live site.

## 15. Suggested future-proofing

The first release should remain a simple landing page. Avoid building an unnecessary platform prematurely.

Structure the code so future additions are possible without a rewrite:
- More detailed case-study pages.
- Articles or technical notes.
- A company/team page.
- Additional service offerings.
- A discovery-call scheduling link.
- A proper lead-capture backend or CRM integration.
- Downloadable capability statement.
- Multiple engagement pathways.

Do not implement these future features now unless they are small, clearly useful, and fit the current repository.

## 16. Acceptance criteria

The implementation is ready for review when:

- [ ] The current repository and framework were inspected before implementation.
- [ ] The page communicates the consultancy's focus within the first screen.
- [ ] The primary audience (founders, CTOs, product/engineering leaders) is clear.
- [ ] Services are understandable without requiring deep technical knowledge.
- [ ] Selected work includes the three known project themes without invented details.
- [ ] Project cards only show valid links; missing URLs do not create dead controls.
- [ ] The contact CTA works on desktop and mobile.
- [ ] The contact method actually works, or the setup required to activate it is clearly documented.
- [ ] The visual direction uses cream, electric blue, bright yellow, and dark ink in a restrained engineering-workshop style.
- [ ] The site feels simple, polished, and a little quirky—not like a generic SaaS template.
- [ ] Responsive layouts work without horizontal overflow.
- [ ] Keyboard navigation, focus visibility, form labels, and contrast have been checked.
- [ ] Page title, meta description, social metadata, and favicon are configured.
- [ ] No fake metrics, testimonials, credentials, clients, or outcomes appear.
- [ ] No secrets are committed.
- [ ] Available lint, type-check, tests, and production build pass.
- [ ] README setup and deployment instructions match the actual implementation.
- [ ] A launch checklist identifies all remaining real-world values that need to be supplied.

## 17. Launch checklist for Akshay

Before publishing, supply or decide:

- [ ] Consultancy/company name, or confirmation that the site should launch under `Akshay Biradar`.
- [ ] Public email address for client enquiries.
- [ ] Production domain.
- [ ] Whether project links should point to public repositories, case studies, or relevant portfolio pages.
- [ ] Accurate, non-confidential project descriptions and any evidence-backed outcomes.
- [ ] URL of the separate engineering portfolio when available.
- [ ] Configure Web3Forms and set its access key using the framework-appropriate public configuration mechanism; never mistake a frontend access key for a secret server-side credential.
- [ ] Verify the recipient email with Web3Forms and test real delivery, reply-to behavior, validation, and spam handling.
- [ ] Keep a direct `mailto:` fallback available.
- [ ] Keep phone number optional; decide whether to request it only if useful for the engagement.
- [ ] Any intended pricing/engagement details (optional; do not publish by default).
- [ ] Any testimonials or client names that are both approved and verifiable (optional).

---

## Final instruction

Build a **credible client-acquisition website for a growing software consultancy**, not a generic personal portfolio. The site should make a potential client think:

1. “This person understands the kind of backend problem we have.”
2. “The services and technical focus seem relevant to our situation.”
3. “I can see enough evidence and approach to start a conversation.”
4. “Contacting them is straightforward.”

Prioritize clarity, trust, and a real path to enquiry over decorative complexity or premature features.
