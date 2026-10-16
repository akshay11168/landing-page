import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { analyticsProps, isAnalyticsHost } from "../src/lib/analytics.ts";
import { contactCopy, contactTopics, offerings, projects, site } from "../src/content/site.ts";
import { mailtoUrl, validateEnquiry } from "../src/lib/enquiry.ts";
import { externalUrl } from "../src/lib/links.ts";
import { llmsTxt, structuredData } from "../src/lib/seo.ts";

const validBase = {
  name: "Ada",
  email: "ada@product.example",
  company: "",
  topic: "technology-strategy",
  topicLabel: "Technology Strategy & Advisory",
  message: "",
  phone: "+919619375391",
  budget: "",
};

describe("public content", () => {
  it("uses the confirmed identity, email, and domain", () => {
    assert.equal(site.brandName, "Akshay Biradar");
    assert.equal(site.email, "enquiry@biradarakshay.com");
    assert.equal(site.url, "https://www.biradarakshay.com");
    assert.equal(site.portfolioUrl, "");
  });

  it("publishes the four offerings from the brief", () => {
    assert.deepEqual(
      offerings.map((offering) => offering.id),
      ["technology-strategy", "technology-leadership", "digital-solutions", "technology-partnerships"],
    );
  });

  it("offers every offering as a contact topic", () => {
    for (const offering of offerings) {
      assert.ok(contactTopics.some((topic) => topic.value === offering.id));
    }
  });

  it("publishes only the four approved projects, with real links or none", () => {
    assert.deepEqual(
      [...projects].sort((a, b) => a.sortOrder - b.sortOrder).map((project) => project.title),
      ["Messaging system", "Offer engine", "GPay Activity Studio", "QR generator"],
    );

    for (const project of projects) {
      if (project.href === undefined) {
        assert.equal(project.linkLabel, undefined);
        continue;
      }
      const url = new URL(externalUrl(project.href) ?? "invalid");
      assert.equal(url.protocol, "https:");
      assert.equal(url.origin, new URL(project.href).origin);
      assert.ok(project.linkLabel && project.linkLabel.trim().length > 0);
    }

    assert.equal(projects.find((project) => project.title === "Messaging system")?.href, undefined);
    assert.equal(projects.find((project) => project.title === "Offer engine")?.href, undefined);
  });

  it("does not include placeholder or invented social proof", () => {
    const blob = JSON.stringify({ site, projects, offerings, contactTopics }).toLowerCase();
    for (const banned of ["lorem ipsum", "example.com", "testimonial", "10x", "guaranteed"]) {
      assert.equal(blob.includes(banned), false, banned);
    }
  });
});

describe("enquiry validation", () => {
  it("accepts a submission when company, topic, and budget are blank", () => {
    assert.deepEqual(validateEnquiry({ ...validBase, company: "", topic: "", budget: "" }), {});
  });

  it("requires name, email, and phone", () => {
    const errors = validateEnquiry({
      ...validBase,
      name: " ",
      email: "not-an-email",
      phone: "",
      topic: "",
      message: "",
    });
    assert.ok(errors.name);
    assert.ok(errors.email);
    assert.ok(errors.phone);
    assert.equal(errors.topic, undefined);
    assert.equal(errors.message, undefined);
  });

  it("rejects a partial phone number and a blank one", () => {
    assert.ok(validateEnquiry({ ...validBase, phone: "12" }).phone);
    assert.ok(validateEnquiry({ ...validBase, phone: "" }).phone);
  });

  it("requires a real work email", () => {
    for (const email of ["not-an-email", "ada@", "ada@product", "a@b.c", "ada@product..example"]) {
      assert.ok(validateEnquiry({ ...validBase, email }).email, email);
    }
    assert.equal(validateEnquiry({ ...validBase, email: "ada.lovelace+work@company.co.uk" }).email, undefined);
  });

  it("builds a mailto that omits blank optional fields", () => {
    const href = mailtoUrl("enquiry@biradarakshay.com", validBase);
    assert.ok(href.startsWith("mailto:enquiry@biradarakshay.com?"));
    const body = decodeURIComponent(href.split("body=")[1] ?? "");
    assert.match(body, /Name: Ada/);
    assert.match(body, /Help with: Technology Strategy & Advisory/);
    assert.match(body, /Phone: \+919619375391/);
    assert.doesNotMatch(body, /Budget/);
    assert.doesNotMatch(body, /Company/);
  });

  it("includes a phone number only when one was provided", () => {
    const href = mailtoUrl("enquiry@biradarakshay.com", {
      ...validBase,
      phone: "+91 98765 43210",
    });
    const body = decodeURIComponent(href.split("body=")[1] ?? "");
    assert.match(body, /Phone: \+91 98765 43210/);
  });
});

