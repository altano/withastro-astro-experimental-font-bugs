// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    preserveScriptOrder: true,
    fonts: [
      // Inter
      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter-fontsource",
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter-google",
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.bunny(),
        name: "Inter",
        cssVariable: "--font-inter-bunny",
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.bunny(),
        name: "Inter",
        cssVariable: "--font-inter-bunny-weight-range-numbers",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.bunny(),
        name: "Inter",
        cssVariable: "--font-inter-bunny-weight-range-string",
        weights: ["100 900"],
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      // IBM Plex Mono
      {
        provider: fontProviders.bunny(),
        name: "IBM Plex Mono",
        cssVariable: "--font-ibm-plex-mono-bunny",
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.bunny(),
        name: "IBM Plex Mono",
        cssVariable: "--font-ibm-plex-mono-bunny-weight-range",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.google(),
        name: "IBM Plex Mono",
        cssVariable: "--font-ibm-plex-mono-google",
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.google(),
        name: "IBM Plex Mono",
        cssVariable: "--font-ibm-plex-mono-google-weight-range",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.fontsource(),
        name: "IBM Plex Mono",
        cssVariable: "--font-ibm-plex-mono-fontsource",
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
      {
        provider: fontProviders.fontsource(),
        name: "IBM Plex Mono",
        cssVariable: "--font-ibm-plex-mono-fontsource-weight-range",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        fallbacks: ["Wingdings"],
        optimizedFallbacks: false,
        styles: ["normal"],
      },
    ],
  },
});
