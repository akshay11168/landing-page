import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.biradarakshay.com",
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return path !== "/404" && path !== "/404/" && path !== "/llms.txt" && path !== "/llms.txt/";
      },
    }),
  ],
});
