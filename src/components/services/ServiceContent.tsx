'use client'

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA';

// =====================================================================
// REUSABLE COMPONENT: CINEMATIC CARD
// =====================================================================
// SEO FIX 1: Added `parentContext` prop to generate highly descriptive alt text dynamically
const CinematicCard = ({ title, desc, image, index, parentContext = "" }: { title: string, desc?: string, image: string, index: number, parentContext?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative h-[400px] w-full rounded-xl overflow-hidden cursor-pointer"
    >
        <div className="absolute inset-0">
            <Image
                src={image}
                // SEO FIX 2: Dynamic, keyword-rich alt text 
                alt={`${title} solutions and applications for ${parentContext}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {/* SEO FIX 3: Standardized to <h3> since these cards sit inside an <h2> section */}
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            {desc && (
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {desc}
                </p>
            )}
            <div className="w-12 h-1 bg-[#0d938c] mt-4 rounded-full" />
        </div>
    </motion.div>
);

// =====================================================================
// MAIN PAGE CONTENT
// =====================================================================
interface ServiceData {
    hero: { title: string; subtitle: string; description: string };
    overview: { heading: string; content: string; image: string };
    subServices: { title: string; desc: string; image: string }[];
    process: any[];
    industries: { name: string; image: string }[];
    techStack: { name: string; icon: string }[];
}

export default function ServiceContent({ data }: { data: ServiceData | null }) {
    if (!data) return notFound();

    return (
        <main className="w-full min-h-screen bg-white font-poppins-regular">

            {/* ---------------- HERO SECTION ---------------- */}
            <section className="relative w-full bg-[#0B1221] flex items-center justify-center overflow-hidden pt-20 pb-20">
                <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full" />

                <div className="relative z-10 text-center max-w-6xl px-6 mt-20">

                    {/* SEO FIX 4: The actual Service Name (e.g., "AI & Machine Learning") is now the <h1> */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4"
                    >
                        {data.hero.title}
                        {/* Invisible modifier to ensure we hit long-tail keywords (e.g., "AI & Machine Learning Services Company") */}
                        <span className="sr-only"> Services Company</span>
                    </motion.h1>

                    {/* SEO FIX 5: The human hook ("Intelligence That Drives Business") is now an <h2> supporting the <h1> */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
                        className="text-xl md:text-2xl font-light text-[#0d938c] mb-6 tracking-wide"
                    >
                        {data.hero.subtitle}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        {data.hero.description}
                    </motion.p>
                </div>
            </section>

            {/* ---------------- OVERVIEW ---------------- */}
            {/* SEO FIX 6: Linked section to heading */}
            <section aria-labelledby="overview-heading" className="w-full bg-white py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

                        {/* SEO FIX 7: Added ID */}
                        <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            {data.overview.heading}
                        </h2>

                        <p className="text-slate-500 text-lg leading-relaxed mb-8 border-l-4 border-[#0d938c] pl-6">
                            {data.overview.content}
                        </p>
                        <ul className="space-y-4">
                            {["Scalable Architecture", "Sovereign Control", "High-Security Protocols"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-[#0d938c]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="relative h-[400px] w-full bg-slate-100 rounded-xl overflow-hidden shadow-2xl"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300" />
                        <Image
                            src={data.overview.image}
                            // SEO FIX 8: Descriptive alt text for the overview image
                            alt={`Overview of ${data.hero.title} engineering methodology`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ---------------- CAPABILITIES (SUB-SERVICES) ---------------- */}
            <section aria-labelledby="capabilities-heading" className="w-full bg-[#0B1221] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <span className="block text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                            Capabilities
                        </span>
                        <h2 id="capabilities-heading" className="text-3xl md:text-5xl font-bold text-white">
                            Within This Domain
                            {/* SEO FIX 9: Invisible context binding */}
                            <span className="sr-only"> for {data.hero.title}</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.subServices.map((sub, idx) => (
                            <CinematicCard
                                key={idx}
                                title={sub.title}
                                desc={sub.desc}
                                image={sub.image}
                                index={idx}
                                parentContext={data.hero.title} // SEO FIX 10: Passing the context down for alt text
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- PROCESS TIMELINE ---------------- */}
            <section aria-labelledby="process-heading" className="w-full bg-white py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 id="process-heading" className="text-3xl font-bold text-slate-900 mb-16 text-center">
                        Our Execution Protocol
                        <span className="sr-only"> for {data.hero.title} Projects</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-100 -z-0" />
                        {data.process.map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-start md:items-center md:text-center group">
                                <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-slate-300 mb-6 group-hover:border-[#0d938c] group-hover:text-[#0d938c] transition-all duration-300 shadow-sm">
                                    {step.step}
                                </div>
                                {/* SEO FIX 11: Standardized to <h3> */}
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- INDUSTRIES SERVED ---------------- */}
            <section aria-labelledby="industries-heading" className="w-full bg-[#050505] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <span className="block text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                            Impact
                        </span>
                        <h2 id="industries-heading" className="text-3xl md:text-5xl font-bold text-white">
                            Industries We Serve
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.industries.map((ind, idx) => (
                            <CinematicCard
                                key={idx}
                                title={ind.name}
                                image={ind.image}
                                index={idx}
                                parentContext={data.hero.title} // Passes context for alt text
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- DYNAMIC GLOBAL CTA ---------------- */}
            {/* Optional: Pass custom props to LeadCaptureCTA here if it supports them, 
                e.g. <LeadCaptureCTA localization={{ headingHighlight: "Start Your " + data.hero.title + " Project" }} /> */}
            <LeadCaptureCTA />

        </main>
    );
}