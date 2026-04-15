import { defineConfig } from "astro/config";

// https://astro.build/config
// TODO: Remove `base` once homewithinyourself.nl is configured as the custom
// domain in GitHub Pages settings — custom domains serve from root so base is not needed.
export default defineConfig({
  site: "https://homewithinyourself.nl",
  base: "/hwy_test",
  output: "static",
});
