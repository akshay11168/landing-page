/**
 * Public site content. Edit this file to change copy, services, projects,
 * and links. Do not invent clients, metrics, testimonials, or credentials.
 */

export type ServicePlacement = "lead" | "related";

export type Service = {
  id: string;
  name: string;
  placement: ServicePlacement;
  problem: string;
  fits: string;
  work: string[];
  aim: string;
};

export type Project = {
  title: string;
  summary: string;
  context?: string;
  tags: string[];
  /** Public https URL. Omit when there is no page to open. */
  href?: string;
  linkLabel?: string;
  featured: boolean;
  sortOrder: number;
};

export type Step = {
  title: string;
  body: string;
};

export type Engagement = {
  title: string;
  body: string;
};

export const site = {
  brandName: "Akshay Biradar",
  jobTitle: "Senior Software Engineer",
  tagline: "Software that holds up as the product grows.",
  title: "Akshay Biradar | Software at Scale for Product Teams",
  description:
    "Akshay Biradar helps product teams whose software has to keep up: system design, services and APIs, PostgreSQL, integrations, and production readiness.",
  url: "https://www.biradarakshay.com",
  email: "enquiry@biradarakshay.com",
  directEmail: "akshay11168@gmail.com",
  phoneDisplay: "+91 96193 75391",
  phoneTel: "+919619375391",
  whatsappUrl: "https://wa.me/919619375391",
  linkedin: "https://www.linkedin.com/in/biradar-akshay/",
  github: "https://github.com/akshay11168",
  /** Set when the engineering portfolio has a public URL. Empty hides the link. */
  portfolioUrl: "",
  careerStart: "May 2019",
  positioning:
    "I help product teams build software that can grow: the services, data, and integrations underneath the product, and the judgment to add complexity only when it earns its place.",
};

export const hero = {
  kicker: "Software at scale, independently",
  before: "I build the software that has to ",
  mark: "hold",
  after: " as the product scales.",
  lede: "For founders and engineering leaders whose product is outgrowing the system underneath it. The work is hands-on: architecture, services, data, and the connections between them — a defined project, a technical review, or senior help with the team you already have.",
  expertiseLabel: "Most often",
  expertise: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
  primaryCta: "Start a conversation",
  secondaryCta: "Explore selected work",
};

export const problems: Step[] = [
  {
    title: "The product is moving faster than the software.",
    body: "New work picks up surprises in the services, the data, or the path between them. Shipping gets heavier just as the business wants to move faster.",
  },
  {
    title: "Growth is exposing the seams.",
    body: "Load, more customers, or another team makes failures that used to be rare show up in production. Retries, duplicates, and slow paths stop being theoretical.",
  },
  {
    title: "You need a direction before adding more.",
    body: "The next product step is clear. The technical one is not. You want a scope and a set of trade-offs, not a new platform for its own sake.",
  },
];

export const services: Service[] = [
  {
    id: "system-design",
    name: "System design and architecture",
    placement: "lead",
    problem: "The next stage of the product needs a system that can carry it.",
    fits: "Founders and engineering leaders who want a recommendation they can build, including what to leave alone.",
    work: [
      "Architecture reviews and technical discovery.",
      "Service boundaries, data flow, and how the pieces should grow.",
      "Reliability, failure modes, and what breaks first under more load or more teams.",
      "A written plan and the trade-offs behind it.",
    ],
    aim: "A scoped approach for the system you have, without machinery you do not need yet.",
  },
  {
    id: "backend-engineering",
    name: "Services and APIs",
    placement: "lead",
    problem: "The services behind the product are getting risky to change.",
    fits: "A product team that needs those services built, repaired, or made easier to keep changing as the product grows.",
    work: [
      "API design and implementation in TypeScript, Node.js, and NestJS.",
      "Modular services, and refactoring aimed at maintainability.",
      "Authentication and authorization where the product actually needs them.",
      "Background work, and a focused look at the parts of the codebase that hurt.",
    ],
    aim: "Services the team can change, with a clearer structure and fewer surprises in the business rules.",
  },
  {
    id: "postgresql-data",
    name: "PostgreSQL, data, and performance",
    placement: "lead",
    problem: "Data-heavy paths are slow, awkward to change, or hard to trust as volume and concurrency grow.",
    fits: "Teams whose product depends on queries, transactions, or a migration they cannot afford to get wrong.",
    work: [
      "Schema, SQL, and index review.",
      "Transaction boundaries and concurrency.",
      "Data-access patterns that match how the product actually reads and writes.",
      "Migration planning, including large tables, plus retention and archival when old data should leave the hot path.",
    ],
    aim: "Clearer data access, and a practical plan for the queries and migrations that are in the way.",
  },
  {
    id: "integrations",
    name: "Integrations and event-driven workflows",
    placement: "lead",
    problem: "More of the product now depends on other systems, and those connections are hard to trust.",
    fits: "Teams taking in third-party data, or passing work between services, where duplicates and partial failure matter as volume grows.",
    work: [
      "Third-party APIs, ingestion, and normalizing inconsistent data.",
      "Messaging and asynchronous processing.",
      "Retries, idempotency, and duplicate handling.",
      "Outbox or event-driven patterns when they fit, plus failure handling you can see.",
    ],
    aim: "Integrations that fail visibly, and that do not apply the same work twice.",
  },
  {
    id: "redis",
    name: "Redis and distributed coordination",
    placement: "related",
    problem: "You need caching, short-lived state, or coordination, and you need to know when Redis is the wrong tool.",
    fits: "A specific bottleneck or coordination problem, not a general scaling plan.",
    work: [
      "Caching, rate limits, and short-lived state.",
      "Distributed locks, with their limits written down.",
      "Queues or work coordination where they earn a place.",
      "Invalidation and the consistency trade-offs that come with them.",
    ],
    aim: "Redis used for a named problem, not as a default answer to load.",
  },
  {
    id: "aws",
    name: "AWS and production readiness",
    placement: "related",
    problem: "The product is ahead of how it is deployed, or production is too hard to see to grow with confidence.",
    fits: "Teams that want a review or hands-on help with how the software is deployed and operated as it grows.",
    work: [
      "AWS architecture and deployment reviews, including RDS, ECS or EKS, load balancing, and CloudFront where they are relevant.",
      "Infrastructure-as-code reviews and Terraform implementation.",
      "Logging, metrics, traces, and alerting, including an OpenTelemetry plan when it helps.",
      "Operational readiness and failure-mode reviews.",
    ],
    aim: "A deployment and observability setup the team can operate, matched to how the system actually runs.",
  },
];

