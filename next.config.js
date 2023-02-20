const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const UnoCSS = require("@unocss/webpack").default;

// const { withContentlayer } = require("next-contentlayer");

const withPWA = require("next-pwa");

const nextConfig = withPWA(
  withMDX({
    // experimental: {
    //   appDir: true,
    // },
    swcMinify: true,
    // reactStrictMode: true,
    // typescript: {
    //   ignoreBuildErrors: true,
    // },
    webpack(config) {
      config.cache = false;
      config.plugins.push(
        UnoCSS() // <--
      );
      return config;
    },
    pageExtensions: ["tsx", "md", "rtl.md", "rtl.mdx", "js", "jsx", "mdx"],
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      fallbacks: {
        image: "/static/images/fallback.png",
        // document: '/other-offline',  // if you want to fallback to a custom    page other than /_offline
        // font: '/static/font/fallback.woff2',
        // audio: ...,
        // video: ...,
      },
    },
  })
);

module.exports = nextConfig;
