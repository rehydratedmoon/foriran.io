const rehypeAddClasses = require("rehype-add-classes");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypeAddClasses,
        {
          h1: "text-5xl sm:text-7xl fw-900 ls-tightest c-gray12 b-b-1 b-gray6 mb-12 pb-0.3em",
          h2: "text-4xl fw-900 mt-12 mb-4 c-prm11",
          h3: "text-2xl fw-900 mb-4 mt-8 c-prm12 ",
          h4: "fw-700 mt-8 mb-4 c-prm12",
          figure: "w-full max-w-full",
          figcaption: "mt-4 mb-8 text-center c-gray11 italic",
          p: "mt-1em",
          video: "max-w-full w-full",
          img: "max-w-full w-full",
          iframe: "max-w-full w-full",
        },
      ],
    ],
  },
});
const UnoCSS = require("@unocss/webpack").default;

// const { withContentlayer } = require("next-contentlayer");

// const withPWA = require("next-pwa");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NEXT_PUBLIC_ENV === "development",
});

const nextConfig = {
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
};

module.exports = withPWA(withMDX(nextConfig));
