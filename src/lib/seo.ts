import { hero, projects, services, site, steps } from "../content/site.ts";

const pageUrl = `${site.url}/`;

function nodeId(fragment: string): string {
  return `${pageUrl}#${fragment}`;
}

/** Topics already stated on the page. Do not add specialties that are not published. */
const knowsAbout = [
  "Software at scale",
  "System design",
  ...hero.expertise,
  "NestJS",
  "Integrations",
  "Event-driven workflows",
  "Production readiness",
];

export function structuredData() {
  const sameAs = [site.linkedin, site.github];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": nodeId("website"),
        url: pageUrl,
        name: site.brandName,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": nodeId("person") },
      },
      {
        "@type": "WebPage",
        "@id": nodeId("webpage"),
        url: pageUrl,
        name: site.title,
        description: site.description,
        inLanguage: "en",
        isPartOf: { "@id": nodeId("website") },
        about: { "@id": nodeId("person") },
        mainEntity: { "@id": nodeId("person") },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${site.url}/og.svg`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "Person",
        "@id": nodeId("person"),
        name: site.brandName,
        jobTitle: site.jobTitle,
        description: site.positioning,
        url: pageUrl,
        email: site.email,
        image: `${site.url}/og.svg`,
        sameAs,
        knowsAbout,
        knowsLanguage: "en",
      },
      ...services.map((service) => ({
        "@type": "Service",
        "@id": nodeId(service.id),
        name: service.name,
        serviceType: service.name,
        description: `${service.problem} ${service.aim}`,
        url: `${pageUrl}#${service.id}`,
        provider: { "@id": nodeId("person") },
      })),
    ],
  };
}

/** JSON-LD safe to embed in a script tag. */
export function structuredDataJson(): string {
  return JSON.stringify(structuredData()).replaceAll("<", "\\u003c");
}

/**
 * Plain-text summary for assistants that look for /llms.txt.
 * Facts come from the public page. Limits are stated so a model does not fill them in.
 */
export function llmsTxt(): string {
  const serviceLines = services
    .map(
      (service) =>
        `- [${service.name}](${pageUrl}#${service.id}): ${service.problem} ${service.aim}`,
    )
    .join("\n");

  const projectLines = projects
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((project) => {
      const link = project.href ? ` ${project.href}` : " No public page.";
      const context = project.context ? ` ${project.context}` : "";
      return `- ${project.title}:${context} ${project.summary}${link}`;
    })
    .join("\n");

  const stepLines = steps.map((step) => `- ${step.title}: ${step.body}`).join("\n");

  return `# ${site.brandName}

> ${site.jobTitle}. ${site.tagline}

${site.positioning}

${site.description}

- Site: ${pageUrl}
- Email: ${site.email}
- LinkedIn: ${site.linkedin}
- GitHub: ${site.github}
- Building software since ${site.careerStart}
- Most often: ${hero.expertise.join(", ")}

## Services

${serviceLines}

## Selected work

${projectLines}

## How an engagement runs

${stepLines}

## What this site does not publish

Client names, reviews, rates, availability, and location are not on this site. The messaging system and the offer engine are named only. Their architecture, scale, and business context are not published.
`;
}
