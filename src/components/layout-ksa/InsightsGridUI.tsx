'use client'

import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Newspaper, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// 1. DATA INTERFACE
export interface InsightItem {
    id: string;
    type: 'case-study' | 'insight' | 'guide' | 'press';
    category: string;
    title: string;
    summary: string;
    link: string;
    date?: string;
    image?: string;
}

interface InsightsGridProps {
    items: InsightItem[];
}

export default function InsightsGridUI({ items }: InsightsGridProps) {
    // Destructure the array passed from the server
    // Order is guaranteed: [Featured, Blog1, Blog2, News]
    const [featured, insight1, insight2, news] = items;

    // Safety check in case data is missing (e.g., fresh CMS)
    if (!featured) return null;

    return (
        <section className="w-full bg-slate-50 pt-24 pb-12 md:pt-16 md:pb-12 font-poppins-regular">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">
                            Intelligence Stream
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            Enterprise Tech <span className="text-[#0d938c]">Insights & Case Studies.</span>
                        </h3>
                        <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
                            Explore our latest thinking, technical deep-dives, and real-world case studies demonstrating how we engineer scalable software for global industries.
                        </p>
                    </div>
                    <Link href="/blog" className="text-sm font-bold text-slate-900 border-b border-slate-300 pb-1 hover:border-[#0d938c] hover:text-[#0d938c] transition-all duration-300">
                        View All Intelligence
                    </Link>
                </div>

                {/* THE BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">

                    {/* SLOT 1: FEATURED CASE STUDY (Obsidian Theme) */}
                    <Link href={featured.link} className="md:col-span-2 md:row-span-2 group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full w-full"
                        >
                            {/* Dynamic Background Image */}
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                                {featured.image && (
                                    <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                                )}
                                <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 to-black" />
                            </div>

                            <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                                <div className="flex justify-between items-start">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                        {featured.category}
                                    </span>
                                    <ArrowUpRight className="w-6 h-6 text-white/50 group-hover:text-[#0d938c] transition-colors duration-300" />
                                </div>

                                <div>
                                    <h4 className="text-3xl font-bold text-white mb-4 leading-tight">
                                        {featured.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                                        {featured.summary}
                                    </p>
                                    <span className="text-[#0d938c] text-xs font-bold uppercase tracking-wider group-hover:underline decoration-[#0d938c]/50 underline-offset-4 cursor-pointer">
                                        Read The Report
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* SLOT 2: INSIGHT 1 (White Theme) */}
                    {insight1 && (
                        <Link href={insight1.link} className="md:col-span-1 md:row-span-1 group relative rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-colors p-6 flex flex-col justify-between">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="h-full flex flex-col justify-between"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <TrendingUp className="w-3 h-3 text-[#0d938c]" />
                                        {insight1.category}
                                    </span>
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                                        {insight1.title}
                                    </h5>
                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                        {insight1.summary}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    )}

                    {/* SLOT 3: INSIGHT 2 (White Theme) */}
                    {insight2 && (
                        <Link href={insight2.link} className="md:col-span-1 md:row-span-1 group relative rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-colors p-6 flex flex-col justify-between">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="h-full flex flex-col justify-between"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <FileText className="w-3 h-3 text-[#0d938c]" />
                                        {insight2.category}
                                    </span>
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                                        {insight2.title}
                                    </h5>
                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                        {insight2.summary}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    )}

                    {/* SLOT 4: PRESS RELEASE (Wide White Theme) */}
                    {news && (
                        <Link href={news.link} className="md:col-span-2 md:row-span-1 group relative rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 transition-colors p-8 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="h-full flex flex-col justify-center"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <Newspaper className="w-3 h-3 text-[#0d938c]" />
                                        {news.category}
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-300">{news.date}</span>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0d938c] transition-colors">
                                            {news.title}
                                        </h4>
                                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                                            {news.summary}
                                        </p>
                                    </div>
                                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-slate-100 group-hover:bg-[#0d938c] group-hover:border-[#0d938c] transition-all">
                                        <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    )}

                </div>
            </div>
        </section>
    );
}