const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const UnoCSS = require("@unocss/webpack").default;

const { withContentlayer } = require("next-contentlayer");


const nextConfig = withMDX({
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
  pageExtensions: ['tsx' , 'md' , 'rtl.md' , 'rtl.mdx' ,'js', 'jsx', 'mdx'],
});

module.exports = withContentlayer(nextConfig)
