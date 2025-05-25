/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  sassOptions: {
    includePaths: ['./components', './app'],
  },
};

module.exports = nextConfig;