'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Megaphone, Newspaper, Award, Search, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// =====================================================================
// 1. DUMMY NEWS DATA
// =====================================================================
const NEWS_ITEMS = [
    {
        slug: "series-a-funding",
        title: "DevLogix Secures $12M Series A to Accelerate Sovereign AI Infrastructure",
        excerpt: "The round was led by Future Ventures with participation from major sovereign wealth funds. The capital will fuel the expansion of our dedicated GPU clusters.",
        coverImage: "/news/funding.jpg", // Ensure you have images in /public/news/
        type: "Press Release",
        date: "Feb 10, 2026",
        isFeatured: true
    },
    {
        slug: "dubai-expansion",
        title: "DevLogix Opens Regional HQ in Dubai Internet City",
        excerpt: "To better serve our MENA enterprise partners, we are establishing a new command center in the heart of the region's tech ecosystem.",
        coverImage: "/news/dubai.jpg",
        type: "Expansion",
        date: "Jan 22, 2026",
        isFeatured: false
    },
    {
        slug: "award-clutch-2026",
        title: "Recognized as Top B2B Software Developer by Clutch",
        excerpt: "For the third consecutive year, DevLogix has been ranked in the top 1% of global engineering firms for delivery excellence.",
        coverImage: "/news/award.jpg",
        type: "Award",
        date: "Jan 15, 2026",
        isFeatured: false
    },
    {
        slug: "strategic-partnership-aws",
        title: "DevLogix & AWS: Pioneering Private Cloud Architectures",
        excerpt: "A new strategic partnership to deliver air-gapped cloud solutions for defense and healthcare sectors.",
        coverImage: "/news/partnership.jpg",
        type: "Partnership",
        date: "Dec 10, 2025",
        isFeatured: false
    },
    {
        slug: "q4-report",
        title: "Q4 2025 Performance: 200% YoY Growth in Enterprise Accounts",
        excerpt: "Our fiscal year closes with record-breaking adoption of our Sovereign ERP solutions across the manufacturing sector.",
        coverImage: "/news/report.jpg",
        type: "Company Update",
        date: "Dec 01, 2025",
        isFeatured: false
    },
    {
        slug: "new-cto",
        title: "Welcoming Dr. Arslan Ahmed as Chief Technology Officer",
        excerpt: "Former Silicon Valley architect joins the board to lead our R&D division into the next era of quantum-ready security.",
        coverImage: "/news/cto.jpg",
        type: "Executive Team",
        date: "Nov 20, 2025",
        isFeatured: false
    }
];

// =====================================================================
// 2. COMPONENTS
// =====================================================================

// HERO SECTION (Obsidian)
const NewsHero = () => (
    <section className="relative w-full py-24 bg-[#0B1221] overflow-hidden">
        {/* Background FX */}
        <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-4 text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em]"
            >
                Official Transmissions
            </motion.span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-2xl"
                >
                    Global <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Newsroom.</span>
                </motion.h1>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    className="relative w-full md:w-80 group"
                >
                    <input
                        type="text"
                        placeholder="Search announcements..."
                        className="w-full bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full focus:outline-none focus:border-[#0d938c] transition-colors placeholder:text-slate-500"
                    />
                    <Search className="absolute right-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within:text-[#0d938c] transition-colors" />
                </motion.div>
            </div>
        </div>
    </section>
);

// FEATURED NEWS CARD (Large)
const FeaturedNews = ({ news }: { news: any }) => (
    <section className="w-full -mt-10 relative z-20 px-6">
        <div className="max-w-7xl mx-auto">
            <Link href={`/newsroom/${news.slug}`}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="group relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                >
                    <Image
                        src={news.coverImage}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-[#0d938c] text-white text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-2">
                                <Megaphone className="w-3 h-3" /> {news.type}
                            </span>
                            <span className="text-slate-300 text-sm flex items-center gap-2">
                                <Calendar className="w-3 h-3" /> {news.date}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-[#0d938c] transition-colors">
                            {news.title}
                        </h2>
                        <p className="text-slate-300 text-lg max-w-2xl line-clamp-2 md:line-clamp-none mb-8">
                            {news.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-[#0d938c] w-fit pb-1">
                            Read Release <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </motion.div>
            </Link>
        </div>
    </section>
);

// STANDARD NEWS CARD
const NewsCard = ({ news, index }: { news: any, index: number }) => (
    <Link href={`/newsroom/${news.slug}`}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col h-full bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
        >
            {/* Image Header */}
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={news.coverImage}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm flex items-center gap-2">
                        {news.type === 'Award' ? <Award className="w-3 h-3" /> : <Newspaper className="w-3 h-3" />}
                        {news.type}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {news.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                    {news.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                    {news.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-end pt-4 border-t border-slate-100">
                    <ArrowRight className="w-4 h-4 text-[#0d938c] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </div>
            </div>
        </motion.div>
    </Link>
);

// MEDIA CONTACT CTA
const MediaCTA = () => (
    <section className="w-full py-20 bg-[#0B1221] mt-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <Tag className="w-8 h-8 text-[#0d938c] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Media Inquiries</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                For press kits, executive interviews, or official commentary on sovereign tech, contact our media relations office.
            </p>
            <Link href="/contact" className="inline-block bg-[#0d938c] text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-[#0B1221] transition-all">
                Contact Press Office
            </Link>
        </div>
    </section>
);

// =====================================================================
// 3. MAIN PAGE EXPORT
// =====================================================================
export default function NewsroomPage() {
    const featuredNews = NEWS_ITEMS.find(n => n.isFeatured) || NEWS_ITEMS[0];
    const regularNews = NEWS_ITEMS.filter(n => n.slug !== featuredNews.slug);

    return (
        <main className="w-full min-h-screen bg-slate-50 font-poppins-regular">

            <NewsHero />

            <FeaturedNews news={featuredNews} />

            {/* THE GRID */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-bold text-slate-900">Latest Announcements</h3>

                    {/* Simple Filter */}
                    <div className="hidden md:flex gap-2">
                        {["All", "Press Releases", "Awards", "Partnerships"].map((filter, i) => (
                            <button
                                key={i}
                                className={`px-4 py-2 text-xs font-bold uppercase rounded-full border ${i === 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-900'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularNews.map((news, idx) => (
                        <NewsCard key={news.slug} news={news} index={idx} />
                    ))}
                </div>
            </section>

            <MediaCTA />

        </main>
    );
}