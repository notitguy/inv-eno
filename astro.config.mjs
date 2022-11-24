import { defineConfig } from 'astro/config';

//astro-i18next
import astroI18next from "astro-i18next";

export default defineConfig({
  integrations: [astroI18next()],
});
