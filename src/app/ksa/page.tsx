import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/layout-ksa/Hero'
import AuthorityStrip from '@/components/layout-ksa/AuthorityStrip'
import CapabilitiesMatrix from '@/components/layout-ksa/CapabilitiesMatrix'
import IndustryCarousel from '@/components/layout-ksa/IndustryCarousel'
import InsightsGrid from '@/components/layout-ksa/InsightsGrid'
import KsaVisionSection from '@/components/layout-ksa/KsaVisionSection'
import CTASection from '@/components/layout-ksa/CTASection'
import HeaderKsa from '@/components/layout-ksa/HeaderKsa'
import FooterKsa from '@/components/layout-ksa/FooterKsa'
import Script from 'next/script'
import { Metadata } from 'next'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800']
})

export const metadata: Metadata = {
  title: 'DevLogix KSA | Enterprise Software & Digital Transformation',
  description: 'Accelerating digital transformation in the Kingdom of Saudi Arabia. Partner with DevLogix for technology solutions that scale across industries regionally.',
  alternates: {
    canonical: '/ksa',
  }
}

export default function KSALandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix KSA',
    url: 'https://devlogix.com/ksa',
    logo: 'https://devlogix.com/logo.png', // Replace with actual logo URL
    description: 'DevLogix empowers businesses in KSA with cutting-edge software and digital transformation services.',
    sameAs: [
      'https://www.linkedin.com/company/devlogix',
      'https://twitter.com/devlogix'
    ]
  }

  return (
    <div className={`bg-white ${tajawal.className}`} dir="rtl">
      <HeaderKsa />
      <main>
        <Script
          id="organization-schema-ksa"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Hero />
        <AuthorityStrip />
        <CapabilitiesMatrix />
        <IndustryCarousel />
        {/* <InsightsGrid /> */}
        <KsaVisionSection />
        <CTASection />
      </main>
      <FooterKsa />
    </div>
  )
}
