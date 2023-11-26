/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fbkk29-1.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
