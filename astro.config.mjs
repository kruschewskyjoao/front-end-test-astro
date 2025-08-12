import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://corridasbrasil.com.br",
  output: "static",
  trailingSlash: "never", // Alterado de false para 'never'
  build: {
    format: "directory",
  },
});
