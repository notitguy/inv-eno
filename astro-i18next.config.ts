import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "cs",
  locales: ["en"],
  i18nextServer: {// because config.publicDir.pathname is not getting "public" folder in src/index.ts 77
    backend: {
        loadPath: "./public/locales/{{lng}}/{{ns}}.json", 
    }
  }
};

export default config;