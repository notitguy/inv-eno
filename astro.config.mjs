import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import preact from "@astrojs/preact";
// import partytown from "@astrojs/partytown";
import image from '@astrojs/image';
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://enotrattoria.invitaly.cz/',
  integrations: [astroI18next(), preact(), image(),
  // partytown({
  //   config: { 
  //     forward: ["dataLayer.push"],
  //   },
  // }),
  compress({
    css: false,
    img: false,
    svg: false,
  })]
});