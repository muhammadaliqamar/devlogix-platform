import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/layout/Hero'
import AuthorityStrip from '@/components/layout/AuthorityStrip'
import CapabilitiesMatrix from '@/components/layout/CapabilitiesMatrix'
import IndustryCarousel from '@/components/layout/IndustryCarousel'
import InsightsGrid from '@/components/layout/InsightsGrid'
import CareersSection from '@/components/layout/CareersSection'
import CTASection from '@/components/layout/CTASection'
import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevLogix | Custom Software Development & AI Solutions',
  description: 'DevLogix transforms businesses with custom software development and advanced AI solutions. Built for scale, designed for growth. Get your free consultation today.',
  alternates: {
    canonical: '/',
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
  }
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix',
    url: 'https://devlogix.com.pk',
    logo: 'https://devlogix.com.pk/logo.png', // Replace with actual logo URL
    description: 'DevLogix empowers businesses globally with cutting-edge software and digital transformation services.',
    sameAs: [
      'https://www.linkedin.com/company/devlogixofficial',
    ]
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
      {/* <InsightsGrid /> */}
      <CareersSection />
      <CTASection />
    </main>
  )
}