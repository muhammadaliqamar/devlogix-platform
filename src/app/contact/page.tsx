import ContactHero from '@/components/contact/ContactHero';
import ContactInterface from '@/components/contact/ContactInterface';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    // SEO FIX 1: Keyword-rich title for the conversion page
    title: 'Contact DevLogix | Custom Software & AI Consultation',
    description: 'Connect with our engineering experts. Whether you are in KSA, UAE, or North America, reach out to DevLogix for scalable software development and AI solutions.',
    metadataBase: new URL('https://devlogix.com.pk'),
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Contact DevLogix | Partner With Us',
        description: 'Ready to scale? Get in touch with the DevLogix global engineering team today.',
        url: 'https://devlogix.com.pk/contact',
        type: 'website',
    }
};

export default function ContactPage() {
    // SEO FIX 2: Upgraded Schema to reflect Global Presence + Delivery Center
    // This helps Google understand you are a multinational entity
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DevLogix',
        url: 'https://devlogix.com.pk',
        logo: 'https://devlogix.com.pk/logo.png',
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+92-XXX-XXXXXXX', // Replace with your real PK delivery center number
                contactType: 'technical support',
                areaServed: 'PK',
                availableLanguage: ['English', 'Urdu']
            },
            {
                '@type': 'ContactPoint',
                telephone: '+966-XX-XXX-XXXX', // Replace with your Riyadh sales number
                contactType: 'sales',
                areaServed: 'SA',
                availableLanguage: ['English', 'Arabic']
            }
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Your Office Address',
            addressLocality: 'Gujranwala',
            addressRegion: 'Punjab',
            postalCode: '52250',
            addressCountry: 'PK'
        }
    };

    return (
        <main className="w-full min-h-screen bg-slate-50">
            <Script
                id="contact-org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            {/* 1. Hero Section: Ensure this has an H1 */}
            <ContactHero />

            {/* 2. The Form Card: Ensure inputs have aria-labels inside this component */}
            <ContactInterface />

        </main>
    );
}