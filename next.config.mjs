/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
    buildActivityPosition: 'bottom-right',
  },
  experimental: {
    devIndicators: false,
  },
  images: {
    domains: [],
  },
}

export default nextConfig
