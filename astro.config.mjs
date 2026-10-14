import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.biradarakshay.com",
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname === "/",
    }),
  ],
});
