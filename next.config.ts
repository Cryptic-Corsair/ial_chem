import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel doesn't need "standalone" — it builds natively
  // output: "standalone",
  
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  
  // Optimize fonts — reduces bundle size on Vercel
  optimizeFonts: true,
  
  // KaTeX CSS is imported in globals.css; ensure it's bundled
  transpilePackages: ["katex"],
};

export default nextConfig;
