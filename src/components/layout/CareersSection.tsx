'use client'

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CareersSection() {
    return (
        // SEO FIX 1: Linked the section to the main heading for accessibility/crawlers
        <section aria-labelledby="careers-heading" className="w-full bg-slate-50 pt-24 pb-12 md:pt-16 md:pb-12 font-poppins-regular ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* COLUMN 1: THE NARRATIVE */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* SEO FIX 2: Changed from <h2> to <span>. Kickers are not document headings. */}
                        <span className="block text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6">
                            Join The Team
                        </span>

                        {/* SEO FIX 3: Changed from <h3> to <h2>. Added ID. Appended invisible, high-intent keywords. */}
                        <h2 id="careers-heading" className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Where the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-[#0a706b]">Top 1%</span> <br />
                            Build the Future.
                            <span className="sr-only"> - Software Engineering & AI Development Careers at DevLogix</span>
                        </h2>

                        <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                            We do not offer "jobs." We offer missions. Join a sovereign engineering team building the digital future for the world's most demanding industries.
                        </p>

                        {/* Cultural Pillars List */}
                        <div className="space-y-4 mb-10">
                            {[
                                "Deep Work Culture",
                                "Global Reach",
                                "Rapid Innovation Cycles",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#0d938c]" />
                                    {/* SEO FIX 4: Changed from <span> to <h3> for list items to give them slight semantic weight, though styling remains identical. */}
                                    <h3 className="text-slate-700 font-medium text-base m-0">{item}</h3>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        {/* <Link
                            href="/careers"
                            // SEO Note: If you uncomment this, "Explore Open Roles" is good link text. 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-[4px] font-semibold transition-all duration-300 hover:bg-[#0d938c] hover:shadow-lg group"
                        >
                            Explore Open Roles
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link> */}
                    </motion.div>

                    {/* COLUMN 2: THE VISUAL ANCHOR */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="relative h-[500px] w-full rounded-xl overflow-hidden group"
                    >
                        {/* Image Container */}
                        <div className="absolute inset-0 bg-slate-200">
                            <Image
                                src="/team.jpg"
                                // SEO FIX 5: Highly descriptive alt text targeting culture and engineering keywords
                                alt="DevLogix software engineering team collaborating on enterprise development projects in the office"
                                fill
                                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-300 to-slate-400" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

                        {/* Floating Badge (Institutional Detail) */}
                        {/* <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                                    Hiring Now: Senior AI Architect
                                </span>
                            </div>
                        </div> */}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}