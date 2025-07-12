import { MetadataRoute } from 'next';

const BASE_URL = 'https://gastronomic-sooty.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/recipes',
    '/ingredients',
    '/techniques',
    '/blog',
    '/shop',
    '/login',
    '/signup',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // In a real application, you would fetch dynamic routes (like blog posts or recipes)
  // from a database and add them to the sitemap.
  // For now, we're just mapping the main pages.

  return [...staticUrls];
}
