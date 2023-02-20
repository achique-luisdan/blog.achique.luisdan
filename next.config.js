/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  // trailingSlash: true, // al compilar crea carpetas y dentro archivos index.html, no me gusta.
  images: {
    unoptimized : true,
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots'
      }
    ];
  }
};

module.exports = nextConfig;
