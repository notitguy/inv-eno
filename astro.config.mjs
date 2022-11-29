import { defineConfig } from 'astro/config';

import astroI18next from "astro-i18next";

export default defineConfig({
  site: 'https://enotrattoria.invitaly.cz',
  integrations: [
    astroI18next(),
  ],
});
