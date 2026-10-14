import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { contactTopics, projects, services, site } from "../src/content/site.ts";
import { mailtoUrl, validateEnquiry } from "../src/lib/enquiry.ts";
import { externalUrl } from "../src/lib/links.ts";
import { llmsTxt, structuredData } from "../src/lib/seo.ts";

const validBase = {
  name: "Ada",
  email: "ada@product.example",
  company: "",
  topic: "backend-engineering",
  topicLabel: "Services and APIs",
  message: "The checkout API double-charges when a webhook retries.",
  phone: "",
  budget: "",
};

describe("public content", () => {
  it("uses the confirmed identity, email, and domain", () => {
    assert.equal(site.brandName, "Akshay Biradar");
    assert.equal(site.email, "enquiry@biradarakshay.com");
    assert.equal(site.url, "https://www.biradarakshay.com");
    assert.equal(site.portfolioUrl, "");
  });

  it("features four lead services and keeps Redis and AWS related", () => {
    assert.equal(services.filter((service) => service.placement === "lead").length, 4);
    assert.deepEqual(
      services.filter((service) => service.placement === "related").map((service) => service.id),
      ["redis", "aws"],
    );
  });

  it("offers every service as a contact topic", () => {
    for (const service of services) {
      assert.ok(contactTopics.some((topic) => topic.value === service.id));
    }
  });

  it("publishes only the four approved projects, with real links or none", () => {
    assert.deepEqual(
      [...projects].sort((a, b) => a.sortOrder - b.sortOrder).map((project) => project.title),
      ["Messaging system", "Offer engine", "GPay Activity Studio", "Static PDF hosting"],
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
    const blob = JSON.stringify({ site, projects, services, contactTopics }).toLowerCase();
    for (const banned of ["lorem ipsum", "example.com", "testimonial", "10x", "guaranteed"]) {
      assert.equal(blob.includes(banned), false, banned);
    }
  });
});

describe("enquiry validation", () => {
  it("accepts a submission with phone and budget left blank", () => {
    assert.deepEqual(validateEnquiry(validBase), {});
  });

  it("requires name, work email, topic, and description", () => {
    const errors = validateEnquiry({
      ...validBase,
      name: " ",
      email: "not-an-email",
      topic: "",
      message: "",
    });
    assert.ok(errors.name);
    assert.ok(errors.email);
    assert.ok(errors.topic);
    assert.ok(errors.message);
    assert.equal(errors.phone, undefined);
  });

  it("rejects a partial phone number and accepts a blank one", () => {
    assert.ok(validateEnquiry({ ...validBase, phone: "12" }).phone);
    assert.equal(validateEnquiry({ ...validBase, phone: "" }).phone, undefined);
  });

  it("builds a mailto that omits blank optional fields", () => {
    const href = mailtoUrl("enquiry@biradarakshay.com", validBase);
    assert.ok(href.startsWith("mailto:enquiry@biradarakshay.com?"));
    const body = decodeURIComponent(href.split("body=")[1] ?? "");
    assert.match(body, /Name: Ada/);
    assert.match(body, /Help with: Services and APIs/);
    assert.doesNotMatch(body, /Phone:/);
    assert.doesNotMatch(body, /Budget/);
    assert.match(body, /double-charges/);
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
    assert.equal(types.filter((type) => type === "Service").length, services.length);

    const person = graph.find((node) => node["@type"] === "Person");
    assert.equal(person?.name, "Akshay Biradar");
    assert.equal(person?.email, "enquiry@biradarakshay.com");
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
  });

  it("gives assistants the public facts and the limits of those facts", () => {
    const text = llmsTxt();
    assert.match(text, /^# Akshay Biradar/);
    assert.match(text, /enquiry@biradarakshay\.com/);
    assert.match(text, /https:\/\/www\.biradarakshay\.com\/#system-design/);
    assert.match(text, /https:\/\/spend-analyser-gpay\.biradarakshay\.com/);
    assert.match(text, /No public page/);
    assert.match(text, /does not publish/);
    assert.doesNotMatch(text, /lorem ipsum|example\.com|10x|guaranteed/i);
  });
});
