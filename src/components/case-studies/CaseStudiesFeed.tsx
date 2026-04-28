'use client'

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Layers, Search, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA';

// ─── ANIMATION VARIANTS ──────────────────────────────────────
const containerVar: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const cardVar: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20 }
    }
};

// ─── HERO ─────────────────────────────────────────────────────
const CaseStudyHero = ({ onSearch }: { onSearch: (term: string) => void }) => (
    <section className="relative w-full py-24 bg-[#0B1221] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20">
            <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-4 text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em]"
            >
                Proven Results
            </motion.span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-2xl"
                >
                    The Victory <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Archive.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    className="relative w-full md:w-80 group"
                >
                    <input
                        type="text"
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="Search case studies..."
                        className="w-full bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full focus:outline-none focus:border-[#0d938c] transition-colors placeholder:text-slate-500"
                    />
                    <Search className="absolute right-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within:text-[#0d938c] transition-colors" />
                </motion.div>
            </div>
        </div>
    </section>
);

// ─── CARD ─────────────────────────────────────────────────────
const CaseStudyCard = ({ project, index }: { project: any, index: number }) => (
    <Link href={`/case-studies/${project.slug}`}>
        <motion.div
            variants={cardVar}
            className="group flex flex-col h-full bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
        >
            {/* IMAGE */}
            <div className="relative h-60 w-full overflow-hidden">
                {project.image && (
                    <Image
                        src={project.image}
                        alt={`Case study: ${project.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 p-6">
                {/* Client tag */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Layers className="w-3 h-3 text-[#0d938c]" />
                    <span className="font-semibold text-[#0d938c] uppercase tracking-wider">{project.client}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                    {project.title}
                </h3>

                {/* Impact Metric */}
                {project.impactStat && (
                    <div className="bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 mb-4 group-hover:bg-[#0d938c]/5 group-hover:border-[#0d938c]/20 transition-colors">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Impact</span>
                            <Zap className="w-3 h-3 text-[#0d938c]" />
                        </div>
                        <span className="text-base font-bold text-slate-900">{project.impactStat}</span>
                    </div>
                )}

                {/* Footer */}
                <div className="mt-auto flex items-center justify-end pt-4 border-t border-slate-100">
                    <ArrowRight className="w-4 h-4 text-[#0d938c] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </div>
            </div>
        </motion.div>
    </Link>
);

// ─── MAIN FEED ────────────────────────────────────────────────
export default function CaseStudiesFeed({ projects }: { projects: any[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const allProjects = projects || [];

    const filteredProjects = allProjects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="w-full min-h-screen bg-slate-50 font-poppins-regular">

            <CaseStudyHero onSearch={setSearchTerm} />

            {/* UNIFORM BENTO GRID */}
            <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20 py-20">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-bold text-slate-900">
                        {searchTerm ? `Results for "${searchTerm}"` : "All Case Studies"}
                    </h3>
                    <span className="text-sm text-slate-400">{filteredProjects.length} projects</span>
                </div>

                <motion.div
                    variants={containerVar}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, idx) => (
                        <CaseStudyCard key={project.slug} project={project} index={idx} />
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400">No case studies found matching your search.</p>
                    </div>
                )}
            </section>

            <LeadCaptureCTA localization={{ headingText: "Ready to Be Our Next", headingHighlight: "Success Story?", subheading: "Let's engineer something worth showcasing." }} />
        </main>
    );
}