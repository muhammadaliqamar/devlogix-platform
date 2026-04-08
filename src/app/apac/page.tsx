import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/layout-apac/Hero'
import AuthorityStrip from '@/components/layout-apac/AuthorityStrip'
import CapabilitiesMatrix from '@/components/layout-apac/CapabilitiesMatrix'
import IndustryCarousel from '@/components/layout-apac/IndustryCarousel'
import CareersSection from '@/components/layout-apac/CareersSection'
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA'
import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevLogix APAC | Scaling Hyper-Growth & Enterprise Architecture',
  description: 'Powering Asia-Pacific\'s digital frontier. DevLogix architects scalable infrastructure, e-commerce systems, and automation for APAC enterprises.',
  alternates: {
    canonical: '/apac',
  }
}

export default function APACLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix APAC',
    url: 'https://devlogix.com/apac',
    logo: 'https://devlogix.com/logo.png',
    description: 'DevLogix empowers APAC businesses with extreme-scale software, automation, and tech infrastructure for hyper-growth.',
    sameAs: [
      'https://www.linkedin.com/company/devlogix',
      'https://twitter.com/devlogix'
    ]
  }

  return (
    <main className="bg-white">
      <Script
        id="organization-schema-apac"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AuthorityStrip />
      <CapabilitiesMatrix />
      <IndustryCarousel />
      <CareersSection />
      <LeadCaptureCTA localization={{ dialCode: 'SG +65' }} />
    </main>
  )
}
