'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, Download, Printer, Mail, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/layout/CTASection';

export default function NewsPostUI({ post }: { post: any }) {

    const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <main className="min-h-screen bg-white font-poppins-regular">

            {/* 1. HERO SECTION (Obsidian) */}
            <section className="relative w-full py-32 bg-[#0B1221] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <Link href="/newsroom" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0d938c] transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Return to Newsroom
                    </Link>

                    <motion.div
                        initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#0d938c] mb-6"
                    >
                        <span>{post.type}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="text-slate-400">{post.location}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="text-slate-400">{post.date}</span>
                    </motion.div>

                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                    >
                        {post.title}
                    </motion.h1>

                    <motion.p
                        initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        {post.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* 2. CONTENT & SIDEBAR */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT: CONTENT (8 Cols) */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12"
                        >
                            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                        </motion.div>

                        <article
                            className="prose prose-lg prose-slate max-w-none
                  prose-headings:font-bold prose-headings:text-slate-900 
                  prose-p:text-slate-600 prose-p:leading-loose
                  prose-blockquote:border-l-[#0d938c] prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6
                  prose-a:text-[#0d938c]"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* RIGHT: PRESS KIT (4 Cols) */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32">

                            {/* Media Assets */}
                            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl mb-8">
                                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-[#0d938c]" /> Media Assets
                                </h4>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-[#0d938c] text-sm font-medium text-slate-600 transition-colors group">
                                        <span>Download Release (PDF)</span>
                                        <Download className="w-4 h-4 text-slate-400 group-hover:text-[#0d938c]" />
                                    </button>
                                    <button className="w-full flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-[#0d938c] text-sm font-medium text-slate-600 transition-colors group">
                                        <span>High-Res Images</span>
                                        <Download className="w-4 h-4 text-slate-400 group-hover:text-[#0d938c]" />
                                    </button>
                                </div>
                            </div>

                            {/* Press Contact */}
                            <div className="bg-[#0B1221] text-white p-8 rounded-xl">
                                <h4 className="text-xs font-bold text-[#0d938c] uppercase tracking-widest mb-4">Press Contact</h4>
                                <p className="text-sm font-bold mb-1">Media Relations</p>
                                <a href="mailto:press@devlogix.io" className="text-slate-400 text-sm hover:text-[#0d938c] transition-colors flex items-center gap-2 mb-6">
                                    <Mail className="w-3 h-3" /> press@devlogix.io
                                </a>
                                <p className="text-slate-500 text-xs leading-relaxed">
                                    For interview requests with the Board or official commentary on this release.
                                </p>
                            </div>

                        </div>
                    </aside>

                </div>
            </section>

            {/* 3. CTA */}
            <CTASection
                title="Build With a Market Leader."
                subtitle="Partner with the sovereign engineering firm that is redefining the enterprise stack."
            />

        </main>
    );
}