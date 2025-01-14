import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**", // This allows any path from the specified domain
      },
    ],
  },
};

module.exports = nextConfig;
//export default nextConfig;
