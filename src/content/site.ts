/**
 * Public site content. Edit this file to change copy, services, projects,
 * and links. Do not invent clients, metrics, testimonials, or credentials.
 */

export type Offering = {
  id: string;
  name: string;
  summary: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  /** One line on the home page. The detail page uses summary. */
  line: string;
  summary: string;
  context?: string;
  tags: string[];
  /** Public https URL. Omit when there is no page to open. */
  href?: string;
  linkLabel?: string;
  /** Thumbnail in public/. */
  image: string;
  featured: boolean;
  sortOrder: number;
};

export type Engagement = {
  title: string;
  body: string;
};

export type Stat = {
  value: number;
  suffix: string;
  display: string;
  label: string;
  detail?: string;
};

export type Logo = {
  src: string;
  alt: string;
};

export const site = {
  brandName: "Akshay Biradar",
  jobTitle: "Senior Software Engineer",
  tagline: "Big ideas are easy. Making them work is the job.",
  title: "Akshay Biradar | Making Ideas Work",
  description:
    "Akshay Biradar helps you turn a what-if into working software: strategy, leadership, engineering, and technology partnerships.",
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
    "We turn a what-if into something that works: the strategy, the expertise, and the hands-on execution.",
};

export const hero = {
  title: "Big Ideas Are Easy. Making Them Work Is the Job.",
  promise: "We turn your “what if?” into “it works”.",
  lede: "Whether you're figuring out what's next, solving what's holding you back or building something entirely new, we bring the strategy, expertise and hands-on execution to help you make it happen.",
  primaryCta: "Explore How We Can Help",
  secondaryCta: "Let’s Talk Now",
};

export const stats: Stat[] = [
  {
    value: 7,
    suffix: "+",
    display: "7+",
    label: "Years",
    detail: "In Technology & Product Delivery",
  },
  {
    value: 10000,
    suffix: "+",
    display: "10,000+",
    label: "Hours of Engineering & Delivery",
  },
  {
    value: 4,
    suffix: "+",
    display: "4+",
    label: "Countries Worked Across",
  },
  {
    value: 13,
    suffix: "+",
    display: "13+",
    label: "Projects & Products Delivered",
  },
];

export const problems: { text: string; image: string }[] = [
  {
    text: "Small projects that don't fit big-agency budgets",
    image: "/elements/budget.png",
  },
  {
    text: "Potential projects lost to delivery capacity or expertise gaps",
    image: "/elements/shelf.png",
  },
  {
    text: "Promising ideas stuck before development",
    image: "/elements/idea.png",
  },
  {
    text: "Projects draining more time and budget than planned",
    image: "/elements/bar-chart.png",
  },
  {
    text: "Uncertainty around what to build and which technology to choose",
    image: "/elements/path.png",
  },
  {
    text: "Engineering teams needing stronger technical direction",
    image: "/elements/technical-support.png",
  },
];

export const offerings: Offering[] = [
  {
    id: "technology-strategy",
    name: "Technology Strategy & Advisory",
    summary: "Make smarter technology decisions.",
    items: [
      "Technology roadmaps & digital transformation",
      "Product discovery & feasibility studies",
      "Technology selection & build-vs-buy decisions",
      "Independent vendor & technical assessments",
      "SaaS product strategy & launch planning",
    ],
  },
  {
    id: "technology-leadership",
    name: "Technology Leadership & Delivery",
    summary: "Get the right expertise without full-time overhead.",
    items: [
      "Project & product delivery management",
      "Technical team extension & mentoring",
      "Project recovery & delivery improvement",
      "Ongoing engineering, maintenance & support",
      "Fractional CTO & engineering leadership",
    ],
  },
  {
    id: "digital-solutions",
    name: "Digital Solutions & Engineering",
    summary: "Turn ideas into working solutions.",
    items: [
      "Websites, web apps & custom platforms",
      "MVPs & SaaS product development",
      "Business process digitisation & automation",
      "API integrations & connected systems",
      "Software modernisation & optimisation",
      "AI-enabled tools & workflows",
    ],
  },
  {
    id: "technology-partnerships",
    name: "Technology Partnerships",
    summary: "Extend your capabilities and deliver more.",
    items: [
      "White-label development for agencies",
      "Technical scoping & project estimation",
      "End-to-end implementation partnerships",
      "Specialist technology support for existing teams",
      "Flexible project-based & ongoing partnerships",
    ],
  },
];

export const extras: Offering[] = [
  { id: "marketing-brand", name: "Marketing & Brand Advisory", summary: "", items: [] },
  { id: "brand-identity", name: "Brand Identity & Starter Kits", summary: "", items: [] },
  { id: "content-creation", name: "Content Creation & Support", summary: "", items: [] },
  { id: "digital-design", name: "Digital Design & Creative Support", summary: "", items: [] },
];

export const partners: Engagement[] = [
  {
    title: "Startups, Founders & CTOs",
    body: "Make smarter technology decisions and turn ideas into market-ready products.",
  },
  {
    title: "Creative & Digital Agencies",
    body: "Expand your services and take on more client projects with a trusted technology partner.",
  },
  {
    title: "Small, Medium & Growing Businesses",
    body: "Streamline operations, automate workflows and modernize your systems.",
  },
  {
    title: "Digital & Engineering Teams",
    body: "Fill expertise gaps, extend team capacity and keep delivery on track.",
  },
];

