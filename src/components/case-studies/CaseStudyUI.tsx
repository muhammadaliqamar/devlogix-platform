'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Layers, Cpu, Clock, Calendar, Zap, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA';

export default function CaseStudyUI({ study }: { study: any }) {

    const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <main className="min-h-screen bg-white font-poppins-regular">

            {/* ---------------- 1. HERO MISSION BRIEF (Obsidian) ---------------- */}
            <section className="relative w-full pt-32 pb-20 bg-[#0B1221] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <Link href="/work" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0d938c] transition-colors mb-8 text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Mission Archive
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-[#0d938c]/10 border border-[#0d938c]/20 text-[#0d938c] text-[10px] font-bold uppercase tracking-wider rounded-sm">
                                    {study.category}
                                </span>
                                <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                                    Client: {study.client}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
                            >
                                {study.title}
                            </motion.h1>
                        </div>

                        {/* KEY STATS ROW */}
                        <motion.div
                            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
                            className="flex gap-4 md:gap-8 border-t border-white/10 pt-8"
                        >
                            {study.stats.map((stat: any, i: number) => (
                                <div key={i}>
                                    <p className="text-2xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                                    <p className="text-slate-500 text-[10px] uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ---------------- 2. MAIN VISUAL (Cinematic) ---------------- */}
            <section className="w-full bg-[#0B1221] pb-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    className="relative max-w-7xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                    <Image src={study.coverImage} alt={study.title} fill className="object-cover" />
                </motion.div>
            </section>

            {/* ---------------- 3. DOSSIER CONTENT ---------------- */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT: THE NARRATIVE (8 Cols) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* The Challenge */}
                        <div>
                            <h3 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#0d938c] rounded-full" /> The Objective
                            </h3>
                            <div
                                className="prose prose-lg prose-slate max-w-none text-slate-600"
                                dangerouslySetInnerHTML={{ __html: study.challenge }}
                            />
                        </div>

                        {/* The Solution */}
                        <div>
                            <h3 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#0d938c] rounded-full" /> The Execution
                            </h3>
                            <div
                                className="prose prose-lg prose-slate max-w-none text-slate-600"
                                dangerouslySetInnerHTML={{ __html: study.solution }}
                            />
                        </div>

                        {/* Image Gallery */}
                        {study.gallery && study.gallery.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {study.gallery.map((img: string, i: number) => (
                                    <div key={i} className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                                        <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Testimonial */}
                        <div className="bg-[#0B1221] p-10 rounded-2xl relative overflow-hidden mt-12">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d938c] opacity-[0.1] blur-[50px] rounded-full" />
                            <p className="text-white text-xl md:text-2xl font-medium italic mb-6 relative z-10">
                                "{study.testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-[2px] bg-[#0d938c]" />
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                    {study.testimonial.author}
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT: PROJECT DATA (Sticky Sidebar - 4 Cols) */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32 bg-slate-50 border border-slate-100 p-8 rounded-xl">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">
                                Mission Data
                            </h4>

                            {/* Timeline */}
                            <div className="mb-6">
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <Clock className="w-3 h-3" /> Timeline
                                </p>
                                <p className="text-slate-900 font-medium">{study.timeline}</p>
                            </div>

                            {/* Services */}
                            <div className="mb-6">
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <Layers className="w-3 h-3" /> Services Deployed
                                </p>
                                <ul className="space-y-1">
                                    {study.services.map((s: string) => (
                                        <li key={s} className="text-slate-900 font-medium text-sm">• {s}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Cpu className="w-3 h-3" /> Technology Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {study.stack.map((t: string) => (
                                        <span key={t} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold uppercase rounded-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>
            </section>

            {/* 4. CTA */}
            <LeadCaptureCTA localization={{ headingText: "Need Similar Results?", headingHighlight: "", subheading: "This architecture is repeatable. Let" }} />

        </main>
    );
}