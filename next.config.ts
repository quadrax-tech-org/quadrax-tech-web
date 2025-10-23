import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/quadrax-tech-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
