import { newsData } from '@/data/newsData';
import NewsPostUI from '@/components/news/NewsPostUI';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return Object.keys(newsData).map((slug) => ({
        slug: slug,
    }));
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = newsData[slug];

    if (!post) {
        return notFound();
    }

    return <NewsPostUI post={post} />;
}