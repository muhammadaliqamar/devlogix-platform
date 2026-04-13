import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/layout-ksa/Hero'
import AuthorityStrip from '@/components/layout-ksa/AuthorityStrip'
import CapabilitiesMatrix from '@/components/layout-ksa/CapabilitiesMatrix'
import IndustryCarousel from '@/components/layout-ksa/IndustryCarousel'
import InsightsGrid from '@/components/layout/InsightsGrid'
import KsaVisionSection from '@/components/layout-ksa/KsaVisionSection'
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA'
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
    canonical: '/',
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
