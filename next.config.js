/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  trailingSlash: true,
  images: {
    unoptimized : true,
  },
  
};

module.exports = nextConfig;
