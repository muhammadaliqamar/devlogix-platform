import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/studio/',
        '/thank-you/',
        '/ksa/thank-you/',
        '/_next/',
      ],
    },
    sitemap: 'https://devlogix.com.pk/sitemap.xml',
  }
}
