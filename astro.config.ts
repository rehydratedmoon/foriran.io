import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: `https://foriran.io`,
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  integrations: [
    UnoCSS(),
    solidJs(),
    // preact(),
    // Enable React for the Algolia search component.
    // react(),
    // mdx(),
    sitemap(),
    AstroPWA({
      mode: 'development',
      base: '/',
      scope: '/',
      includeAssets: [
        'favicon.svg',
        'fonts/*.woff2',
        'images/*.png',
        'images/*.svg',
        'diagrams/*.png',
        'diagrams/*.svg',
      ],
      manifest: {
        name: 'برای ایران',
        short_name: 'برای ایران',
        theme_color: '#ffffff',
        // background_color: '#000000',
        display: 'standalone',
        scope: '/',
        orientation: 'portrait-primary',
        start_url: '/',
        description: 'گردآوری و سازماندهی اطلاعات خیزش زن زندگی آزادی',
        icons: [
          {
            src: '/pwa/app-icon.svg',
            sizes: '48x48 72x72 96x96 128x128 192x192 256x256 384x384 512x512',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
        sourcemap: true,
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/404$/],
      },
    }),
  ],
});

// archived vite-pwa-plugin configs. removed in favor of @vite-pwa/astro which is easer to install
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

// archived config for markdown. not used. other related files are removed.
// markdown: {
//   syntaxHighlight: false,
//   // remarkPlugins: ['remark-mermaidjs', { launchOptions: { executablePath: chromium.executablePath() } }],
//   rehypePlugins: [renderMermaid],
//   // 'rehype-slug',
//   // ['rehype-autolink-headings', { behavior: 'prepend' }],
//   // ['rehype-toc', { headings: ['h2', 'h3'] }],
//   // [addClasses, { 'h1,h2,h3': 'title' }],
//   // ],
//   // shikiConfig: {
//   //   // Choose from Shiki's built-in themes (or add your own)
//   //   // https://github.com/shikijs/shiki/blob/main/docs/themes.md
//   //   // Add custom languages
//   //   // Note: Shiki has countless langs built-in, including .astro!
//   //   // https://github.com/shikijs/shiki/blob/main/docs/languages.md
//   //   langs: ['javascript'],
//   //   // Enable word wrap to prevent horizontal scrolling
//   //   wrap: true,
//   // },
// },
