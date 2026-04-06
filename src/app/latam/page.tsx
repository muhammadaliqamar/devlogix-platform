import Script from 'next/script'
import { Metadata } from 'next'
import Hero from '@/components/layout-latam/Hero'
import AuthorityStrip from '@/components/layout-latam/AuthorityStrip'
import CapabilitiesMatrix from '@/components/layout-latam/CapabilitiesMatrix'
import IndustryCarousel from '@/components/layout-latam/IndustryCarousel'
import EnterprisePartnership from '@/components/layout-latam/EnterprisePartnership'
import CTASection from '@/components/layout-latam/CTASection'

export const metadata: Metadata = {
  title: 'DevLogix LATAM | Digital Innovation & Enterprise Scaling',
  description: 'Scalable software solutions tailored for the Latin American market. Fueling the rapid growth of enterprise and FinTech leaders from São Paulo to Santiago.',
  alternates: {
    canonical: '/latam',
  }
}

export default function LatamLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix LATAM',
    url: 'https://devlogix.com/latam',
    logo: 'https://devlogix.com/logo.png',
    description: 'DevLogix empowers rapidly growing businesses across Latin America (LATAM) with robust FinTech ecosystems, mobile-first architectures, and scalable digital solutions.',
    sameAs: [
      'https://www.linkedin.com/company/devlogix',
      'https://twitter.com/devlogix'
    ]
  }

  return (
    <main className="bg-white">
      <Script
        id="organization-schema-latam"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AuthorityStrip />
      <CapabilitiesMatrix />
      <IndustryCarousel />
      <EnterprisePartnership />
      <CTASection />
    </main>
  )
}