export const contactTopics = [
  ...services.map((service) => ({ value: service.id, label: service.name })),
  {
    value: "not-sure",
    label: "Not sure yet — the product is outgrowing the system",
  },
];

export const projects: Project[] = [
  {
    title: "Messaging system",
    summary:
      "I built a messaging system. The architecture, scale, and business context are not published here.",
    tags: ["Product systems", "Messaging"],
    featured: true,
    sortOrder: 1,
  },
  {
    title: "Offer engine",
    summary:
      "I built an offer engine. Implementation detail stays off this page until it can be described without exposing confidential work.",
    tags: ["Product systems"],
    featured: true,
    sortOrder: 2,
  },
  {
    title: "GPay Activity Studio",
    summary:
      "A one-page tool that reads a Google Pay Takeout export, or a CSV already extracted from one, and turns it into spend, transfer, merchant, and trend views. Parsing and the charts run in the page.",
    context: "A personal project, not a client engagement.",
    tags: ["Data", "Browser tool"],
    href: "https://spend-analyser-gpay.biradarakshay.com",
    linkLabel: "Open GPay Activity Studio",
    featured: true,
    sortOrder: 3,
  },
  {
    title: "Static PDF hosting",
    summary:
      "A static host for PDFs. Each document has a stable URL and a QR code, so replacing the file does not change the link.",
    context:
      "Personal infrastructure for events and documents. The tooling is TypeScript; the public site is static.",
    tags: ["Static hosting", "TypeScript"],
    href: "https://static-hosting.biradarakshay.com",
    linkLabel: "Open the PDF host",
    featured: true,
    sortOrder: 4,
  },
];

export const steps: Step[] = [
  {
    title: "Understand",
    body: "Clarify the business context, the constraints, the current architecture, and what success means.",
  },
  {
    title: "Diagnose",
    body: "Find the main bottlenecks, risks, and trade-offs before choosing tools.",
  },
  {
    title: "Plan",
    body: "Agree on a scoped approach, the milestones, and what will not be done.",
  },
  {
    title: "Build or advise",
    body: "Implement, review, or guide the work we agreed.",
  },
  {
    title: "Validate and hand over",
    body: "Test the result, write down the decisions that matter, and make the next step obvious.",
  },
];

export const engagements: Engagement[] = [
  {
    title: "Focused project",
    body: "A clearly scoped feature, integration, migration, or improvement to a system that needs to grow.",
  },
  {
    title: "Technical discovery",
    body: "Investigate a problem, make the trade-offs explicit, and leave you with recommendations you can act on.",
  },
  {
    title: "Ongoing engineering support",
    body: "Recurring senior help for a team that needs the experience without a full-time hire.",
  },
  {
    title: "Implementation partnership",
    body: "Work with your team from the design through delivery, for an agreed scope.",
  },
];

export const about = {
  paragraphs: [
    "I am a Senior Software Engineer. I have been building software since May 2019, mostly the parts that have to carry a product as it grows: services, data, integrations, and enough operational clarity to see when they fail.",
    "I work inside codebases that already exist. The useful part is judgment — what is actually failing, what can wait, and what should not be rebuilt — explained so a founder and an engineer can make the same decision.",
  ],
  points: [
    "Trade-offs written down, not implied.",
    "Maintainability, reliability, and enough observability to see a failure.",
    "Delivery with the team you already have.",
  ],
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
];

export function discussHref(serviceId: string): string {
  return `/?topic=${encodeURIComponent(serviceId)}#contact`;
}

export const contactCopy = {
  reply:
    "I read every enquiry and reply to the work email you enter. Phone and budget can be left blank.",
  faster: "For a faster reply:",
  receivedTitle: "I've received your request",
  receivedBody: "I'll reply to the email address you entered.",
  mailtoNote:
    "Submitting opens your email app with this enquiry ready to send. Nothing is sent until you send that message.",
};
