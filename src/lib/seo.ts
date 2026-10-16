import { about, engagements, exposure, extras, hero, offerings, projects, site, stats } from "../content/site.ts";

const home = `${site.url}/`;

function nodeId(fragment: string): string {
  return `${home}#${fragment}`;
}

/** Topics already stated on the page. Do not add specialties that are not published. */
const knowsAbout = [
  ...offerings.map((offering) => offering.name),
  ...extras.map((extra) => extra.name),
];

const shareImage = `${site.url}/og.png`;

function pageCopy(pathname: string): { name: string; description: string; image: string } {
  const project = projects.find(
    (item) => pathname === `/work/${item.slug}` || pathname === `/work/${item.slug}/`,
  );
  if (project) {
    return {
      name: `${project.title} | ${site.brandName}`,
      description: project.summary,
      image: new URL(project.image, site.url).href,
    };
  }
  if (pathname === "/about" || pathname === "/about/") {
    return {
      name: `${about.title} | ${site.brandName}`,
      description: about.description,
      image: shareImage,
    };
  }
  return {
    name: site.title,
    description: site.description,
    image: shareImage,
  };
}

export function structuredData(pathname = "/") {
  const sameAs = [site.linkedin, site.github];
  const pageUrl = new URL(pathname, site.url).href;
  const page = pageCopy(pathname);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": nodeId("website"),
        url: home,
        name: site.brandName,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": nodeId("person") },
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: page.name,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": nodeId("website") },
        about: { "@id": nodeId("person") },
        mainEntity: { "@id": nodeId("person") },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: page.image,
          ...(page.image === shareImage ? { width: 1200, height: 630 } : {}),
        },
      },
      {
        "@type": "Person",
        "@id": nodeId("person"),
        name: site.brandName,
        jobTitle: site.jobTitle,
        description: site.positioning,
        url: `${site.url}/about`,
        email: site.email,
        telephone: site.phoneTel,
        image: `${site.url}${about.portrait}`,
        sameAs,
        knowsAbout,
        knowsLanguage: "en",
      },
      ...offerings.map((service) => ({
        "@type": "Service",
        "@id": nodeId(service.id),
        name: service.name,
        serviceType: service.name,
        description: `${service.summary} ${service.items.join(". ")}.`,
        url: `${home}#${service.id}`,
        provider: { "@id": nodeId("person") },
      })),
      {
        "@type": "SoftwareApplication",
        "@id": "https://spend-analyser-gpay.biradarakshay.com/#app",
        name: "GPay Activity Studio",
        description: projects.find((project) => project.title === "GPay Activity Studio")?.summary,
        url: "https://spend-analyser-gpay.biradarakshay.com/",
        applicationCategory: "FinanceApplication",
        isAccessibleForFree: true,
        author: { "@id": nodeId("person") },
        creator: { "@id": nodeId("person") },
      },
      {
        "@type": "WebApplication",
        "@id": "https://static-hosting.biradarakshay.com/#app",
        name: "QR generator",
        description: projects.find((project) => project.title === "QR generator")?.summary,
        url: "https://static-hosting.biradarakshay.com/",
        applicationCategory: "UtilitiesApplication",
        isAccessibleForFree: true,
        author: { "@id": nodeId("person") },
        creator: { "@id": nodeId("person") },
      },
    ],
  };
}

/** JSON-LD safe to embed in a script tag. */
export function structuredDataJson(pathname = "/"): string {
  return JSON.stringify(structuredData(pathname)).replaceAll("<", "\\u003c");
}

/**
 * Plain-text summary for assistants that look for /llms.txt.
 * Facts come from the public page. Limits are stated so a model does not fill them in.
 */
export function llmsTxt(): string {
  const serviceLines = offerings
    .map(
      (service) =>
        `- [${service.name}](${home}#${service.id}): ${service.summary} ${service.items.join("; ")}.`,
    )
    .join("\n");

  const extraLines = extras.map((extra) => `- ${extra.name}`).join("\n");

  const projectLines = projects
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((project) => {
      const page = `${site.url}/work/${project.slug}`;
      const link = project.href ? ` Live page: ${project.href}` : "";
      const context = project.context ? ` ${project.context}` : "";
      return `- [${project.title}](${page}):${context} ${project.summary}${link}`;
    })
    .join("\n");

  const wayLines = engagements.map((step) => `- ${step.title}: ${step.body}`).join("\n");
  const statLines = stats
    .map((stat) => `- ${stat.display} ${stat.label}${stat.detail ? `, ${stat.detail}` : ""}`)
    .join("\n");
  const logoLines = exposure.map((logo) => logo.alt).join(", ");

  return `# ${site.brandName}

> ${site.jobTitle}. ${site.tagline}

${site.positioning}

${hero.lede}

- Site: ${home}
- About: ${site.url}/about
- Email: ${site.email}
- Faster email: ${site.directEmail}
- Phone and WhatsApp: ${site.phoneDisplay}
- LinkedIn: ${site.linkedin}
- GitHub: ${site.github}
- Building software since ${site.careerStart}

## Figures stated on the home page

${statLines}

## Services

${serviceLines}

## Also offered

${extraLines}

## Selected work

${projectLines}

## Ways to work together

${wayLines}

## Names shown in the exposure section

${logoLines}

## What this site does not publish

Reviews, rates, availability, and location are not on this site. The messaging system and the offer engine are named only. Their architecture, scale, and business context are not published.
`;
}
