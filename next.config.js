/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  sassOptions: {
    includePaths: ['./components', './app', './styles'], // Add styles directory
  },
};

module.exports = nextConfig;