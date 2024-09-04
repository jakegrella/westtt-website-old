import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  devIndicators: {
    appIsrStatus: false
  }
}

export default withPayload(nextConfig)
