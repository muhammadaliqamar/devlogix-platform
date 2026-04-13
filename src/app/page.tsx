import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Hero from '@/components/layout/Hero'

const AuthorityStrip = dynamic(() => import('@/components/layout/AuthorityStrip'))
const CapabilitiesMatrix = dynamic(() => import('@/components/layout/CapabilitiesMatrix'))
const IndustryCarousel = dynamic(() => import('@/components/layout/IndustryCarousel'))
const InsightsGrid = dynamic(() => import('@/components/layout/InsightsGrid'))
const CareersSection = dynamic(() => import('@/components/layout/CareersSection'))
const LeadCaptureCTA = dynamic(() => import('@/components/layout/LeadCaptureCTA'))
import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://devlogix.com.pk'),
  title: 'DevLogix | Custom Software Development & AI Solutions',
  description: 'DevLogix transforms businesses with custom software development and advanced AI solutions. Built for scale, designed for growth. Get your free consultation today.',
  keywords: ['Custom Software Development', 'AI development company', 'AI Solutions company', 'Web Development', 'Mobile Apps', 'enterprise software development', 'software outsourcing Pakistan'],
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
  alternates: {
    canonical: 'https://devlogix.com.pk/',
    languages: {
      'x-default': '/',
      'en-US': '/north-america',
      'en-CA': '/north-america',
      'en-GB': '/europe',
      'en-AE': '/mea',
      'en-SA': '/ksa',
      'ar-SA': '/ksa',
      'es-AR': '/latam',
      'es-CL': '/latam',
      'es-CO': '/latam',
      'es-PE': '/latam',
      'pt-BR': '/latam'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'DevLogix | Custom Software & AI Solutions',
    description: 'Transforming businesses with custom software development and advanced AI solutions.',
    siteName: 'DevLogix',
    images: [
      {
        url: '/og-image.jpg', // IMPORTANT: Put a 1200x630px image in your /public folder named og-image.jpg
        width: 1200,
        height: 630,
        alt: 'DevLogix - Custom Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevLogix | Custom Software & AI Solutions',
    description: 'Transforming businesses with custom software development and advanced AI solutions.',
    images: ['/og-image.png'],
  }
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix',
    url: 'https://devlogix.com.pk',
    logo: 'https://devlogix.com.pk/logo.png',
    image: 'https://devlogix.com.pk/og-image.png', // Replace with actual logo URL
    description: 'DevLogix transforms businesses with custom software development and advanced AI solutions. Built for scale, designed for growth.',
    slogan: 'Shaping the digital horizons.',
    sameAs: [
      'https://www.linkedin.com/company/devlogixofficial',
    ],
    foundingDate: '2023',
    areaServed: 'Worldwide',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://devlogix.com.pk/contact',
    }
  }

  return (
    <main className="bg-white">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AuthorityStrip />
      <CapabilitiesMatrix />
      <IndustryCarousel />
      <InsightsGrid />
      <CareersSection />
      <LeadCaptureCTA />
    </main>
  )
}