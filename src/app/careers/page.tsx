'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Briefcase, CheckCircle2, MapPin, Search } from 'lucide-react';
import { useState } from 'react';
import { benefits, openPositions, departments } from '@/data/careersData';
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA';

export default function CareersPage() {
    const [activeDept, setActiveDept] = useState("All");

    const filteredJobs = activeDept === "All"
        ? openPositions
        : openPositions.filter(job => job.department === activeDept);

    return (
        <main className="min-h-screen bg-[#050505] font-poppins-regular selection:bg-[#0d938c] selection:text-white">

            {/* ================= 1. HERO: THE RECRUITMENT CALL ================= */}
            <section className="relative w-full pt-40 pb-32 overflow-hidden">
                {/* Background FX */}
                <div className="absolute inset-0 bg-[#0B1221]">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0d938c 1px, transparent 1px), linear-gradient(90deg, #0d938c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0d938c] opacity-[0.1] blur-[150px] rounded-full pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#0d938c] animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Status: Hiring Elite Talent</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Join the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-emerald-400">Sovereign Vanguard.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        We don't hire employees. We recruit architects who are ready to build the next generation of enterprise infrastructure. <br />
                        <span className="text-white font-bold">No bureaucracy. No legacy code. Only impact.</span>
                    </motion.p>
                </div>
            </section>

            {/* ================= 2. BENEFITS GRID (Dark Glass) ================= */}
            <section className="relative z-20 max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            key={idx}
                            className="p-8 rounded-2xl bg-[#0f1623] border border-white/5 hover:border-[#0d938c]/50 hover:bg-[#0d938c]/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[#0d938c]/10 flex items-center justify-center mb-6 group-hover:bg-[#0d938c] transition-colors">
                                <benefit.icon className="w-6 h-6 text-[#0d938c] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ================= 3. THE MISSION BOARD (Jobs) ================= */}
            <section className="w-full bg-white py-24 rounded-t-[3rem]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Active Missions</h2>
                            <p className="text-slate-500">Select a protocol to view clearance requirements.</p>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap gap-2">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveDept(dept)}
                                    className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all ${activeDept === dept
                                            ? 'bg-[#0B1221] text-white border-[#0B1221] shadow-lg'
                                            : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#0B1221] hover:text-[#0B1221]'
                                        }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Job List */}
                    <div className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {filteredJobs.map((job) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    key={job.id}
                                    className="group relative bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-xl hover:border-[#0d938c]/30 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                                        {/* Job Info */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-3 py-1 bg-[#0d938c]/10 text-[#0d938c] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                                    {job.department}
                                                </span>
                                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" /> {job.location}
                                                </span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0d938c] transition-colors">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {job.tags.map((tag, i) => (
                                                    <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action & Salary */}
                                        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-8">
                                            <div className="text-right hidden md:block">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Comp Package</p>
                                                <p className="text-slate-900 font-bold">{job.salary}</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0B1221] group-hover:text-white transition-all">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredJobs.length === 0 && (
                            <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                                <p className="text-slate-400">No active missions in this sector.</p>
                            </div>
                        )}
                    </div>

                </div>
            </section>

            <LeadCaptureCTA localization={{ headingText: "Don", headingHighlight: "", subheading: "We are always looking for outliers. Send your dossier to careers@devlogix.io and tell us what you can build." }} />

        </main>
    );
}