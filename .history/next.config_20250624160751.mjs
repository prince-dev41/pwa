/** @type {import('next').NextConfig} */
const nextConfig = {};
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NEXT_PUBLIC_DISABLE_PWA === 'true', // on pourra désactiver la PWA pour desktop
});

module.exports = withPWA({
  reactStrictMode: true,
});
