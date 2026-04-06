export const blogData: any = {
    "death-of-saas": {
        slug: "death-of-saas",
        title: "The Death of Rent-Seeking SaaS: Why Sovereignty Wins",
        excerpt: "The subscription economy is reaching a breaking point. Enterprises are realizing that renting their core infrastructure is a strategic liability.",
        coverImage: "/blog/post1.jpg",
        category: "Strategic Advisory",
        author: {
            name: "The Chairman",
            role: "Chief Strategy Officer",
            image: "/team/chairman.jpg" // Ensure you have a placeholder
        },
        publishedAt: "Feb 08, 2026",
        readTime: "8 min read",
        // Simulating Rich Text Content
        content: `
      <p class="lead">The era of "Software as a Service" as the default default is over. We are entering the era of "Software as an Asset."</p>
      
      <h2>The Rental Trap</h2>
      <p>For the last decade, the tech industry convinced the world that owning software was a burden. "Let us handle the servers," they said. "Pay us a monthly fee, and we will take care of the rest." It sounded like a good deal.</p>
      <p>But as companies scaled, that monthly fee compounded. Data became locked in proprietary silos. API rate limits started choking innovation. Suddenly, the "convenient" SaaS tool became a strategic liability.</p>

      <blockquote>
        "If you do not own the code that runs your core business logic, you do not own your business. You are merely a tenant in someone else's digital building."
      </blockquote>

      <h2>The Sovereign Alternative</h2>
      <p>Sovereign Engineering is the antithesis of the SaaS trap. It builds systems that you own, control, and operate. It is not about building everything from scratch—it is about owning the critical junctions of your data flow.</p>
      
      <h3>Key Pillars of Sovereignty:</h3>
      <ul>
        <li><strong>Data Ownership:</strong> Your customer data lives on your encrypted servers, not a multi-tenant cloud bucket.</li>
        <li><strong>Fixed Costs:</strong> You pay for development once, not for seat licenses forever.</li>
        <li><strong>Unlimited Extensibility:</strong> If you need a feature, we build it. You don't wait for a vendor roadmap.</li>
      </ul>

      <h2>The Board's Verdict</h2>
      <p>The smartest enterprises are already migrating away from generic SaaS platforms. They are building "Digital Assets"—proprietary software that adds valuation to their balance sheet, rather than draining OpEx every month.</p>
    `
    },

    // Placeholder for other posts to prevent 404s
    "ai-hallucinations": {
        slug: "ai-hallucinations",
        title: "Taming the Ghost: Reducing LLM Hallucinations",
        excerpt: "In banking, a 1% error rate is unacceptable. We dissect RAG architectures.",
        coverImage: "/blog/post2.jpg",
        category: "Artificial Intelligence",
        author: { name: "Head of AI", role: "VP Engineering", image: "/team/ai-lead.jpg" },
        publishedAt: "Feb 05, 2026",
        readTime: "12 min read",
        content: "<p>Content coming soon...</p>"
    },
    // ... add other slugs here
};