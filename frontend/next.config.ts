/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "deifkwefumgah.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deifkwefumgah.cloudfront.net"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ],
  },
};

module.exports = nextConfig;
