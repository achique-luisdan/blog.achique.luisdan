/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  // trailingSlash: true, // al compilar crea carpetas y dentro archivos index.html, no me gusta.
  images: {
    unoptimized : true,
  },
  
};

module.exports = nextConfig;
