/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'img.hisupplier.com',
      },
    ],
  },
};

export default nextConfig;
