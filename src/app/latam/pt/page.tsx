import Script from 'next/script'
import { Metadata } from 'next'
import Hero from '@/components/layout-latam/Hero'
import AuthorityStrip from '@/components/layout-latam/AuthorityStrip'
import CapabilitiesMatrix from '@/components/layout-latam/CapabilitiesMatrix'
import IndustryCarousel from '@/components/layout-latam/IndustryCarousel'
import EnterprisePartnership from '@/components/layout-latam/EnterprisePartnership'
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA'
import HeaderLatam from '@/components/layout-latam/HeaderLatam'
import Footer from '@/components/Footer' // Wait, they don't have FooterLatam yet

export const metadata: Metadata = {
  title: 'DevLogix LATAM (Brasil) | Inovação Digital e Escalabilidade Corporativa',
  description: 'Soluções avançadas de software sob medida para o mercado ágil latino-americano. Impulsionando o crescimento de líderes de FinTech.',
  alternates: {
    canonical: 'https://devlogix.com.pk/',
  }
}

export default function LatamPTLandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevLogix LATAM',
    url: 'https://devlogix.com/latam/pt',
    logo: 'https://devlogix.com/logo.png',
    description: 'DevLogix capacita negócios em rápido crescimento na América Latina (LATAM) com ecossistemas robustos e escaláveis.',
    sameAs: [
      'https://www.linkedin.com/company/devlogix',
      'https://twitter.com/devlogix'
    ]
  }

  return (
    <main className="bg-white">
      <HeaderLatam lang="pt" />
      <Script
        id="organization-schema-latam-pt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero lang="pt" />
      <AuthorityStrip lang="pt" />
      <CapabilitiesMatrix lang="pt" />
      <IndustryCarousel lang="pt" />
      <EnterprisePartnership lang="pt" />
        <LeadCaptureCTA localization={{
            leftTitle: 'DevLogix',
            leftSubtitle: 'Impulsionando sua Jornada Digital',
            headingText: 'Tem perguntas?',
            headingHighlight: 'Vamos conversar.',
            subheading: 'Temos as respostas para suas perguntas.',
            namePlaceholder: 'Seu nome *',
            emailPlaceholder: 'Seu e-mail *',
            emailSubtext: 'Recomendamos usar seu e-mail corporativo.',
            servicePlaceholder: 'Selecione o serviço que você precisa *',
            services: [
                { label: 'Design de Produto e UX', value: 'Product Design & UX' },
                { label: 'Desenvolvimento de Software Sob Medida', value: 'Custom Software Development' },
                { label: 'IA e Machine Learning', value: 'AI & Machine Learning' },
                { label: 'Aumento de Equipe de TI', value: 'IT Staff Augmentation' },
                { label: 'Outro', value: 'Other' },
            ],
            dialCode: 'BR +55',
            phonePlaceholder: 'xxxx xxxx *',
            projectPlaceholder: 'Por favor, descreva seu projeto *',
            budgetPlaceholder: 'Qual é o seu orçamento? *',
            ndaLabel: 'Solicitar NDA',
            submitText: 'Enviar',
            successTitle: 'Mensagem Enviada!',
            successMessage: 'Obrigado por nos contatar. Nossa equipe responderá em breve.',
            successButton: 'Enviar outra mensagem'
        }} />
    </main>
  )
}
