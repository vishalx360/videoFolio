/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pdf2json", "pdf-parse"],
  },
};

module.exports = nextConfig;
