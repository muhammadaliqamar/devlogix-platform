import Script from 'next/script'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Hero from '@/components/layout-north-america/Hero'
const AuthorityStrip = dynamic(() => import('@/components/layout-north-america/AuthorityStrip'))
const CapabilitiesMatrix = dynamic(() => import('@/components/layout-north-america/CapabilitiesMatrix'))
const IndustryCarousel = dynamic(() => import('@/components/layout-north-america/IndustryCarousel'))
const EnterprisePartnership = dynamic(() => import('@/components/layout-north-america/EnterprisePartnership'))
const LeadCaptureCTA = dynamic(() => import('@/components/layout/LeadCaptureCTA'))

export const metadata: Metadata = {
  title: 'DevLogix North America | Enterprise Software & Cloud Operations',
  description: 'Scalable, SOC2-compliant enterprise software for the US and Canadian market. Partner with DevLogix for transformative, coast-to-coast digital growth.',
  alternates: {
    canonical: 'https://devlogix.com.pk/',
  }
}

export default function NorthAmericaLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix North America',
    url: 'https://devlogix.com/north-america',
    logo: 'https://devlogix.com/logo.png',
    description: 'DevLogix empowers businesses in the USA and Canada with robust software and high-performance digital transformation services.',
    sameAs: [
      'https://www.linkedin.com/company/devlogix',
      'https://twitter.com/devlogix'
    ]
  }

  return (
    <main className="bg-white">
      <Script
        id="organization-schema-na"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AuthorityStrip />
      <CapabilitiesMatrix />
      <IndustryCarousel />
      <EnterprisePartnership />
      <LeadCaptureCTA localization={{ dialCode: 'US +1' }} />
    </main>
  )
}
