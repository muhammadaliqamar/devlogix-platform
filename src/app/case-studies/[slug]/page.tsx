import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import CaseStudyGateUI from "@/components/case-studies/CaseStudyGateUI";
import { notFound } from "next/navigation";

// 1. QUERY: ONLY METADATA (No Heavy Content)
const query = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  title,
  client,
  category,
  impactStat
}`;

// 2. GENERATE PATHS
export async function generateStaticParams() {
  const slugs = await client.fetch(groq`*[_type == "caseStudy"]{ "slug": slug.current }`);
  return slugs.map((s: any) => ({ slug: s.slug }));
}

// 3. SERVER COMPONENT
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fast, light fetch
  const study = await client.fetch(query, { slug });

  if (!study) {
    return notFound();
  }

  return <CaseStudyGateUI study={study} />;
}