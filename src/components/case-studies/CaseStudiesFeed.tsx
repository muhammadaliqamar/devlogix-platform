'use client'

import { motion, Variants } from 'framer-motion'; // <--- 1. Import Variants
import { ArrowUpRight, Target, Zap, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA';

// 2. EXPLICITLY TYPE THE VARIANTS
const containerVar: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVar: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    }
};
export default function CaseStudiesFeed({ projects }: { projects: any[] }) {
    return (
        <main className="w-full min-h-screen bg-[#050505] font-poppins-regular selection:bg-[#0d938c] selection:text-white">

            {/* ================= 1. CINEMATIC HERO ================= */}
            <section className="relative w-full pt-40 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[#0B1221]">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0d938c 1px, transparent 1px), linear-gradient(90deg, #0d938c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0d938c] opacity-[0.1] blur-[120px] rounded-full pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#0d938c] animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Clearance Level: Top Secret</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        The Victory <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-emerald-400">Archive.</span>
                    </motion.h1>
                </div>
            </section>

            {/* ================= 2. THE HIGH-TECH GRID ================= */}
            <section className="relative z-20 max-w-[1800px] mx-auto px-6 pb-32 -mt-10">
                <motion.div
                    variants={containerVar}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {projects.map((project) => (
                        <Link href={`/case-studies/${project.slug}`} key={project.slug}>
                            <motion.div
                                variants={cardVar}
                                className="group relative h-[450px] bg-[#0f1623] rounded-2xl overflow-hidden border border-white/5 hover:border-[#0d938c]/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(13,147,140,0.3)]"
                            >
                                {/* IMAGE LAYER */}
                                <div className="absolute inset-0 h-3/5 w-full overflow-hidden">
                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80 opacity-60"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1623]/80 to-[#0f1623]" />
                                    <div className="absolute top-4 left-4 backdrop-blur-md bg-black/40 border border-white/10 px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest group-hover:bg-[#0d938c] group-hover:border-[#0d938c] transition-colors">
                                        {project.category}
                                    </div>
                                </div>

                                {/* DATA LAYER */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                    <div className="flex items-center gap-2 mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <Target className="w-3 h-3 text-[#0d938c]" />
                                        <span className="text-[10px] font-bold text-[#0d938c] uppercase tracking-widest">{project.client}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:translate-x-1 transition-transform duration-300">
                                        {project.title}
                                    </h3>

                                    {/* IMPACT BOX */}
                                    <div className="bg-white/5 border border-white/5 rounded-lg p-4 mb-4 group-hover:bg-[#0d938c]/10 group-hover:border-[#0d938c]/30 transition-colors">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Impact Metric</span>
                                            <Zap className="w-3 h-3 text-[#0d938c]" />
                                        </div>
                                        <span className="text-lg font-bold text-white">{project.impactStat}</span>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                        <span className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                            <Lock className="w-3 h-3" /> Access Dossier
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0d938c] group-hover:text-white transition-colors duration-300">
                                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </section>

            <LeadCaptureCTA localization={{ headingText: "Engineered for Dominance.", headingHighlight: "", subheading: "Stop competing. Start conquering." }} />
        </main>
    );
}