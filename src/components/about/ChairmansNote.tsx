'use client'

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export default function ChairmansNote() {
    return (
        // SEO FIX 1: Identified the section and added an aria-label
        <section aria-label="Founder's Message" className="w-full bg-[#0B1221] pt-24 pb-12 md:pt-12 md:pb-18 font-poppins-regular border-t border-slate-800">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* COLUMN 1: THE PORTRAIT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                            <Image
                                src="/team/MuhammadAliQamar-Chief-Executive.png"
                                // SEO FIX 2: Enhanced alt text for brand association
                                alt="Muhammad Ali Qamar, Founder and Chief Executive Officer of DevLogix"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="w-full h-full bg-gradient-to-tr from-[#0d938c] to-slate-700" />
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-[#0d938c] p-6 rounded-sm shadow-xl hidden md:block">
                            <Quote aria-hidden="true" className="w-8 h-8 text-white fill-current" />
                        </div>
                    </motion.div>


                    {/* COLUMN 2: THE MESSAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        {/* SEO FIX 3: Demoted kicker from <h4> to <span> */}
                        <span className="block text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6">
                            From The Desk of The Founder
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Technology is not just a tool. <br />
                            <span className="text-slate-500">It is your sovereignty.</span>
                        </h2>

                        {/* SEO FIX 4: Wrapped in <blockquote aria-label="Founder Note"> for semantic meaning */}
                        <blockquote className="space-y-6 text-lg text-slate-400 leading-relaxed">
                            <p>
                                When we laid the foundation for DevLogix, the goal was never just to write code. The world has enough software companies. What the global market lacked was a partner who understood <span className="text-white font-semibold">ownership</span>.
                            </p>

                            <p>
                                In today's economy, if you do not own your digital infrastructure, you do not own your future.
                            </p>

                            <p>
                                We built this institution to serve leaders who refuse to compromise. Whether we are automating a textile floor in Punjab or architecting a fintech engine for Dubai, our standard remains the same: We build systems that give you absolute control.
                            </p>
                        </blockquote>

                        <div className="mt-12 flex items-center gap-6 pt-8 border-t border-slate-800">
                            <div className="flex flex-col">
                                {/* SEO FIX 5: Added an <h3> for the name to give it semantic weight for bio-searches */}
                                <h3 className="text-3xl text-white font-bold italic tracking-tighter mb-1">
                                    Muhammad Ali Qamar
                                </h3>
                                <span className="text-xs text-[#0d938c] font-bold uppercase tracking-widest">
                                    Founder & Chief Executive Officer
                                </span>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}