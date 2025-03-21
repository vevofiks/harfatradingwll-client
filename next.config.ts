import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol:"https",
        hostname:'imgs.search.brave.com',
        port:'',
        pathname:'/juw2_ymqgAX0yicjgtuHJovshrcLZ7HYjMMx_JxVTN0/**'
      }], 
    unoptimized: false,  
  }
};

export default nextConfig;
