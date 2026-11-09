import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the E2B/Freestyle preview hostname; Vite-style env var not used by Next.
  // next dev binds via CLI flag (--hostname 0.0.0.0). For preview host checks in
  // dev, configure allowedDevOrigins if needed by the runtime.
};

export default nextConfig;
