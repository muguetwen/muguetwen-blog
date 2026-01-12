// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://blog.muguetwen.top/",
  integrations: [
    vue(),
    sitemap({
      filter: (page) =>
        page !== "https://blog.muguetwen.top/blog" &&
        page !== "https://blog.muguetwen.top/about" &&
        page !== "https://blog.muguetwen.top/posts/",
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "dracula-soft",
    },
  },
  image: {
    // 示例：允许来自单个域名的远程图像优化。
    domains: ["astro.build"],
  },
});
