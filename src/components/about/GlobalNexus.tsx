'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock } from 'lucide-react';

const locations = [
    {
        id: "PK",
        label: "Gujranwala, Pakistan",
        role: "Global Delivery Center",
        time: "UTC+5",
        coords: { top: "36%", left: "68%" },
        distinct: true // Special pulse for HQ
    },
    {
        id: "US",
        label: "New York, USA",
        role: "Americas Hub",
        time: "UTC-5",
        coords: { top: "32%", left: "29%" }
    },
    {
        id: "GB",
        label: "London, UK",
        role: "Europe Hub",
        time: "UTC+0",
        coords: { top: "26%", left: "49%" }
    },
    {
        id: "AE",
        label: "Dubai, UAE",
        role: "MEA Hub",
        time: "UTC+4",
        coords: { top: "38%", left: "62%" }
    }
];

export default function GlobalNexus() {
    return (
        <section className="w-full bg-[#050505] py-24 md:py-32 font-poppins-regular overflow-hidden relative border-t border-slate-900">

            {/* Background Grid Texture (High Tech) */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* LEFT: THE MAP VISUALIZATION */}
                    <div className="w-full lg:w-3/5 relative aspect-[16/9] bg-[#0A0A0A] rounded-xl border border-white/5 shadow-2xl overflow-hidden group">

                        {/* 1. MAP SILHOUETTE */}
                        {/* Note: Ensure you have a 'world-map-dark.svg' or similar in public/images. 
                If not, the background color serves as a placeholder canvas. */}
                        <div className="absolute inset-0 opacity-40 mix-blend-screen">
                            <Image
                                src="/images/world-map-dotted.svg" // Replace with your asset
                                alt="Global Network"
                                fill
                                className="object-contain p-8"
                            />
                        </div>

                        {/* 2. GLOWING NODES */}
                        {locations.map((loc) => (
                            <div
                                key={loc.id}
                                className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/node"
                                style={{ top: loc.coords.top, left: loc.coords.left }}
                            >
                                {/* Core Dot */}
                                <div className={`w-3 h-3 rounded-full z-20 relative ${loc.distinct ? 'bg-white' : 'bg-[#0d938c]'}`} />

                                {/* Pulse Ring 1 */}
                                <div className={`absolute top-0 left-0 w-full h-full rounded-full animate-ping opacity-75 ${loc.distinct ? 'bg-white duration-1000' : 'bg-[#0d938c] duration-[2000ms]'}`} />

                                {/* Pulse Ring 2 (Large Glow for HQ) */}
                                {loc.distinct && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white opacity-10 rounded-full blur-md" />
                                )}

                                {/* Hover Tooltip (Data Visualization Style) */}
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#0B1221] border border-[#0d938c]/30 px-3 py-2 rounded-[2px] w-max opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                                    <div className="text-[10px] font-bold text-white uppercase tracking-wider">{loc.id} • {loc.time}</div>
                                </div>
                            </div>
                        ))}

                        {/* Connecting Lines (Optional SVG Overlay for Network feel) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                            {/* Line from NY to UK */}
                            <path d="M 29% 32% Q 39% 15% 49% 26%" stroke="#0d938c" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                            {/* Line from UK to Dubai */}
                            <path d="M 49% 26% Q 55% 30% 62% 38%" stroke="#0d938c" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                            {/* Line from Dubai to PK */}
                            <path d="M 62% 38% L 68% 36%" stroke="#0d938c" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                        </svg>
                    </div>


                    {/* RIGHT: THE NARRATIVE & DATA */}
                    <div className="w-full lg:w-2/5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Tagline */}
                            <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#0d938c] animate-pulse" />
                                Operating Across 4 Time Zones
                            </h2>

                            {/* Narrative */}
                            <p className="text-xl text-slate-300 leading-relaxed font-light mb-10 border-l-2 border-[#0d938c] pl-6">
                                "Sovereignty knows no borders. From our Delivery Center in Pakistan to our strategic hubs in New York and Dubai, we operate as a single, synchronized unit. We deliver 24/7 engineering continuity to the world's most demanding enterprises."
                            </p>

                            {/* The Location List */}
                            <div className="space-y-6">
                                {locations.map((loc) => (
                                    <div key={loc.id} className="group flex items-center justify-between border-b border-white/5 pb-4 hover:border-[#0d938c]/30 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl font-bold text-slate-700 group-hover:text-white transition-colors">{loc.id}</span>
                                            <div>
                                                <h4 className="text-white text-sm font-bold">{loc.label}</h4>
                                                <p className="text-[#0d938c] text-xs uppercase tracking-wider">{loc.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                                            <Clock size={12} />
                                            {loc.time}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}