export const engagements: Engagement[] = [
  {
    title: "Technical Discovery",
    body: "Understand the problem, evaluate options and leave with actionable recommendations.",
  },
  {
    title: "Consultation & Strategy",
    body: "Get expert input on a specific technical or product challenge.",
  },
  {
    title: "One-time or Project-Based Engagement",
    body: "Define the scope, timeline and deliverables upfront.",
  },
  {
    title: "Monthly Retainer",
    body: "Access ongoing engineering, technical support and improvements.",
  },
  {
    title: "Implementation Partnership",
    body: "Move from strategy and planning to building and launch.",
  },
  {
    title: "White-Label Partnership",
    body: "Deliver technology projects under your agency's brand.",
  },
  {
    title: "Team Extension",
    body: "Add experienced technical or project leadership capacity to your existing team.",
  },
  {
    title: "Fractional Leadership",
    body: "Get experienced technology leadership without a full-time hire.",
  },
];

export const projects: Project[] = [
  {
    slug: "messaging-system",
    title: "Messaging system",
    line: "A messaging system. The architecture stays unpublished.",
    summary:
      "I built a messaging system. The architecture, scale, and business context are not published here.",
    tags: ["Product systems", "Messaging"],
    image: "/projects/messaging app.png",
    featured: true,
    sortOrder: 1,
  },
  {
    slug: "offer-engine",
    title: "Offer engine",
    line: "An offer engine. The implementation stays unpublished.",
    summary:
      "I built an offer engine. Implementation detail stays off this page until it can be described without exposing confidential work.",
    tags: ["Product systems"],
    image: "/projects/Offer Engine.png",
    featured: true,
    sortOrder: 2,
  },
  {
    slug: "gpay-activity-studio",
    title: "GPay Activity Studio",
    line: "A browser tool for spend, transfer, merchant, and trend views.",
    summary:
      "A one-page tool that reads a Google Pay Takeout export, or a CSV already extracted from one, and turns it into spend, transfer, merchant, and trend views. Parsing and the charts run in the page.",
    context: "A personal project, not a client engagement.",
    tags: ["Data", "Browser tool"],
    href: "https://spend-analyser-gpay.biradarakshay.com",
    linkLabel: "Open GPay Activity Studio",
    image: "/projects/Gpay studio.png",
    featured: true,
    sortOrder: 3,
  },
  {
    slug: "qr-generator",
    title: "QR generator",
    line: "A browser page that turns text or a link into a QR code.",
    summary:
      "A page that turns any text or link into a QR code in the browser. The code stores that text directly. Nothing is uploaded, and scanning it does not redirect through the site.",
    context: "A personal tool. The page is static.",
    tags: ["Browser tool"],
    href: "https://static-hosting.biradarakshay.com",
    linkLabel: "Open the QR generator",
    image: "/projects/QR Code generator.png",
    featured: true,
    sortOrder: 4,
  },
];

export const exposure: Logo[] = [
  { src: "/logos/thoughtworks.svg", alt: "Thoughtworks" },
  { src: "/logos/infosys.svg", alt: "Infosys" },
  { src: "/logos/jio.svg", alt: "Jio" },
  { src: "/logos/nach.svg", alt: "NACH, National Automated Clearing House" },
  { src: "/logos/melento.svg", alt: "Melento" },
  { src: "/logos/singapore-government.jpg", alt: "Singapore Government" },
  { src: "/logos/icici.svg", alt: "ICICI Bank" },
];

export const about = {
  title: "About Akshay",
  description:
    "About Akshay Biradar: 7+ years solving technology challenges across enterprises, SaaS, and IT services, from strategy through delivery.",
  quote: "Good technology starts with understanding the problem.",
  paragraphs: [
    "Akshay brings 7+ years of experience solving technology challenges across global enterprises, SaaS platforms and IT services businesses. Having worked across government technology, fintech, retail, FMCG and enterprise IT, and delivered projects across the US, India, Singapore and Thailand, he brings a broad understanding of how different businesses use technology to solve problems and grow.",
    "His experience spans the entire technology journey: from ideation and client consulting to strategy, product development and large-scale engineering delivery. Along the way, he has built products, shaped solutions, guided technical decisions and led large engineering teams through complex projects.",
    "But technology expertise is only part of the equation. Akshay focuses on understanding the business problem first, identifying what genuinely needs to change and helping teams make decisions they can stand behind. That means working with existing systems where possible, making trade-offs explicit, building for maintainability and reliability, and giving teams the clarity to deliver well.",
    "Whether you need direction on what to build, help solving a complex technical challenge, or the expertise to move a project forward, Akshay brings together technical depth, business understanding, hands-on execution and the ability to mentor engineering teams to deliver with greater clarity and confidence.",
  ],
  portrait: "/akshay.jpg",
};

const topicSource = [...offerings, ...extras];

export const contactTopics = [
  ...topicSource.map((item) => ({ value: item.id, label: item.name })),
  { value: "not-sure", label: "Not sure yet" },
];

export const nav = [
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services & Offerings" },
  { href: "/#work", label: "Selected Projects" },
];

export function discussHref(serviceId: string): string {
  return `/?topic=${encodeURIComponent(serviceId)}#contact`;
}

export function projectPath(slug: string): string {
  return `/work/${slug}`;
}

export const contactCopy = {
  lede: "Have a project in mind, a challenge to solve, or just want to explore possibilities? We'd love to hear from you.",
  faster: "For a faster reply:",
  receivedTitle: "I've received your request",
  receivedBody: "I'll reply to the email address you entered.",
  mailtoNote:
    "Submitting opens your email app with this enquiry ready to send. Nothing is sent until you send that message.",
};
