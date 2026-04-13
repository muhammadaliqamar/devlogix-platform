import Script from 'next/script'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Hero from '@/components/layout-latam/Hero'
const AuthorityStrip = dynamic(() => import('@/components/layout-latam/AuthorityStrip'))
const CapabilitiesMatrix = dynamic(() => import('@/components/layout-latam/CapabilitiesMatrix'))
const IndustryCarousel = dynamic(() => import('@/components/layout-latam/IndustryCarousel'))
const EnterprisePartnership = dynamic(() => import('@/components/layout-latam/EnterprisePartnership'))
const LeadCaptureCTA = dynamic(() => import('@/components/layout/LeadCaptureCTA'))
const HeaderLatam = dynamic(() => import('@/components/layout-latam/HeaderLatam'))
const Footer = dynamic(() => import('@/components/Footer')) // Wait, they don't have FooterLatam yet

export const metadata: Metadata = {
  title: 'DevLogix LATAM | Digital Innovation & Enterprise Scaling',
  description: 'Scalable software solutions tailored for the Latin American market. Fueling the rapid growth of enterprise and FinTech leaders from São Paulo to Santiago.',
  alternates: {
    canonical: 'https://devlogix.com.pk/',
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
      <HeaderLatam lang="es" />
      <Script
        id="organization-schema-latam-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero lang="es" />
      <AuthorityStrip lang="es" />
      <CapabilitiesMatrix lang="es" />
      <IndustryCarousel lang="es" />
      <EnterprisePartnership lang="es" />
        <LeadCaptureCTA localization={{
            leftTitle: 'DevLogix',
            leftSubtitle: 'Impulsando tu Viaje Digital',
            headingText: '¿Tienes preguntas?',
            headingHighlight: 'Hablemos.',
            subheading: 'Tenemos las respuestas a tus preguntas.',
            namePlaceholder: 'Tu nombre *',
            emailPlaceholder: 'Tu correo *',
            emailSubtext: 'Recomendamos usar tu correo corporativo.',
            servicePlaceholder: 'Selecciona el servicio que necesitas *',
            services: [
                { label: 'Diseño de Producto y UX', value: 'Product Design & UX' },
                { label: 'Desarrollo de Software a Medida', value: 'Custom Software Development' },
                { label: 'IA y Machine Learning', value: 'AI & Machine Learning' },
                { label: 'Aumento de Personal de TI', value: 'IT Staff Augmentation' },
                { label: 'Otro', value: 'Other' },
            ],
            dialCode: 'AR +54',
            phonePlaceholder: 'xxxx xxxx *',
            projectPlaceholder: 'Por favor describe tu proyecto *',
            budgetPlaceholder: '¿Cuál es tu presupuesto? *',
            ndaLabel: 'Solicitar NDA',
            submitText: 'Enviar',
            successTitle: '¡Mensaje Enviado!',
            successMessage: 'Gracias por contactarnos. Nuestro equipo responderá pronto.',
            successButton: 'Enviar otro mensaje'
        }} />
    </main>
  )
}
