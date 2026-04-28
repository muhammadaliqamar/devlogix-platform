'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Search, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LeadCaptureCTA from '@/components/layout/LeadCaptureCTA';

// --- COMPONENTS (Moved inside) ---

const BlogHero = ({ onSearch }: { onSearch: (term: string) => void }) => (
    <section className="relative w-full py-24 bg-[#0B1221] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.1] bg-[url('/grid-pattern.svg')] bg-center" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20">
            <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-4 text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em]"
            >
                Intelligence Briefing
            </motion.span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-2xl"
                >
                    The DevLogix <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Nexus.</span>
                </motion.h1>

                {/* Functional Search Bar */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    className="relative w-full md:w-80 group"
                >
                    <input
                        type="text"
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="Search intel..."
                        className="w-full bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full focus:outline-none focus:border-[#0d938c] transition-colors placeholder:text-slate-500"
                    />
                    <Search className="absolute right-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within:text-[#0d938c] transition-colors" />
                </motion.div>
            </div>
        </div>
    </section>
);

const FeaturedPost = ({ post }: { post: any }) => (
    <section className="w-full -mt-10 relative z-20 px-6">
        <div className="w-full max-w-[1920px] mx-auto">
            <Link href={`/blog/${post.slug}`}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="group relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                >
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-[#0d938c] text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                                Featured Intel
                            </span>
                            <span className="text-slate-300 text-sm flex items-center gap-2">
                                <Calendar className="w-3 h-3" /> {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-[#0d938c] transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-slate-300 text-lg max-w-2xl line-clamp-2 md:line-clamp-none mb-8">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-[#0d938c] w-fit pb-1">
                            Read Transmission <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </motion.div>
            </Link>
        </div>
    </section>
);

const BlogCard = ({ post, index }: { post: any, index: number }) => (
    <Link href={`/blog/${post.slug}`}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col h-full bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
        >
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0d938c] transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-end pt-4 border-t border-slate-100">
                    <ArrowRight className="w-4 h-4 text-[#0d938c] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </div>
            </div>
        </motion.div>
    </Link>
);

// --- MAIN CLIENT COMPONENT ---

export default function BlogFeed({ posts }: { posts: any[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    // Logic: First post is featured, rest are grid (unless filtered)
    const allPosts = posts || [];
    const featuredPost = allPosts.find(p => p.isFeatured) || allPosts[0];

    // Filter logic
    const filteredPosts = allPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        const isNotFeatured = post.slug !== featuredPost?.slug;
        // If searching, show all matches. If not, hide featured from grid.
        return searchTerm ? matchesSearch : (matchesSearch && isNotFeatured);
    });

    return (
        <main className="w-full min-h-screen bg-slate-50 font-poppins-regular">

            <BlogHero onSearch={setSearchTerm} />

            {!searchTerm && featuredPost && <FeaturedPost post={featuredPost} />}

            {/* THE GRID */}
            <section className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20 py-20">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-bold text-slate-900">
                        {searchTerm ? `Search Results for "${searchTerm}"` : "Latest Transmissions"}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, idx) => (
                        <BlogCard key={post.slug} post={post} index={idx} />
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400">No intelligence found matching these parameters.</p>
                    </div>
                )}
            </section>

            <LeadCaptureCTA localization={{ headingText: "Join The Inner Circle.", headingHighlight: "", subheading: "Get sovereign tech analysis delivered to your secure channel." }} />

        </main>
    );
}