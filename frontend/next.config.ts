import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: [], // Add any external domains you might use for images
    remotePatterns: [], // For more specific external image configurations
    unoptimized: false, // Set to true only if you want to disable image optimization
    // If you're having issues with specific image formats:
  }
};

export default nextConfig;
