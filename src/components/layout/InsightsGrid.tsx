import { client } from "@/sanity/lib/client";
import { landingInsightsQuery } from "@/sanity/lib/queries";
import InsightsGridUI, { InsightItem, InsightsGridLocale } from "./InsightsGridUI";

// REVALIDATION: Keep the landing page fresh
export const revalidate = 60;

interface InsightsGridProps {
    locale?: InsightsGridLocale;
}

export default async function InsightsGrid({ locale }: InsightsGridProps = {}) {
    try {
        // 1. Fetch data from Sanity
        const data = await client.fetch(landingInsightsQuery);

        // 2. Format the data into a single array for the UI
        // Structure: [Featured Case Study, Insight 1, Insight 2, Press]
        const items: InsightItem[] = [
            data?.featured,
            data?.insights?.[0], // First blog post
            data?.insights?.[1], // Second blog post
            data?.press          // Latest news
        ].filter(Boolean); // Remove nulls if content is missing

        if (items.length === 0) return null;

        // 3. Render the Client UI with data + locale
        return <InsightsGridUI items={items} locale={locale} />;
    } catch (error) {
        console.error("Failed to fetch insights from Sanity:", error);
        return null;
    }
}