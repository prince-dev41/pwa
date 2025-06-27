import withPWA from 'next-pwa'

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NEXT_PUBLIC_DISABLE_PWA === 'true',
})

const nextConfig = {
  images: {
    unoptimized: true,
  },
}

export default withPWAConfig(nextConfig)
