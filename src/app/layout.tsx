import './globals.css'
import LayoutShell from '@/components/LayoutShell'
import { Poppins } from 'next/font/google'
import { Metadata, Viewport } from 'next' // Added Viewport
import Script from 'next/script' // Use Next.js Script component
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'


// 1. Font Configuration - Optimized for Performance
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap', // SEO FIX: Prevents layout shift by swapping font once loaded
})

// 2. Viewport Configuration - Essential for Mobile SEO
export const viewport: Viewport = {
  themeColor: '#0B1221',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allows accessibility zooming while staying mobile-friendly
}

// 3. Metadata Configuration - Keyword Rich
export const metadata: Metadata = {
  // SEO FIX: Use the actual live URL for .com.pk if that is your primary domain
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://devlogix.com.pk'),
  title: {
    default: 'DevLogix | Custom Software Development & AI Solutions',
    template: '%s | DevLogix',
  },
  description: 'DevLogix is a global software engineering house specializing in custom enterprise ERPs, AI-driven automation, and scalable digital transformation for modern industries.',
  keywords: ['Software House Gujranwala', 'Custom Enterprise Software', 'AI Solutions Pakistan', 'Software Engineering UAE', 'Digital Transformation'],

  openGraph: {
    title: 'DevLogix | Engineering Global Sovereignty',
    description: 'Specialized software engineering for the world\'s most demanding industries.',
    url: 'https://devlogix.com.pk',
    siteName: 'DevLogix Technology',
    images: [
      {
        url: '/og-image.jpg', // Ensure this is 1200x630
        width: 1200,
        height: 630,
        alt: 'DevLogix Enterprise Software Engineering Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DevLogix | Enterprise Software Solutions',
    description: 'Building intelligent futures with sovereign technology that scales.',
    images: ['/og-image.jpg'],
    creator: '@devlogix',
  },

  // SEO FIX: Canonical tags help prevent duplicate content penalties
  alternates: {
    canonical: './',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // SEO FIX: lang="en" is good, but adding a specific region helps with local SEO if targeting PK/KSA
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head></head>

      {/* SEO FIX: Applied the font variable directly to the body. 
        Added "antialiased" for better typography rendering.
      */}
      <body className={`${poppins.className} font-sans antialiased bg-[#0B1221] text-slate-200 selection:bg-[#0d938c] selection:text-white`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XBQ5T01BSC"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XBQ5T01BSC');
          `}
        </Script>


        <LayoutShell>
          {children}
        </LayoutShell>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
