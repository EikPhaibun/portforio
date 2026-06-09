import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (produces ./out).
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves this project repo at /portforio.
  // If you switch to a custom domain or a user/root page, remove basePath
  // (and update metadataBase in src/app/layout.tsx to match).
  basePath: isProd ? "/portforio" : "",
};

export default nextConfig;
