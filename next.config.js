/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true, // al compilar crea carpetas y dentro archivos index.html, no me gusta.
  images: {
    unoptimized : true,
  },
  // output: 'export',
};

module.exports = nextConfig;
