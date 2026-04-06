'use client'

import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';

const standards = [
    {
        title: "Sovereignty First",
        concept: "Ownership",
        icon: ShieldCheck,
        copy: "We reject the 'black box' model. We believe true power lies in ownership. We architect systems that give you total control over your data, your infrastructure, and your roadmap. We build assets, not dependencies."
    },
    {
        title: "Engineering over Coding",
        concept: "Depth",
        icon: Cpu,
        copy: "Code is cheap; architecture is priceless. We don't just write functions; we design resilient ecosystems capable of handling global scale. Every line is written with the next five years in mind, not just the next launch."
    },
    {
        title: "Speed through Intelligence",
        concept: "Modernity",
        icon: Zap,
        copy: "In the era of AI, speed is a survival metric. We leverage advanced automation and generative models to deploy battle-tested infrastructure faster than the market standard, without sacrificing precision."
    }
];

export default function DevLogixStandard() {
    return (
        <section className="w-full bg-white py-24 md:pt-24 md:pb-18 font-poppins-regular border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADLINE */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 border border-[#0d938c]/20 bg-[#0d938c]/5 rounded-full text-[10px] font-bold text-[#0d938c] uppercase tracking-[0.2em]"
                    >
                        DevLogix Standard
                    </motion.span>
                </div>

                {/* 3-COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {standards.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* ICON ARCHITECTURE */}
                            <div className="mb-8 relative">
                                {/* Outer Ring */}
                                <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0d938c] transition-colors duration-500">
                                    <item.icon strokeWidth={1.5} className="w-7 h-7 text-slate-400 group-hover:text-[#0d938c] transition-colors duration-500" />
                                </div>
                                {/* Subtle Glow on Hover */}
                                <div className="absolute inset-0 bg-[#0d938c] opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-500" />
                            </div>

                            {/* HEADLINE */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#0d938c] transition-colors duration-300">
                                {item.title}
                            </h3>

                            {/* CONCEPT TAG */}
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                                [{item.concept}]
                            </span>

                            {/* BODY COPY */}
                            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                                {item.copy}
                            </p>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}