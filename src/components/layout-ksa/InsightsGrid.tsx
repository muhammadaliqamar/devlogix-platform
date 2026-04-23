import { client } from "@/sanity/lib/client";
import { landingInsightsQuery } from "@/sanity/lib/queries";
import InsightsGridUI, { InsightItem } from "./InsightsGridUI";

// REVALIDATION: Keep the landing page fresh
export const revalidate = 60;

export default async function InsightsGrid() {
    try {
        // 1. Fetch blog posts from Sanity
        const data = await client.fetch(landingInsightsQuery);

        // 2. Pass the blogs array directly to the UI
        // Structure: [Featured Blog, Blog 2, Blog 3, Blog 4]
        const items: InsightItem[] = (data?.blogs || []).filter(Boolean);

        if (items.length === 0) return null;

        // 3. Render the Client UI with data
        return <InsightsGridUI items={items} />;
    } catch (error) {
        console.error("Failed to fetch insights from Sanity:", error);
        return null;
    }
}