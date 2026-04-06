export const caseStudiesData = [
    {
        slug: "neon-bank-core",
        client: "NeonBank Global",
        title: "Project Neon: The Sovereign Core Migration",
        category: "Fintech",
        image: "/case-studies/fintech-bank.jpg",
        impactStat: "40% OpEx Cut",
        isFeatured: true,
        // THE SALES PITCH FOR THE PDF
        overview: "How we migrated a Tier-2 bank from a restrictive SaaS core to a custom-built, event-driven architecture handling $2B+ in annual transactions without a single second of downtime.",
        pdfUrl: "/downloads/neon-bank-case-study.pdf",
        highlights: [
            "The 'Strangler Fig' Migration Pattern",
            "Event-Sourced Ledger Architecture",
            "Compliance Framework for ISO 20022"
        ]
    },
    {
        slug: "aerovision-ai",
        title: "AeroVision: Zero-Defect Manufacturing",
        client: "AeroParts Mfg",
        category: "AI & ML",
        image: "/case-studies/ai-drone.jpg",
        impactStat: "99.8% Accuracy",
        isFeatured: false,
        overview: "A deep dive into deploying edge-compute computer vision models on the factory floor to detect micro-fractures in turbine blades in real-time.",
        pdfUrl: "/downloads/aerovision-case-study.pdf",
        highlights: [
            "Edge IoT Hardware Specs",
            "Custom TensorFlow Model Training",
            "Latency Reduction Techniques"
        ]
    },
    {
        slug: "logistics-fleet",
        title: "Global Fleet: The Real-Time Mesh",
        client: "TransGlobal",
        category: "Logistics",
        image: "/case-studies/logistics-map.jpg",
        impactStat: "< 200ms Latency",
        isFeatured: false,
        overview: "Review the architecture behind tracking 5,000 active trucks across 3 continents using Go, Redis, and a custom geospatial indexing system.",
        pdfUrl: "/downloads/logistics-case-study.pdf",
        highlights: [
            "Geospatial Indexing Strategy",
            "Offline-First Sync Protocols",
            "Driver App UX Case Study"
        ]
    },
    {
        slug: "health-vault",
        title: "MediVault: Zero-Knowledge Exchange",
        client: "MediVault Systems",
        category: "Healthcare",
        image: "/case-studies/health-data.jpg",
        impactStat: "HIPAA Compliant",
        isFeatured: false,
        overview: "Understanding the cryptographic principles used to build a patient-owned data exchange that allows temporary access without centralized storage.",
        pdfUrl: "/downloads/medivault-case-study.pdf",
        highlights: [
            "Zero-Knowledge Proof Implementation",
            "Blockchain Audit Logs",
            "Doctor-Patient Handshake UI"
        ]
    }
];

export const workCategories = ["All", "Fintech", "AI & ML", "Logistics", "Healthcare"];