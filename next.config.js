const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const UnoCSS = require("@unocss/webpack").default;

// const { withContentlayer } = require("next-contentlayer");

// const withPWA = require("next-pwa");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NEXT_PUBLIC_ENV === 'development'
});

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
  })
);

module.exports = nextConfig;
