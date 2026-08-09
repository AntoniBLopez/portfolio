import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    // Allow sharper hero/portrait qualities (default allowlist is only [75]).
    qualities: [75, 95, 100],
    // Extra widths so portrait heroes can request retina-sharp sources.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 2400, 3840],
  },
  async redirects() {
    return [
      {
        source: "/:locale(en|es)/services/web-development",
        destination: "/:locale/web",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/web",
        permanent: true,
      },
      {
        source: "/:locale(en|es)/services/ai-automation",
        destination: "/:locale/ai",
        permanent: true,
      },
      {
        source: "/services/ai-automation",
        destination: "/ai",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
