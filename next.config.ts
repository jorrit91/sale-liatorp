import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-770ea3447a9240a980fcaeb25bcef091.r2.dev",
      },
    ],
  },
};

export default nextConfig;
