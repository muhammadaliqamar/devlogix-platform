import { groq } from "next-sanity";

// 1. FETCH CASE STUDIES (Grid)
export const caseStudiesQuery = groq`*[_type == "caseStudy"] {
  title,
  "slug": slug.current,
  client,
  category,
  impactStat,
  "image": coverImage.asset->url,
  "excerpt": challenge[0].children[0].text, 
  isFeatured
}`;

// 2. FETCH SINGLE CASE STUDY (Detail)
export const singleCaseStudyQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  title,
  client,
  category,
  impactStat,
  "coverImage": coverImage.asset->url,
  timeline,
  services,
  stack,
  stats,
  challenge,
  solution,
  "gallery": gallery[].asset->url,
  testimonial
}`;

// 3. FETCH BLOG POSTS
export const blogPostsQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coverImage.asset->url,
  category,
  publishedAt,
  readTime,
  isFeatured
}`;

// 4. FETCH CAREERS
export const careersQuery = groq`*[_type == "career" && isActive == true] {
  _id,
  title,
  department,
  location,
  type,
  salary,
  tags
}`;

// 5. FETCH LANDING PAGE INTELLIGENCE (Bento Grid)
// Fetches 4 latest blog posts with cover images for the bento grid
export const landingInsightsQuery = groq`{
  "blogs": *[_type == "blog"] | order(publishedAt desc)[0..3] {
    "id": _id,
    "type": "insight",
    category,
    title,
    "summary": excerpt,
    "link": "/blog/" + slug.current,
    "image": coverImage.asset->url,
    "date": publishedAt
  }
}`;