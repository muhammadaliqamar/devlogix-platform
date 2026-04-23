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

// 2. LOCALIZATION INTERFACE
export interface InsightsGridLocale {
    dir?: 'ltr' | 'rtl';
    kicker?: string;
    heading?: string;
    headingHighlight?: string;
    paragraph?: string;
    viewAllLabel?: string;
    viewAllLink?: string;
    readReportLabel?: string;
}

const defaultLocale: InsightsGridLocale = {
    dir: 'ltr',
    kicker: 'Intelligence Stream',
    heading: 'Latest',
    headingHighlight: 'Insights & Articles.',
    paragraph: 'Explore our latest thinking, technical deep-dives, and industry insights on custom software development, AI, and digital transformation.',
    viewAllLabel: 'View All Insights',
    viewAllLink: '/blog',
    readReportLabel: 'Read Article',
};

interface InsightsGridProps {
    items: InsightItem[];
    locale?: InsightsGridLocale;
}

export default function InsightsGridUI({ items, locale }: InsightsGridProps) {
    const t = { ...defaultLocale, ...locale };
    const [featured, blog1, blog2, blog3] = items;

    if (!featured) return null;

    return (
        // SEO FIX 1: Linked the section directly to the main semantic heading via aria-labelledby
        <section aria-labelledby="insights-heading" className="w-full bg-slate-50 pt-20 pb-12 md:pt-6 md:pb-12 font-poppins-regular" dir={t.dir}>
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        {/* SEO FIX 2: Changed from <h2> to <span>. Kickers are visual labels, not document headings. */}
                        <span className="block text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">
                            {t.kicker}
                        </span>

                        {/* SEO FIX 3: Changed from <h3> to <h2>. Added ID for the section link. Appended invisible keywords. */}
                        <h2 id="insights-heading" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            {t.heading} <span className="text-[#0d938c]">{t.headingHighlight}</span>
                            <span className="sr-only"> on Custom Software Development</span>
                        </h2>

                        <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
                            {t.paragraph}
                        </p>
                    </div>
                    <Link href={t.viewAllLink || '/blog'} className="text-sm font-bold text-slate-900 border-b border-slate-300 pb-1 hover:border-[#0d938c] hover:text-[#0d938c] transition-all duration-300">
                        {t.viewAllLabel}
                    </Link>
                </div>

                {/* THE BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">

                    {/* SLOT 1: FEATURED BLOG POST */}
                    <Link href={featured.link} className="md:col-span-2 md:row-span-2 group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full w-full"
                        >
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                                {featured.image ? (
                                    <>
                                        <Image src={featured.image} alt={`Blog: ${featured.title}`} fill className="object-cover" unoptimized />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    </>
                                ) : (
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 to-black" />
                                )}
                            </div>

                            <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                                <div className="flex justify-between items-start">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                        {/* {featured.category} */}
                                        Blog
                                    </span>
                                    <ArrowUpRight className="w-6 h-6 text-white/50 group-hover:text-[#0d938c] transition-colors duration-300" />
                                </div>

                                <div>
                                    {/* SEO FIX 5: Standardized to <h3>. All cards in an <h2> section should be <h3>. */}
                                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                                        {featured.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                                        {featured.summary}
                                    </p>
                                    <span className="text-[#0d938c] text-xs font-bold uppercase tracking-wider group-hover:underline decoration-[#0d938c]/50 underline-offset-4 cursor-pointer">
                                        {t.readReportLabel}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* SLOT 2: BLOG 2 */}
                    {blog1 && (
                        <Link href={blog1.link} className="md:col-span-1 md:row-span-1 group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-slate-300 transition-colors">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="h-full w-full"
                            >
                                {blog1.image && (
                                    <div className="absolute inset-0">
                                        <Image src={blog1.image} alt={`Blog: ${blog1.title}`} fill className="object-cover" unoptimized />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    </div>
                                )}
                                <div className="relative h-full flex flex-col justify-between p-6">
                                    <div className="flex justify-between items-start">
                                        <span className="flex items-center gap-2 text-[10px] font-bold text-white/70 uppercase tracking-widest">
                                            <TrendingUp className="w-3 h-3 text-[#0d938c]" />
                                            {blog1.category}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                                            {blog1.title}
                                        </h3>
                                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                                            {blog1.summary}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    )}

                    {/* SLOT 3: BLOG 3 */}
                    {blog2 && (
                        <Link href={blog2.link} className="md:col-span-1 md:row-span-1 group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-slate-300 transition-colors">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="h-full w-full"
                            >
                                {blog2.image && (
                                    <div className="absolute inset-0">
                                        <Image src={blog2.image} alt={`Blog: ${blog2.title}`} fill className="object-cover" unoptimized />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    </div>
                                )}
                                <div className="relative h-full flex flex-col justify-between p-6">
                                    <div className="flex justify-between items-start">
                                        <span className="flex items-center gap-2 text-[10px] font-bold text-white/70 uppercase tracking-widest">
                                            <FileText className="w-3 h-3 text-[#0d938c]" />
                                            {blog2.category}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                                            {blog2.title}
                                        </h3>
                                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                                            {blog2.summary}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    )}

                    {/* SLOT 4: BLOG 4 */}
                    {blog3 && (
                        <Link href={blog3.link} className="md:col-span-2 md:row-span-1 group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-slate-300 transition-colors">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="h-full w-full"
                            >
                                {blog3.image && (
                                    <div className="absolute inset-0">
                                        <Image src={blog3.image} alt={`Blog: ${blog3.title}`} fill className="object-cover" unoptimized />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    </div>
                                )}
                                <div className="relative h-full flex flex-col justify-end p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="flex items-center gap-2 text-[10px] font-bold text-white/70 uppercase tracking-widest">
                                            <Newspaper className="w-3 h-3 text-[#0d938c]" />
                                            {blog3.category}
                                        </span>
                                        <span className="text-[10px] font-bold text-white/40">{blog3.date}</span>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0d938c] transition-colors">
                                                {blog3.title}
                                            </h3>
                                            <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
                                                {blog3.summary}
                                            </p>
                                        </div>
                                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/20 group-hover:bg-[#0d938c] group-hover:border-[#0d938c] transition-all">
                                            <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white" />
                                        </div>
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