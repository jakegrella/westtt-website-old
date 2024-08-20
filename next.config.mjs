import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'westtt.com',
        port: '',
        pathname: '/**'
      },
    ],
  },
}

export default withPayload(nextConfig)
