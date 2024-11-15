/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.alicdn.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
