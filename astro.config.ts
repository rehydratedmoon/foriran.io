import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import solidJs from '@astrojs/solid-js';
// import preact from '@astrojs/preact';
// import react from '@astrojs/react';
// import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import addClasses from './add-classes.mjs';
import { VitePWA } from 'vite-plugin-pwa';
// import { chromium  } from '@playwright/test';
// import puppeteer from 'puppeteer-core';
import { renderMermaid } from './src/plugins/mermaid';
// https://astro.build/config
export default defineConfig({
  // srcDir: "./",
  // contentDir: './content',
site: `https://foriran.io`,
  integrations: [
    UnoCSS(),
    solidJs(),
    // preact(),
    // Enable React for the Algolia search component.
    // react(),

    // mdx(),
    sitemap(),
  ],
  // vite: {
  //   plugins: [
  //     VitePWA({
  //       devOptions: {
  //         enabled: true,
  //       },
  //       workbox: {
  //         globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
  //       },
  //     }),
  //   ],
  // },
  // publicDir: {
  //   includeAssets: ['fonts/*.ttf', 'images/*.png'],
  // },
  // experimental: {
  //   assets: true
  // }
  // // to enable these features in the future.

  markdown: {
    syntaxHighlight: false,
    // remarkPlugins: ['remark-mermaidjs', { launchOptions: { executablePath: chromium.executablePath() } }],
    rehypePlugins: [renderMermaid],
    // 'rehype-slug',
    // ['rehype-autolink-headings', { behavior: 'prepend' }],
    // ['rehype-toc', { headings: ['h2', 'h3'] }],
    // [addClasses, { 'h1,h2,h3': 'title' }],
    // ],
    // shikiConfig: {
    //   // Choose from Shiki's built-in themes (or add your own)
    //   // https://github.com/shikijs/shiki/blob/main/docs/themes.md
    //   // Add custom languages
    //   // Note: Shiki has countless langs built-in, including .astro!
    //   // https://github.com/shikijs/shiki/blob/main/docs/languages.md
    //   langs: ['javascript'],
    //   // Enable word wrap to prevent horizontal scrolling
    //   wrap: true,
    // },
  },
});
