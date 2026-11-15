/** @type {import('next').NextConfig} */

// The portfolio is a static page in /public (index.html, css/, js/, assets/).
// "/" is rewritten to it; the original Next.js app stays in src/app untouched.
const csp = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self'",
  "style-src-attr 'unsafe-inline'",
  "font-src 'self'",
  "img-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
].join("; ");

const security = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "no-referrer" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()" },
];

// every css/js/asset URL in the page carries ?v=<stamp>, so these can be cached for a year
const longCache = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

const nextConfig = {
  async rewrites() {
    return { beforeFiles: [{ source: "/", destination: "/index.html" }] };
  },
  async redirects() {
    return [
      { source: "/p/:slug", destination: "/#p/:slug", permanent: false },
      { source: "/r/:name", destination: "/#r/:name", permanent: false },
    ];
  },
  async headers() {
    return [
      { source: "/", headers: security },
      { source: "/index.html", headers: security },
      { source: "/css/:path*", headers: longCache },
      { source: "/js/:path*", headers: longCache },
      { source: "/assets/:path*", headers: longCache },
    ];
  },
};

export default nextConfig;
