import w
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NEXT_PUBLIC_DISABLE_PWA === 'true',
});

const nextConfig = {
  // si tu utilises les images dans public/icons
  images: {
    unoptimized: true,
  },
};

module.exports = withPWA(nextConfig);
