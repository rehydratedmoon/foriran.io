import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import solidJs from "@astrojs/solid-js";
import preact from '@astrojs/preact';
import react from '@astrojs/react';
// import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import addClasses from './add-classes.mjs';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  // srcDir: "./",
  // contentDir: './content',
  site: `https://foriran.io`,
  integrations: [
    UnoCSS(),
    solidJs(),
     preact(),
    // Enable React for the Algolia search component.
    react(),

    // mdx(),
    sitemap(),
  ],
    vite: {
    plugins: [VitePWA()],
  },
  // experimental: {
  //   assets: true
  // }
// // to enable these features in the future.
    // markdown: {
  //   remarkPlugins: ['remark-code-titles'],
  //   rehypePlugins: [
  //     'rehype-slug',
  //     ['rehype-autolink-headings', { behavior: 'prepend' }],
  //     ['rehype-toc', { headings: ['h2', 'h3'] }],
  //     [addClasses, { 'h1,h2,h3': 'title' }],
  //   ],
  // },
});