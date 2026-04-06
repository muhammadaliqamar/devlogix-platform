'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        // CHANGE 1: min-h-screen instead of h-screen (allows scrolling if content is tall)
        // CHANGE 2: flex flex-col (creates a vertical stack layout)
        <section className="relative min-h-screen w-full overflow-hidden bg-black font-poppins-regular flex flex-col">
            {/* 1. VISUAL FOUNDATION (Video Background) */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                </video>

                {/* The "Readability" Layers */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
            </div>

            {/* 2. THE MESSAGE (Typography & Buttons) */}
            {/* flex-grow ensures this takes up all available space, pushing the Trust Bar down */}
            <div className="relative z-30 flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-18">

                {/* Animated Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl md:text-7xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-6xl leading-tight text-balance"
                >
                    تشكيل الآفاق الرقمية في المملكة العربية السعودية
                </motion.h1>

                {/* Sub-Headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mt-0 leading-relaxed font-light text-balance"
                >
                    نقدم حلولاً تكنولوجية تحويلية ترتقي بالأعمال عبر مختلف الصناعات والحدود
                </motion.p>

                {/* CTA COMPONENT ENGINEERING */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 relative z-30">

                    {/* Primary: Enterprise Glass */}
                    <Link
                        href="/contact"
                        className="px-10 py-4 backdrop-blur-[10px] bg-white/5 border border-white/20 text-white font-medium text-lg rounded-[4px] 
               transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
               hover:bg-[#0d938c] hover:border-[#0d938c] hover:shadow-[0_0_40px_rgba(13,147,140,0.3)]
               flex items-center justify-center gap-3 group"
                    >
                        كن شريكاً لنا
                        <ArrowRight className="w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Link>

                    {/* Secondary: High-Authority Ghost */}
                    {/* <Link
                        href="/case-studies"
                        className="px-10 py-4 bg-transparent border-[1.5px] border-white/40 text-white font-medium text-lg rounded-[4px] 
               transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
               hover:bg-white/5 backdrop-blur-sm
               flex items-center justify-center"
                    >
                        View Case Studies
                    </Link> */}
                </div>

            </div>


        </section >
    );
}