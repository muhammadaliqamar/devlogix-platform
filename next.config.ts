import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'standalone', // Disabled for cPanel CloudLinux compatibility
  // CloudLinux Node.js Selector manages node_modules via virtual environment
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn3d.iconscout.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Allow Sanity Images
      },
    ],
  },
};

export default nextConfig;