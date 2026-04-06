import { servicesData } from '@/data/servicesData';
import ServiceContent from '@/components/services/ServiceContent';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// 0. Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = servicesData[slug];
    
    if (!data) return {};

    return {
        title: `${data.hero.title} | DevLogix Services`,
        description: data.hero.description,
        alternates: {
            canonical: `/services/${slug}`,
        }
    };
}

// 1. Generate Static Params (Runs at build time on Server)
export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

// 2. The Page Component (Server Component)
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {

    // Await params (Next.js 15 requirement)
    const { slug } = await params;

    // Get Data
    const data = servicesData[slug];

    // Handle 404
    if (!data) {
        return notFound();
    }

    // Pass data to the Client Component
    return <ServiceContent data={data} />;
}