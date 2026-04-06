import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import BlogFeed from "@/components/blog/BlogFeed"; // Import the client component

// 1. THE QUERY
const blogQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coverImage.asset->url,
  category,
  publishedAt,
  readTime,
  isFeatured
}`;

// 2. CONFIGURATION
// Revalidate every 60 seconds (ISR) so new posts appear automatically
export const revalidate = 60;

// 3. THE SERVER COMPONENT
export default async function BlogPage() {

    // Fetch data securely on the server
    const posts = await client.fetch(blogQuery);

    // Pass data to the client component
    return <BlogFeed posts={posts} />;
}