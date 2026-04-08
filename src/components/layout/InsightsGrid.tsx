import { client } from "@/sanity/lib/client";
import { landingInsightsQuery } from "@/sanity/lib/queries";
import InsightsGridUI, { InsightItem, InsightsGridLocale } from "./InsightsGridUI";

// Note: In Next.js App Router, 'export const revalidate' only works in page/layout files, not in regular components.

interface InsightsGridProps {
    locale?: InsightsGridLocale;
}

export default async function InsightsGrid({ locale }: InsightsGridProps = {}) {
    // 1. Fetch data from Sanity with proper Next.js 15 revalidation options
    // (export const revalidate does not work in non-page components)
    const data = await client.fetch(landingInsightsQuery, {}, { next: { revalidate: 60 } });

    // 2. Format the data into a single array for the UI
    // Keep absolute positions so items don't shift into the wrong UI slots if one is missing
    const items: (InsightItem | null)[] = [
        data.featured || null,
        data.insights?.[0] || null, 
        data.insights?.[1] || null, 
        data.press || null          
    ];

    // 3. Render the Client UI with data + locale
    return <InsightsGridUI items={items} locale={locale} />;
}