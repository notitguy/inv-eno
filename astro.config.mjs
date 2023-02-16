import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import preact from "@astrojs/preact";
import partytown from "@astrojs/partytown";
import image from '@astrojs/image';
import compress from "astro-compress";
// import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: 'https://enotrattoria.invitaly.cz/',
  integrations: [astroI18next(), preact(), image(),
    // critters(),
    partytown({
      config: { 
        forward: ["dataLayer.push"],
        resolveUrl: function (url, location, type) {
          if (type === 'script') {
            var proxyUrl = new URL('https://enotrattoria.invitaly.cz/');
            proxyUrl.searchParams.append('url', url.href);
            return proxyUrl;
          }
          return url;
        },
      },
    }),
    compress({
      // html: false,
      css: false,
      img: false,
      svg: false
    })
  ]
});