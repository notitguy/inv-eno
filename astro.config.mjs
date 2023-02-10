import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import preact from "@astrojs/preact";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://enotrattoria.invitaly.cz',
  integrations: [astroI18next(), preact(), partytown()]
});