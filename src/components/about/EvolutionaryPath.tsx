'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
    {
        year: "2022",
        title: "Engineering the Core",
        narrative: "DevLogix is established in Gujranwala with a singular focus: to replace generic software outsourcing with high-fidelity engineering. We secure our first major contracts in the domestic manufacturing sector."
    },
    {
        year: "2023",
        title: "Industrial Intelligence",
        narrative: "We expand into the Textile and Energy sectors, deploying our first custom ERP architectures. The 'Sovereign' philosophy is codified—we stop building isolated apps and start building integrated ecosystems."
    },
    {
        year: "2024",
        title: "Regional Expansion",
        narrative: "Demand scales beyond Pakistan. We launch the MEA strategy, establishing our presence in the UAE to serve the growing Fintech and Logistics corridors of the Middle East."
    },
    {
        year: "2025",
        title: "500+ Systems",
        narrative: "Our engineering team doubles in size. We successfully deliver our 500th operational system. The 'Delivery Center' in Pakistan becomes a recognized hub for elite full-stack development."
    },
    {
        year: "2026",
        title: "Strategic Global Network",
        narrative: "DevLogix scales globally. Through our strategic 7-Hub network, we become the engineering partner of choice for mission-critical infrastructure across key markets."
    }
];

export default function EvolutionaryPath() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full bg-[#0A0A0A] py-24 md:py-32 font-poppins-regular overflow-hidden relative border-t border-slate-900">

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] opacity-50" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                        The Timeline
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        The Evolutionary <span className="text-slate-500">Path.</span>
                    </h3>
                </div>

                {/* --- THE INTERACTIVE HORIZON --- */}
                <div className="flex flex-col">

                    {/* 1. YEAR SELECTOR (The Line) */}
                    <div className="relative flex justify-between items-center w-full mb-16 md:mb-20">

                        {/* The Horizontal Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 -z-10" />

                        {/* The Years */}
                        {timelineData.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={item.year}
                                    onClick={() => setActiveIndex(index)}
                                    className="relative group focus:outline-none"
                                >
                                    {/* The Node Dot */}
                                    <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 transition-all duration-300 mx-auto mb-4 relative z-10 ${isActive
                                        ? 'bg-[#0A0A0A] border-[#0d938c] scale-125'
                                        : 'bg-[#0A0A0A] border-slate-700 group-hover:border-slate-500'
                                        }`}>
                                        {/* Inner Glow for Active */}
                                        {isActive && <div className="absolute inset-0 bg-[#0d938c] rounded-full opacity-40 animate-ping" />}
                                    </div>

                                    {/* The Year Text */}
                                    <span className={`text-sm md:text-xl font-bold transition-colors duration-300 ${isActive ? 'text-[#0d938c]' : 'text-slate-600 group-hover:text-slate-400'
                                        }`}>
                                        {item.year}
                                    </span>
                                </button>
                            );
                        })}
                    </div>


                    {/* 2. THE CONTENT STAGE (Animated Switcher) */}
                    <div className="relative min-h-[250px] md:min-h-[200px] flex justify-center">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex} // Triggers animation when key changes
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="max-w-3xl text-center"
                            >
                                {/* Large Background Year Number (Watermark) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-bold text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                                    {timelineData[activeIndex].year}
                                </div>

                                {/* Foreground Content */}
                                <div className="relative z-10">
                                    <h4 className="text-2xl md:text-4xl font-bold text-white mb-6">
                                        {timelineData[activeIndex].title}
                                    </h4>
                                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                                        {timelineData[activeIndex].narrative}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}