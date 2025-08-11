/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'assets-global.website-files.com' },
      { protocol: 'https', hostname: 'static.igloo.inc' },
      { protocol: 'https', hostname: 'cdn.dribbble.com' }
    ]
  }
};

export default nextConfig;
