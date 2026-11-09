import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// For GitHub Pages project site: https://<user>.github.io/<repo>/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
