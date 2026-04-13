import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/layout-mea/Hero'
const AuthorityStrip = dynamic(() => import('@/components/layout-mea/AuthorityStrip'))
const CapabilitiesMatrix = dynamic(() => import('@/components/layout-mea/CapabilitiesMatrix'))
const IndustryCarousel = dynamic(() => import('@/components/layout-mea/IndustryCarousel'))
const InsightsGrid = dynamic(() => import('@/components/layout/InsightsGrid'))
const CareersSection = dynamic(() => import('@/components/layout-mea/CareersSection'))
const LeadCaptureCTA = dynamic(() => import('@/components/layout/LeadCaptureCTA'))
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevLogix MEA | Enterprise Software & Transformative Technology',
  description: 'Driving digital leapfrogging across the Middle East & Africa. Partner with DevLogix for scalable tech solutions in emerging markets, telecom, and fintech.',
  alternates: {
    canonical: 'https://devlogix.com.pk/',
  }
}

export default function MEALandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix MEA',
    url: 'https://devlogix.com/mea',
    logo: 'https://devlogix.com/logo.png',
    description: 'DevLogix empowers MEA businesses with cutting-edge software, mobile-first solutions, and enterprise transformation services.',
    sameAs: [
      'https://www.linkedin.com/company/devlogix',
      'https://twitter.com/devlogix'
    ]
  }

  return (
    <main className="bg-white">
      <Script
        id="organization-schema-mea"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AuthorityStrip />
      <CapabilitiesMatrix />
      <IndustryCarousel />
      <InsightsGrid />
      <CareersSection />
      <LeadCaptureCTA localization={{ dialCode: 'AE +971' }} />
    </main>
  )
}
