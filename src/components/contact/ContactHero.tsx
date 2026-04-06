'use client'

import { motion } from 'framer-motion';

export default function ContactHero() {
    return (
        <section className="relative w-full h-[50vh] bg-[#0B1221] flex items-center justify-center overflow-hidden font-poppins-regular">

            {/* 1. BACKGROUND AMBIENCE (Subtle & Dark) */}
            <div className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: 'linear-gradient(#0d938c 1px, transparent 1px), linear-gradient(90deg, #0d938c 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0d938c] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

            {/* 2. TEXT CONTENT */}
            <div className="relative z-10 text-center mt-10">
                {/* <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-4 text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] border border-[#0d938c]/20 bg-[#0d938c]/5 px-4 py-2 rounded-full"
                >
                    Secure Channel
                </motion.span> */}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                >
                    Partner With <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                        DevLogix
                    </span>
                </motion.h1>
            </div>

        </section>
    );
}