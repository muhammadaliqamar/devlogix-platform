'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Linkedin, Twitter, Copy, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import CTASection from '@/components/layout/CTASection';

// --- RICH TEXT STYLING (The "Prose" Engine) ---
const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="relative w-full h-[400px] my-10 rounded-xl overflow-hidden">
                    <Image
                        src={value.asset._ref} // You'll need a URL builder if raw ref
                        alt={value.alt || 'Blog Image'}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        }
    },
    block: {
        h2: ({ children }: any) => <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 border-l-4 border-[#0d938c] pl-4">{children}</h3>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#0d938c] bg-slate-50 p-6 my-8 italic text-slate-600 rounded-r-lg">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => <p className="text-slate-600 leading-loose mb-6 text-lg">{children}</p>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a href={value.href} rel={rel} className="text-[#0d938c] font-bold hover:underline">
                    {children}
                </a>
            );
        },
    },
};

export default function BlogPostClient({ post }: { post: any }) {
    if (!post) return null;

    return (
        <main className="min-h-screen bg-white font-poppins-regular">

            {/* ---------------- 1. HERO (Obsidian Header) ---------------- */}
            <section className="relative w-full pt-32 pb-20 bg-[#0B1221] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0d938c] transition-colors mb-8 text-xs font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Return to Nexus
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#0d938c] mb-6"
                    >
                        <span>{post.category}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
                    >
                        {post.title}
                    </motion.h1>

                    <div className="text-slate-400 text-sm font-medium flex justify-center gap-2">
                        <span>Published on {new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </section>

            {/* ---------------- 2. MAIN CONTENT ---------------- */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT: CONTENT BODY (8 Columns) */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12"
                        >
                            {post.coverImage && (
                                <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                            )}
                        </motion.div>

                        {/* THE PORTABLE TEXT RENDERER */}
                        <article className="prose prose-lg prose-slate max-w-none">
                            <PortableText value={post.content} components={ptComponents} />
                        </article>
                    </div>

                    {/* RIGHT: STICKY SIDEBAR (4 Columns) */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32">

                            {/* Share Widget */}
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

                            {/* CTA Widget */}
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

            <CTASection
                title="Disgusted by Rent-Seeking?"
                subtitle="If this briefing resonated with you, it's time to own your technology."
            />

        </main>
    );
}