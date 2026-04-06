'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Linkedin, Twitter, Copy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Reuse your Global CTA
import CTASection from '@/components/layout/CTASection';

export default function BlogPostUI({ post }: { post: any }) {

    // Animation Variants
    const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <main className="min-h-screen bg-white font-poppins-regular">

            {/* ---------------- HERO SECTION (Obsidian) ---------------- */}
            <section className="relative w-full py-32 bg-[#0B1221] overflow-hidden">
                {/* Background FX */}
                <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Back Link */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0d938c] transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Return to Nexus
                    </Link>

                    {/* Meta Data (Category & Time Only) */}
                    <motion.div
                        initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#0d938c] mb-6"
                    >
                        <span>{post.category}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="text-slate-400">{post.readTime}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="text-slate-400">{post.publishedAt}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
                    >
                        {post.title}
                    </motion.h1>

                    {/* (Author Block Removed Here) */}
                </div>
            </section>

            {/* ---------------- MAIN CONTENT LAYOUT ---------------- */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT: CONTENT BODY (8 Columns) */}
                    <div className="lg:col-span-8">
                        {/* Cover Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12"
                        >
                            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                        </motion.div>

                        {/* RICH TEXT RENDERER */}
                        <article
                            className="prose prose-lg prose-slate max-w-none
                  prose-headings:font-bold prose-headings:text-slate-900 
                  prose-p:text-slate-600 prose-p:leading-loose
                  prose-a:text-[#0d938c] prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-[#0d938c] prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
                  prose-li:marker:text-[#0d938c]"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* RIGHT: STICKY SIDEBAR (4 Columns) */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32">

                            {/* Share Widget (Kept as utility) */}
                            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl mb-8">
                                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Share2 className="w-4 h-4 text-[#0d938c]" /> Share Intelligence
                                </h4>
                                <div className="flex gap-2">
                                    <button className="p-3 bg-white border border-slate-200 rounded-lg hover:border-[#0d938c] hover:text-[#0d938c] transition-colors"><Linkedin className="w-4 h-4" /></button>
                                    <button className="p-3 bg-white border border-slate-200 rounded-lg hover:border-[#0d938c] hover:text-[#0d938c] transition-colors"><Twitter className="w-4 h-4" /></button>
                                    <button className="p-3 bg-white border border-slate-200 rounded-lg hover:border-[#0d938c] hover:text-[#0d938c] transition-colors"><Copy className="w-4 h-4" /></button>
                                </div>
                            </div>

                            {/* (Author Bio Widget Removed Here) */}

                            {/* Optional: Add a Mini-Service Call instead */}
                            <div className="bg-[#0B1221] text-white p-8 rounded-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d938c] opacity-[0.1] blur-[50px] rounded-full" />
                                <h4 className="text-xs font-bold text-[#0d938c] uppercase tracking-widest mb-4">Need this implemented?</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    DevLogix engineers sovereign systems like the one described in this briefing.
                                </p>
                                <Link href="/contact" className="text-sm font-bold text-white border-b border-[#0d938c] pb-1 hover:text-[#0d938c] transition-colors">
                                    Initiate Protocol
                                </Link>
                            </div>

                        </div>
                    </aside>

                </div>
            </section>

            {/* 3. DYNAMIC CTA */}
            <CTASection
                title="Disgusted by Rent-Seeking?"
                subtitle="If this briefing resonated with you, it's time to own your technology. Let's build your sovereign asset."
            />

        </main>
    );
}