import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import CaseStudiesFeed from "@/components/case-studies/CaseStudiesFeed";

// QUERY: Get all case studies, ordered by newest
const query = groq`*[_type == "caseStudy"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  client,
  category,
  impactStat,
  "image": coverImage.asset->url
}`;

export const revalidate = 60; // Update every minute

export default async function CaseStudiesPage() {
    const projects = await client.fetch(query);
    return <CaseStudiesFeed projects={projects} />;
}