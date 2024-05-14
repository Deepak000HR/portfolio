/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: "export",
  images: {
    // Disable image optimization during static site generation
    // This option is compatible with `{ output: 'export' }`
    unoptimized: true,
  },
};

export default nextConfig;
