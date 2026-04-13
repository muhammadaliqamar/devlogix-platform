import AboutHero from '@/components/about/AboutHero';
const NorthStar = dynamic(() => import('@/components/about/NorthStar'));
const ChairmansNote = dynamic(() => import('@/components/about/ChairmansNote'));
const DevLogixStandard = dynamic(() => import('@/components/about/DevLogixStandard'));
const EvolutionaryPath = dynamic(() => import('@/components/about/EvolutionaryPath'));
const LeadershipCarousel = dynamic(() => import('@/components/about/LeadershipCarousel'));
const GlobalNexus = dynamic(() => import('@/components/about/GlobalNexus'));
const AboutCTA = dynamic(() => import('@/components/about/AboutCTA'));
const LeadCaptureCTA = dynamic(() => import('@/components/layout/LeadCaptureCTA'));

import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  // SEO FIX 1: Brand and primary keyword injected into the title
  title: 'About DevLogix | Custom Software & AI Development Company',
  description: 'Discover DevLogix. Meet our leadership team and explore our mission to engineer scalable enterprise software and AI solutions for global industries.',
  alternates: {
    // SEO FIX 2: Always use absolute URLs for canonical tags to prevent indexing errors
    canonical: 'https://devlogix.com.pk/about',
  },
  // SEO FIX 3: Added Open Graph for LinkedIn/Twitter sharing
  openGraph: {
    title: 'About DevLogix | Enterprise Software Innovation',
    description: 'Meet our leadership team and explore our evolutionary path in enterprise digital transformation.',
    url: 'https://devlogix.com.pk/about',
    siteName: 'DevLogix',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Create a specific 1200x630 team/office image for this route
        width: 1200,
        height: 630,
        alt: 'DevLogix Leadership and Engineering Team',
      },
    ],
  },
};

export default function AboutPage() {
  // SEO FIX 4: Dedicated AboutPage Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: 'https://devlogix.com.pk/about',
    name: 'About DevLogix',
    description: 'Information about the history, leadership, and mission of DevLogix.',
    mainEntity: {
      '@type': 'Organization',
      name: 'DevLogix',
      url: 'https://devlogix.com.pk',
      logo: 'https://devlogix.com.pk/logo.png',
      foundingDate: '2023',
      // You can add your Chairman/CEO here if you want their names explicitly tied to the brand graph
      founder: {
        '@type': 'Person',
        name: 'Muhammad Ali Qamar'
      }
    }
  };

  return (
    <main className="w-full bg-slate-50 min-h-screen" >
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: THE VISION ANCHOR */}
      <AboutHero />
      <NorthStar />
      <ChairmansNote />
      {/* <LeadershipCarousel /> */}
      <DevLogixStandard />
      <EvolutionaryPath />
      {/* <GlobalNexus /> */}
      {/* <AboutCTA /> */}
      <LeadCaptureCTA />

    </main >
  );
}