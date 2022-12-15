/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactStrictMode: true,
    experimental: { appDir: false }, // this is true if we want to run on local
  },
};

module.exports = nextConfig;
