/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    images: {
      allowFutureImages: true,
    },
  },
};

module.exports = nextConfig;
