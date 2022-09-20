/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    images: {
      allowFutureImages: true
    }
  },

  images: {
    domains: ["files.stripe.com"]
  }
}

module.exports = nextConfig
