import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Uncomment basePath if deploying to a repository subdirectory (e.g., https://username.github.io/repo-name)
  // basePath: '/repo-name',
};

export default nextConfig;
