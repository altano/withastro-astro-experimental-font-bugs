// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    preserveScriptOrder: true,
    fonts: [
      // Inter
      {
        provider: fontProviders.fontsource(), //✅
        name: 'Inter',
        cssVariable: '--font-inter-fontsource',
        fallbacks: ['sans-serif'],
        styles: ['normal'],
      },
      {
        provider: fontProviders.google(), //✅
        name: 'Inter',
        cssVariable: '--font-inter-google',
        fallbacks: ['sans-serif'],
        styles: ['normal'],
      },
      {
        provider: fontProviders.bunny(), //❌ supports 2 weights, not sure which
        name: 'Inter',
        cssVariable: '--font-inter-bunny',
        fallbacks: ['sans-serif'],
        styles: ['normal'],
      },
      {
        provider: fontProviders.bunny(), //❌ supports 3 weights, not sure which
        name: 'Inter',
        cssVariable: '--font-inter-bunny-weight-range',
        weights: ['100 900'],
        fallbacks: ['sans-serif'],
        styles: ['normal'],
      },
      // IBM Plex Mono
      {
        provider: fontProviders.bunny(), //✅
        name: 'IBM Plex Mono',
        cssVariable: '--font-ibm-plex-mono-bunny',
        fallbacks: ['ui-monospace'],
        styles: ['normal'],
      },
      {
        provider: fontProviders.google(), //✅
        name: 'IBM Plex Mono',
        cssVariable: '--font-ibm-plex-mono-google',
        fallbacks: ['ui-monospace'],
        styles: ['normal'],
      },
      {
        provider: fontProviders.fontsource(), //❌ doesn't work at all
        name: 'IBM Plex Mono',
        cssVariable: '--font-ibm-plex-mono-fontsource',
        fallbacks: ['ui-monospace'],
        styles: ['normal'],
      },
    ],
  },
});
