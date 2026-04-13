import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/layout-ksa/Hero'
const AuthorityStrip = dynamic(() => import('@/components/layout-ksa/AuthorityStrip'))
const CapabilitiesMatrix = dynamic(() => import('@/components/layout-ksa/CapabilitiesMatrix'))
const IndustryCarousel = dynamic(() => import('@/components/layout-ksa/IndustryCarousel'))
const InsightsGrid = dynamic(() => import('@/components/layout/InsightsGrid'))
const KsaVisionSection = dynamic(() => import('@/components/layout-ksa/KsaVisionSection'))
const LeadCaptureCTA = dynamic(() => import('@/components/layout/LeadCaptureCTA'))
const HeaderKsa = dynamic(() => import('@/components/layout-ksa/HeaderKsa'))
const FooterKsa = dynamic(() => import('@/components/layout-ksa/FooterKsa'))
import Script from 'next/script'
import dynamic from 'next/dynamic'
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
    canonical: 'https://devlogix.com.pk/',
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
        <InsightsGrid locale={{
          dir: 'rtl',
          kicker: 'مصادر المعرفة',
          heading: 'رؤى تقنية',
          headingHighlight: 'ودراسات حالة مؤسسية.',
          paragraph: 'اكتشف أحدث أفكارنا وتحليلاتنا التقنية المعمقة ودراسات الحالة الواقعية التي توضح كيف نهندس برمجيات قابلة للتوسع للمؤسسات السعودية.',
          viewAllLabel: 'عرض جميع المقالات',
          viewAllLink: '/blog',
          readReportLabel: 'اقرأ التقرير',
        }} />
        <KsaVisionSection />
        <LeadCaptureCTA localization={{
          dir: 'rtl',
          leftTitle: 'ديف لوجيكس',
          leftSubtitle: 'تمكين رحلتك الرقمية',
          headingText: 'هل لديك أسئلة؟',
          headingHighlight: 'لنتحدث.',
          subheading: 'لدينا الإجابات على جميع استفساراتك.',
          namePlaceholder: 'اسمك الكريم *',
          emailPlaceholder: 'بريدك الإلكتروني *',
          emailSubtext: 'نوصي باستخدام بريد العمل.',
          servicePlaceholder: 'اختر الخدمة المطلوبة *',
          services: [
            { label: 'تصميم المنتج وتجربة المستخدم', value: 'Product Design & UX' },
            { label: 'تطوير البرمجيات المخصصة', value: 'Custom Software Development' },
            { label: 'الذكاء الاصطناعي وتعلم الآلة', value: 'AI & Machine Learning' },
            { label: 'توسعة فرق العمل التقنية', value: 'IT Staff Augmentation' },
            { label: 'أخرى', value: 'Other' },
          ],
          dialCode: 'SA +966',
          phonePlaceholder: '5x xxx xxxx *',
          projectPlaceholder: 'يرجى وصف مشروعك *',
          budgetPlaceholder: 'ما هي ميزانيتك المقدرة؟ *',
          ndaLabel: 'طلب اتفاقية عدم إفشاء (NDA)',
          submitText: 'إرسال',
          successTitle: 'تم إرسال الرسالة!',
          successMessage: 'شكرًا لتواصلك معنا. سيقوم فريقنا بالرد عليك قريبًا.',
          successButton: 'إرسال رسالة أخرى',
          successRedirect: '/ksa/thank-you'
        }} />
      </main>
      <FooterKsa />
    </div>
  )
}
