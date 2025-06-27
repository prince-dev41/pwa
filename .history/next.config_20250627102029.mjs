import withPWA from 'next-pwa'

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false,
})

const nextConfig = {
  images: {
    unoptimized: true,
  },
}

export default withPWAConfig(nextConfig)
