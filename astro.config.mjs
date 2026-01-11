// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [vue()],
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
