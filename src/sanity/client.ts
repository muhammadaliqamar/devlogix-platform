import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Get this from Sanity Dashboard
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false, // Set to false for fresh data, true for speed
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}