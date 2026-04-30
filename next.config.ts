import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-east-005.backblazeb2.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
