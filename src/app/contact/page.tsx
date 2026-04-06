import ContactHero from '@/components/contact/ContactHero';       // The Dark Background
import ContactInterface from '@/components/contact/ContactInterface';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | DevLogix',
  description: 'Get in touch with DevLogix to scale your digital transformation. Reach out to our global offices in KSA, MEA, Americas, and Europe.',
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactPage() {
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'DevLogix',
        image: 'https://devlogix.com/logo.png',
        '@id': 'https://devlogix.com',
        url: 'https://devlogix.com/contact',
        telephone: '+1-800-123-4567', // Placeholder
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Riyadh',
            addressCountry: 'SA'
        }
    };

    return (
        <main className="w-full min-h-screen bg-slate-50">
            <Script 
                id="local-business-schema"
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} 
            />

            {/* 1. The Dark Top Section (Anchors the Header) */}
            <ContactHero />

            {/* 2. The Form Card (Pulls up -24 to overlap the Hero) */}
            <ContactInterface />

        </main>
    );
}