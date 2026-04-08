'use client'

import { motion } from 'framer-motion';
import { CheckCircle2, FileText, ArrowLeft, Download, ChevronDown, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { countryCodes } from '@/lib/countryCodes';

export default function CaseStudyGateUI({ study }: { study: any }) {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [dialCode, setDialCode] = useState('+92');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('submitting');
        setErrorMsg('');

        const formData = new FormData(e.currentTarget);
        const payload = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: `${dialCode} ${formData.get('phone') as string}`,
            company: formData.get('company') as string,
            caseStudyTitle: study.title,
            caseStudySlug: study.slug || '',
        };

        try {
            const res = await fetch('/api/case-study-download', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const result = await res.json();

            if (res.ok) {
                setFormState('success');
            } else {
                setErrorMsg(result.error || 'Something went wrong. Please try again.');
                setFormState('error');
            }
        } catch {
            setErrorMsg('An unexpected error occurred. Please try again later.');
            setFormState('error');
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 font-poppins-regular">

            {/* HERO HEADER */}
            <section className="relative w-full pt-32 pb-32 bg-[#0B1221] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0d938c] transition-colors mb-6 text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Download Case Study</h1>
                    <p className="text-slate-400 text-sm">Get the full breakdown delivered straight to your inbox.</p>
                </div>
            </section>

            {/* SPLIT CARD */}
            <section className="relative z-20 px-6 pb-20 -mt-20">
                <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[550px]">

                    {/* LEFT: Case Study Preview */}
                    <div className="w-full lg:w-[45%] bg-[#050505] text-white p-10 md:p-14 flex flex-col relative overflow-hidden border-r border-white/5">
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0d938c 1px, transparent 1px), linear-gradient(90deg, #0d938c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                        <div className="relative z-10 flex flex-col h-full">
                            <span className="inline-block px-3 py-1 bg-[#0d938c]/20 text-[#0d938c] text-xs font-bold uppercase tracking-widest rounded-sm border border-[#0d938c]/20 w-fit mb-8">
                                {study.category}
                            </span>

                            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">{study.title}</h2>

                            {/* Impact Metric */}
                            <div className="pl-4 border-l-2 border-[#0d938c] mb-10">
                                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Key Result</p>
                                <p className="text-2xl font-bold text-white">{study.impactStat}</p>
                            </div>

                            {/* What's Inside */}
                            <div className="space-y-4 mb-10">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Inside the PDF</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                                        <Download className="w-4 h-4 text-[#0d938c] shrink-0" />
                                        <span>Full Technical Architecture</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                                        <Download className="w-4 h-4 text-[#0d938c] shrink-0" />
                                        <span>Results & Impact Analysis</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                                        <Download className="w-4 h-4 text-[#0d938c] shrink-0" />
                                        <span>Implementation Roadmap</span>
                                    </li>
                                </ul>
                            </div>

                            {/* File Meta */}
                            <div className="mt-auto flex items-center gap-4 opacity-70">
                                <div className="w-12 h-16 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-xs text-slate-400">
                                    <strong>{study.client}</strong> <br />
                                    Format: PDF
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Lead Capture Form */}
                    <div className="w-full lg:w-[55%] p-10 md:p-14 flex flex-col justify-center bg-white relative">
                        {formState === 'success' ? (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                                <div className="w-20 h-20 bg-[#0d938c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-[#0d938c]" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Check Your Inbox!</h3>
                                <p className="text-slate-500 max-w-sm mx-auto mb-8 text-sm leading-relaxed">
                                    The case study for <strong>{study.client}</strong> has been sent to your email. It should arrive within a minute.
                                </p>
                                <Link href="/case-studies" className="text-[#0d938c] font-bold text-xs uppercase tracking-widest hover:underline">
                                    Browse More Case Studies
                                </Link>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Get the Full Case Study</h2>
                                    <p className="text-slate-500 text-sm">
                                        Fill in your details and we'll send the PDF directly to your email.
                                    </p>
                                </div>

                                {/* Error Message */}
                                {errorMsg && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                                        {errorMsg}
                                    </div>
                                )}

                                {/* Name */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        aria-label="Full Name"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:border-[#0d938c] focus:outline-none focus:bg-white transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Work Email</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        aria-label="Work Email"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:border-[#0d938c] focus:outline-none focus:bg-white transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                {/* Phone + Company */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone</label>
                                        <div className="flex border border-slate-200 rounded-lg bg-slate-50 overflow-hidden focus-within:border-[#0d938c] transition-all focus-within:bg-white">
                                            <div className="w-[100px] relative border-r border-slate-200 bg-transparent flex items-center justify-center">
                                                <select
                                                    value={dialCode}
                                                    onChange={(e) => setDialCode(e.target.value)}
                                                    aria-label="Country Dial Code"
                                                    className="w-full h-full bg-transparent text-slate-900 text-sm focus:outline-none appearance-none cursor-pointer px-2 pr-6 z-10"
                                                >
                                                    {countryCodes.map(c => (
                                                        <option key={c.code} value={c.dial}>{c.code} ({c.dial})</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 z-0 pointer-events-none" />
                                            </div>
                                            <input
                                                required
                                                name="phone"
                                                type="tel"
                                                aria-label="Phone Number"
                                                className="flex-1 bg-transparent px-4 py-3 text-slate-900 text-sm focus:outline-none"
                                                placeholder="xxxx-xxxxxxx"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Company</label>
                                        <input
                                            required
                                            name="company"
                                            type="text"
                                            aria-label="Company Name"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 text-sm focus:border-[#0d938c] focus:outline-none focus:bg-white transition-all"
                                            placeholder="Acme Inc"
                                        />
                                    </div>
                                </div>

                                {/* Consent */}
                                <div className="flex items-start gap-3 pt-2">
                                    <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 text-[#0d938c] border-slate-300 rounded focus:ring-[#0d938c] cursor-pointer accent-[#0d938c]" />
                                    <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                                        I agree to receive this case study and related follow-ups from DevLogix.
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="w-full bg-[#0d938c] text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#0a706b] transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formState === 'submitting' ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" /> Send Me the PDF
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-center text-slate-400 mt-3">
                                    We respect your privacy. No spam, ever.
                                </p>
                            </form>
                        )}
                    </div>

                </div>
            </section>
        </main>
    );
}