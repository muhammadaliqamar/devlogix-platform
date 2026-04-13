import Script from 'next/script'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Hero from '@/components/layout-europe/Hero'
const AuthorityStrip = dynamic(() => import('@/components/layout-europe/AuthorityStrip'))
const CapabilitiesMatrix = dynamic(() => import('@/components/layout-europe/CapabilitiesMatrix'))
const IndustryCarousel = dynamic(() => import('@/components/layout-europe/IndustryCarousel'))
const EnterprisePartnership = dynamic(() => import('@/components/layout-europe/EnterprisePartnership'))
const LeadCaptureCTA = dynamic(() => import('@/components/layout/LeadCaptureCTA'))

export const metadata: Metadata = {
  title: 'DevLogix Europe & UK | Enterprise Software & FinTech Innovation',
  description: 'Scalable, GDPR-compliant enterprise software for the UK and European market. Partner with DevLogix for transformative digital operations.',
  alternates: {
    canonical: 'https://devlogix.com.pk/',
  }
}

export default function EuropeUKLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix Europe & UK',
    url: 'https://devlogix.com/europe',
    logo: 'https://devlogix.com/logo.png',
    description: 'DevLogix empowers businesses in the UK and Europe with GDPR-compliant software and digital transformation services.',
    sameAs: [
      'https://www.linkedin.com/company/devlogix',
      'https://twitter.com/devlogix'
    ]
  }

  return (
    <main className="bg-white">
      <Script
        id="organization-schema-europe"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AuthorityStrip />
      <CapabilitiesMatrix />
      <IndustryCarousel />
      <EnterprisePartnership />
      <LeadCaptureCTA localization={{ dialCode: 'GB +44' }} />
    </main>
  )
}
