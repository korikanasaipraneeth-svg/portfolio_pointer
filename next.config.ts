import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "raw.githubusercontent.com", "images.unsplash.com"],
  },
};

export default nextConfig;
