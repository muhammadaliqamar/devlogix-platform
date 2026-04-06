import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import BlogPostClient from "@/components/blog/BlogPostClient";
import { notFound } from "next/navigation";

// 1. THE SINGLE POST QUERY
const query = groq`*[_type == "blog" && slug.current == $slug][0] {
  title,
  category,
  readTime,
  publishedAt,
  "coverImage": coverImage.asset->url,
  content
}`;

// 2. GENERATE STATIC PARAMS (Builds HTML for every post at build time)
export async function generateStaticParams() {
    const slugs = await client.fetch(groq`*[_type == "blog"]{ "slug": slug.current }`);
    return slugs.map((s: any) => ({ slug: s.slug }));
}

// 3. THE SERVER COMPONENT
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fetch data
    const post = await client.fetch(query, { slug });

    if (!post) {
        return notFound();
    }

    // Pass to client renderer
    return <BlogPostClient post={post} />;
}