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
    heading: 'Enterprise Tech',
    headingHighlight: 'Insights & Case Studies.',
    paragraph: 'Explore our latest thinking, technical deep-dives, and real-world case studies demonstrating how we engineer scalable software for global industries.',
    viewAllLabel: 'View All Intelligence',
    viewAllLink: '/blog',
    readReportLabel: 'Read The Report',
};

interface InsightsGridProps {
    items: (InsightItem | null)[];
    locale?: InsightsGridLocale;
}

export default function InsightsGridUI({ items, locale }: InsightsGridProps) {
    const t = { ...defaultLocale, ...locale };
    const [featured, insight1, insight2, news] = items;

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

                    {/* SLOT 1: FEATURED CASE STUDY */}
                    <Link href={featured.link} className="md:col-span-2 md:row-span-2 group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full w-full"
                        >
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                                {featured.image && (
                                    // SEO FIX 4: Made alt text more descriptive by prepending the type
                                    <Image src={featured.image} alt={`Case Study: ${featured.title}`} fill className="object-cover" />
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

                    {/* SLOT 2: INSIGHT 1 */}
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
                                    {/* SEO FIX 6: Standardized to <h3> */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                                        {insight1.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                        {insight1.summary}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    )}

                    {/* SLOT 3: INSIGHT 2 */}
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
                                    {/* SEO FIX 7: Standardized to <h3> */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                                        {insight2.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                        {insight2.summary}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    )}

                    {/* SLOT 4: PRESS RELEASE */}
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
                                        {/* SEO FIX 8: Standardized to <h3> */}
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0d938c] transition-colors">
                                            {news.title}
                                        </h3>
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