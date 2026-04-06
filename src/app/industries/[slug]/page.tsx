import { industriesData } from '@/data/industriesData';
import IndustryContent from '@/components/industries/IndustryContent';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// 0. Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = industriesData[slug];
    
    if (!data) return {};

    return {
        title: `${data.hero.title} Solutions | DevLogix`,
        description: data.hero.description,
        alternates: {
            canonical: `/industries/${slug}`,
        }
    };
}

// 1. Generate Static Params for Industries
export async function generateStaticParams() {
    return Object.keys(industriesData).map((slug) => ({
        slug: slug,
    }));
}

// 2. The Server Page
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = industriesData[slug];

    if (!data) return notFound();

    return <IndustryContent data={data} />;
}