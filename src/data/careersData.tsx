import { Code2, Cpu, Globe, Heart, Laptop, Shield, Zap } from 'lucide-react';

export const benefits = [
    { title: "Sovereign Equity", desc: "Real ownership stakes. When we win, you win.", icon: Zap },
    { title: "Global HQ Access", desc: "Work from our Gujranwala fortress or Dubai hub.", icon: Globe },
    { title: "Elite Hardware", desc: "M3 Max MacBooks and 4K displays for every operative.", icon: Laptop },
    { title: "Zero Bureaucracy", desc: "No middle management. Direct line to the Board.", icon: Shield },
    { title: "Health Protocol", desc: "Premium medical coverage for you and your family.", icon: Heart },
    { title: "Continuous R&D", desc: "Paid time to experiment with new tech (AI, Web3).", icon: Cpu },
];

export const openPositions = [
    {
        id: "fe-architect",
        title: "Senior Frontend Architect",
        department: "Engineering",
        location: "Gujranwala (Hybrid)",
        type: "Full-Time",
        salary: "PKR 300k - 500k",
        tags: ["Next.js", "React", "Tailwind", "Framer Motion"]
    },
    {
        id: "ai-engineer",
        title: "AI/ML Systems Engineer",
        department: "R&D",
        location: "Remote / Dubai",
        type: "Contract",
        salary: "$4,000 - $6,000 / mo",
        tags: ["Python", "TensorFlow", "CUDA", "LLMs"]
    },
    {
        id: "product-designer",
        title: "Lead Product Designer (UI/UX)",
        department: "Design",
        location: "Gujranwala (On-Site)",
        type: "Full-Time",
        salary: "PKR 250k - 400k",
        tags: ["Figma", "Design Systems", "Prototyping"]
    },
    {
        id: "devops-lead",
        title: "Sovereign Cloud Architect (DevOps)",
        department: "Operations",
        location: "Remote",
        type: "Full-Time",
        salary: "$3,500 - $5,000 / mo",
        tags: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
    {
        id: "b2b-sales",
        title: "Enterprise Growth Operative",
        department: "Sales",
        location: "Dubai (On-Site)",
        type: "Commission + Base",
        salary: "Competitive",
        tags: ["SaaS Sales", "Lead Gen", "Closing"]
    }
];

export const departments = ["All", "Engineering", "Design", "R&D", "Operations", "Sales"];