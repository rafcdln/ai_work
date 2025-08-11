export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inner-circle-ai.vercel.app';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/legal'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}