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
// This fetches 1 Featured Case Study, 2 Latest Blogs, and 1 Latest News item
export const landingInsightsQuery = groq`{
  "featured": *[_type == "caseStudy" && isFeatured == true][0] {
    "id": _id,
    "type": "case-study",
    category,
    title,
    "summary": impactStat, // Uses the Impact Stat as the hook
    "link": "/case-studies/" + slug.current,
    "image": coverImage.asset->url
  },
  "insights": *[_type == "blog"] | order(publishedAt desc)[0..1] {
    "id": _id,
    "type": "insight",
    category,
    title,
    "summary": excerpt,
    "link": "/blog/" + slug.current
  },
  "press": *[_type == "news"] | order(date desc)[0] {
    "id": _id,
    "type": "press",
    "category": type,
    title,
    "summary": excerpt,
    "link": "/newsroom/" + slug.current,
    "date": date
  }
}`;