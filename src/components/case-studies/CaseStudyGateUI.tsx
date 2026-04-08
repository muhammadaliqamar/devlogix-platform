'use client'

import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Lock, ArrowLeft, ShieldCheck, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { countryCodes } from '@/lib/countryCodes';

export default function CaseStudyGateUI({ study }: { study: any }) {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate Server Action delay
        setTimeout(() => setFormState('success'), 1500);
    };

    return (
        <main className="min-h-screen bg-slate-50 font-poppins-regular">

            {/* HERO HEADER */}
            <section className="relative w-full pt-32 pb-32 bg-[#0B1221] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0d938c] transition-colors mb-6 text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Return to Archives
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Restricted Dossier</h1>
                    <p className="text-slate-400 text-sm">Clearance Level: Partner</p>
                </div>
            </section>

            {/* OVERLAPPING SPLIT CARD */}
            <section className="relative z-20 px-6 pb-20 -mt-20">
                <div className="max-w-6xl mx-auto w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

                    {/* LEFT: THE HOOK (Overview Only) */}
                    <div className="w-full lg:w-1/2 bg-[#050505] text-white p-10 md:p-16 flex flex-col relative overflow-hidden border-r border-white/5">
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0d938c 1px, transparent 1px), linear-gradient(90deg, #0d938c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="px-3 py-1 bg-[#0d938c]/20 text-[#0d938c] text-xs font-bold uppercase tracking-widest rounded-sm border border-[#0d938c]/20">
                                    {study.category}
                                </span>
                                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Confidential</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">{study.title}</h2>

                            {/* THE ONE KEY METRIC */}
                            <div className="pl-4 border-l-2 border-[#0d938c] mb-10">
                                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Primary Impact</p>
                                <p className="text-2xl font-bold text-white">{study.impactStat}</p>
                            </div>

                            {/* WHAT IS INSIDE THE PDF (Static List) */}
                            <div className="space-y-6 mb-12">
                                <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">Encrypted File Contents</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                                        <Lock className="w-4 h-4 text-[#0d938c]" />
                                        <span>Full Technical Architecture Diagram</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                                        <Lock className="w-4 h-4 text-[#0d938c]" />
                                        <span>Cost Reduction Analysis (OpEx)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                                        <Lock className="w-4 h-4 text-[#0d938c]" />
                                        <span>Legacy Migration Roadmap</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto flex items-center gap-4 opacity-70">
                                <div className="w-12 h-16 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-xs text-slate-400">
                                    <strong>{study.client}</strong> <br />
                                    Format: PDF (2.4 MB)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: THE GATE (Lead Form) */}
                    <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative">
                        {formState === 'success' ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                                <div className="w-20 h-20 bg-[#0d938c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-[#0d938c]" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Transmission Complete.</h3>
                                <p className="text-slate-500 max-w-sm mx-auto mb-8 text-sm">
                                    The requested dossier for <strong>{study.client}</strong> has been dispatched to your secure inbox.
                                </p>
                                <Link href="/case-studies" className="text-[#0d938c] font-bold text-xs uppercase tracking-widest hover:underline">
                                    Return to Archives
                                </Link>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Identify Yourself</h2>
                                    <p className="text-slate-500 text-sm">
                                        Enter your credentials to unlock this sovereign asset.
                                    </p>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-slate-900 text-sm focus:border-[#0d938c] focus:outline-none focus:bg-white transition-all" placeholder="John Doe" />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Work Email</label>
                                    <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-slate-900 text-sm focus:border-[#0d938c] focus:outline-none focus:bg-white transition-all" placeholder="john@company.com" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone</label>
                                        <div className="flex border border-slate-200 rounded-sm bg-slate-50 overflow-hidden focus-within:border-[#0d938c] transition-all focus-within:bg-white">
                                            <div className="w-[100px] relative border-r border-slate-200 bg-transparent flex items-center justify-center">
                                                <select required defaultValue="+1" className="w-full h-full bg-transparent text-slate-900 text-sm focus:outline-none appearance-none cursor-pointer px-2 pr-6 z-10">
                                                {countryCodes.map(c => (
                                                    <option key={c.code} value={c.dial}>{c.code} ({c.dial})</option>
                                                ))}
                                                </select>
                                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 z-0 pointer-events-none" />
                                            </div>
                                            <input required type="tel" className="flex-1 bg-transparent px-4 py-3 text-slate-900 text-sm focus:outline-none" placeholder="xxxx-xxxx" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Company</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-slate-900 text-sm focus:border-[#0d938c] focus:outline-none focus:bg-white transition-all" placeholder="Acme Inc" />
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 pt-4">
                                    <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 text-[#0d938c] border-slate-300 rounded focus:ring-[#0d938c] cursor-pointer" />
                                    <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                                        I consent to DevLogix processing my data to send me this material.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="w-full bg-[#0B1221] text-white font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-[#0d938c] transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-xl"
                                >
                                    {formState === 'submitting' ? (
                                        <span>Verifying...</span>
                                    ) : (
                                        <>
                                            <ShieldCheck className="w-4 h-4" /> Request Access
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-center text-slate-400 mt-4">
                                    Zero-Spam Policy. Your data is encrypted and never sold.
                                </p>
                            </form>
                        )}
                    </div>

                </div>
            </section>
        </main>
    );
}