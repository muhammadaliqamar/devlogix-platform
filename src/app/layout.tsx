import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Poppins } from 'next/font/google' // Import the font

// Configure the font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // 400=Regular, 600=SemiBold, 700=Bold
  variable: '--font-poppins', // Define a CSS variable for Tailwind
})


import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://devlogix.com'),
  title: {
    default: 'DevLogix | Enterprise Software Solutions',
    template: '%s | DevLogix',
  },
  description: 'Building intelligent futures with technology that scales. Global enterprise software solutions, digital transformation, and specialized IT services.',
  openGraph: {
    title: 'DevLogix | Enterprise Software Solutions',
    description: 'DevLogix empowers businesses globally with cutting-edge software and digital transformation services.',
    url: 'https://devlogix.com',
    siteName: 'DevLogix',
    images: [
      {
        url: '/og-image.jpg', // Replace with an actual OG image later
        width: 1200,
        height: 630,
        alt: 'DevLogix Cover Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevLogix | Enterprise Software Solutions',
    description: 'Building intelligent futures with technology that scales.',
    creator: '@devlogix',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>

      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}