describe("search and assistant metadata", () => {
  it("keeps the title and description within snippet length", () => {
    assert.ok(site.title.length <= 60, site.title);
    assert.ok(site.description.length <= 160, String(site.description.length));
    assert.match(site.title, /Akshay Biradar/);
    assert.match(site.description, /Akshay Biradar/);
  });

  it("describes the person and each published service, without social proof", () => {
    const graph = structuredData()["@graph"] as Array<Record<string, unknown>>;
    const types = graph.map((node) => node["@type"]);
    assert.ok(types.includes("Person"));
    assert.ok(types.includes("WebSite"));
    assert.ok(types.includes("WebPage"));
    assert.equal(types.filter((type) => type === "Service").length, offerings.length);

    const person = graph.find((node) => node["@type"] === "Person");
    assert.equal(person?.name, "Akshay Biradar");
    assert.equal(person?.email, "enquiry@biradarakshay.com");
    assert.equal(person?.telephone, "+919619375391");
    assert.deepEqual(person?.sameAs, [
      "https://www.linkedin.com/in/biradar-akshay/",
      "https://github.com/akshay11168",
    ]);

    const blob = JSON.stringify(graph);
    for (const banned of ["aggregateRating", "priceRange", '"address"', "testimonial", "guaranteed"]) {
      assert.equal(blob.includes(banned), false, banned);
    }
    assert.equal(types.includes("Review"), false);
    assert.equal(types.includes("LocalBusiness"), false);

    const studio = graph.find((node) => node["@type"] === "SoftwareApplication");
    assert.equal(studio?.name, "GPay Activity Studio");
    assert.equal(studio?.url, "https://spend-analyser-gpay.biradarakshay.com/");
    assert.deepEqual(studio?.author, { "@id": "https://www.biradarakshay.com/#person" });

    const home = graph.find((node) => node["@type"] === "WebPage") as { primaryImageOfPage?: { url?: string } };
    assert.equal(home.primaryImageOfPage?.url, "https://www.biradarakshay.com/og.png");
  });

  it("gives a project page its own title, description, and image", () => {
    const graph = structuredData("/work/gpay-activity-studio")["@graph"] as Array<Record<string, unknown>>;
    const page = graph.find((node) => node["@type"] === "WebPage") as {
      name?: string;
      description?: string;
      primaryImageOfPage?: { url?: string; width?: number };
    };
    assert.equal(page.name, "GPay Activity Studio | Akshay Biradar");
    assert.match(page.description ?? "", /spend, transfer, merchant, and trend/);
    assert.equal(
      page.primaryImageOfPage?.url,
      "https://www.biradarakshay.com/projects/Gpay%20studio.png",
    );
    assert.equal(page.primaryImageOfPage?.width, undefined);

    const aboutPage = structuredData("/about")["@graph"].find((node) => node["@type"] === "WebPage") as {
      name?: string;
    };
    assert.equal(aboutPage.name, "About Akshay | Akshay Biradar");
  });

  it("gives assistants the public facts and the limits of those facts", () => {
    const text = llmsTxt();
    assert.match(text, /^# Akshay Biradar/);
    assert.match(text, /enquiry@biradarakshay\.com/);
    assert.match(text, /akshay11168@gmail\.com/);
    assert.match(text, /\+91 96193 75391/);
    assert.match(text, /https:\/\/www\.biradarakshay\.com\/#technology-strategy/);
    assert.match(text, /https:\/\/spend-analyser-gpay\.biradarakshay\.com/);
    assert.match(text, /\/work\/messaging-system/);
    assert.match(text, /does not publish/);
    assert.doesNotMatch(text, /lorem ipsum|example\.com|10x|guaranteed/i);
  });

  it("keeps the public contact note free of setup language", () => {
    const blob = JSON.stringify(contactCopy).toLowerCase();
    for (const banned of ["web3forms", "analytics", "reply-to", "access key"]) {
      assert.equal(blob.includes(banned), false, banned);
    }
    assert.match(contactCopy.receivedBody, /email address you entered/);
  });
});

describe("analytics properties", () => {
  it("drops enquiry contents and keeps only short labels", () => {
    assert.deepEqual(
      analyticsProps({
        location: "hero",
        project: "gpay-activity-studio",
        path: "/",
        email: "ada@product.example",
        message: "The checkout API retries",
      }),
      { location: "hero", project: "gpay-activity-studio", path: "/" },
    );
    assert.deepEqual(analyticsProps({ location: "ada@product.example", project: "+919619375391" }), {});
  });

  it("ignores local development hosts", () => {
    assert.equal(isAnalyticsHost("localhost"), false);
    assert.equal(isAnalyticsHost("127.0.0.1"), false);
    assert.equal(isAnalyticsHost("www.biradarakshay.com"), true);
  });
});
