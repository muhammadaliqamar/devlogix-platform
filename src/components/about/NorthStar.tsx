'use client'

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function NorthStar() {
    return (
        <section className="w-full bg-white pt-20 pb-12 md:pt-16 md:pb-20 font-poppins-regular border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* THE SLEEK SPLIT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    {/* COLUMN 1: OUR MISSION (The Engine) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="relative flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 pb-12 md:pb-0 md:pr-12"
                    >
                        {/* Visual Accent: Faded Teal Watermark */}
                        <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 opacity-[0.05]">
                            <Quote size={120} className="text-[#0d938c] fill-current" />
                        </div>

                        <h3 className="relative z-10 text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6">
                            Our Mission
                        </h3>

                        <p className="relative z-10 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                            To build <span className="text-[#0d938c]">intelligent digital systems</span> by combining creative ideas with expert engineering to help businesses grow steadily and forever.
                        </p>

                        <p className="relative z-10 mt-6 text-slate-500 text-lg leading-relaxed">
                            We exist to give industries the tools they need to own their data, secure their future, and scale without limits.
                        </p>
                    </motion.div>


                    {/* COLUMN 2: OUR VISION (The Horizon) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="relative flex flex-col justify-center md:pl-8 lg:pl-12"
                    >
                        {/* Visual Accent: Abstract Circle Watermark */}
                        <div className="absolute top-10 right-10 w-32 h-32 bg-[#0d938c] opacity-[0.03] rounded-full blur-2xl" />

                        <h3 className="relative z-10 text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">
                            Our Vision
                        </h3>

                        <p className="relative z-10 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                            To set a global standard for <span className="text-slate-400">smart technology</span> that provides a solid foundation for businesses to grow without limits and last for generations.
                        </p>

                        <p className="relative z-10 mt-6 text-slate-500 text-lg leading-relaxed">
                            We are building a future where technology is an asset you own, not a service you rent.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}