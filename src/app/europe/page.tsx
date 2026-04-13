import Script from 'next/script'
import { Metadata } from 'next'
import Hero from '@/components/layout-europe/Hero'
import AuthorityStrip from '@/components/layout-europe/AuthorityStrip'
import CapabilitiesMatrix from '@/components/layout-europe/CapabilitiesMatrix'
import IndustryCarousel from '@/components/layout-europe/IndustryCarousel'
import EnterprisePartnership from '@/components/layout-europe/EnterprisePartnership'
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA'

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
