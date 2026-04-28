'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// THE 12 VERTICALS — Ordered for GCC & Africa regional relevance
const industries = [
    // Sovereign Cluster
    { title: "GovTech", category: "Sovereign", solution: "Smart-city citizen portals and e-governance platforms for GCC national agendas.", image: "/industries/govtech.png", link: "/industries/govtech" },
    { title: "Fintech", category: "Sovereign", solution: "DFSA and CBN-compliant mobile-money and cross-border payment platforms.", image: "/industries/banking.jpg", link: "/industries/fintech" },
    { title: "Healthcare", category: "Sovereign", solution: "NABIDH and NHIA-aligned telemedicine and interoperable patient data systems.", image: "/industries/healthcare.jpg", link: "/industries/healthcare" },
    { title: "Legal", category: "Sovereign", solution: "AI-powered contract analysis built for DIFC, ADGM, and African arbitration law.", image: "/industries/legal.jpg", link: "/industries/legal" },
    // Industrial Cluster
    { title: "Energy & Oil", category: "Industrial", solution: "Oilfield IoT telemetry, DEWA grid analytics, and African renewable platforms.", image: "/industries/energy.jpg", link: "/industries/energy" },
    { title: "Real Estate", category: "Commercial", solution: "Proptech platforms for Dubai Land Dept. compliance and African housing markets.", image: "/industries/realestate.jpg", link: "/industries/realestate" },
    { title: "Logistics", category: "Industrial", solution: "Cross-border fleet tracking and Jebel Ali–Mombasa supply chain digitization.", image: "/industries/logistics.jpg", link: "/industries/supplychain" },
    { title: "Manufacturing", category: "Industrial", solution: "Industry 4.0 automation aligned with UAE Make It and AfCFTA trade readiness.", image: "/industries/manufacturing.jpg", link: "/industries/manufacturing" },
    // Commercial Cluster
    { title: "Telecom", category: "Commercial", solution: "5G network slicing and TRA/NCC-compliant infrastructure management systems.", image: "/industries/telecom.jpg", link: "/industries/telecom" },
    { title: "Retail", category: "Commercial", solution: "Omnichannel commerce platforms localized for GCC VAT and African mobile wallets.", image: "/industries/retail.jpg", link: "/industries/retail" },
    { title: "SaaS", category: "Commercial", solution: "Multi-tenant SaaS on GCC-sovereign cloud with Africa CDN edge optimization.", image: "/industries/saas.jpg", link: "/industries/saas" },
    { title: "Textile", category: "Industrial", solution: "Smart-factory production monitoring for MENA garment exports and African cotton.", image: "/industries/textile.jpg", link: "/industries/textile-manufacturing" }
];

export default function IndustryCarousel() {
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    // Calculate constraints on mount/resize
    useEffect(() => {
        if (carousel.current) {
            // Logic: ScrollWidth (Total Content) - OffsetWidth (Visible Viewport)
            setMaxScrollWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    // BUTTON LOGIC: SLIDE LEFT/RIGHT
    const slide = (direction: 'left' | 'right') => {
        // 1. Get current position
        const currentX = x.get();

        // 2. Determine slide distance (Roughly one card width + gap)
        // Desktop: 22vw (~300-400px), Mobile: 85vw
        // We use a safe static estimate or dynamic measure. 
        // For smoothness, we'll assume a standard 'jump' of 350px.
        const slideAmount = 350;

        // 3. Calculate new position
        let newX = direction === 'left'
            ? currentX + slideAmount  // Moving Left means increasing X (towards 0)
            : currentX - slideAmount; // Moving Right means decreasing X (towards negative)

        // 4. Clamp the values so we don't scroll into empty space
        // Max Right (Start): 0
        // Max Left (End): -maxScrollWidth
        if (newX > 0) newX = 0;
        if (newX < -maxScrollWidth) newX = -maxScrollWidth;

        // 5. Animate to the new position
        controls.start({
            x: newX,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        });

        // 6. Update the MotionValue state so dragging resumes correctly
        x.set(newX);
    };

    return (
        <section className="w-full bg-slate-50 pt-8 pb-12 md:pt-8 md:pb-12 font-poppins-regular overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20 relative">

                {/* HEADER & CONTROLS */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                            Verticalized Expertise
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                            Excellence Across Sectors
                        </h3>
                    </div>

                    {/* Minimalist Navigation Arrows */}
                    <div className="flex gap-2 hidden md:flex">
                        <button
                            onClick={() => slide('left')}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0d938c] hover:border-[#0d938c] hover:bg-[#0d938c] text-[#0d938c] hover:text-white transition-all duration-300 active:scale-95"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => slide('right')}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0d938c] hover:border-[#0d938c] hover:bg-[#0d938c] text-[#0d938c] hover:text-white transition-all duration-300 active:scale-95"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 self-center ml-4">
                            Drag to Explore
                        </p>
                    </div>
                </div>

                {/* CAROUSEL TRACK */}
                <motion.div
                    ref={carousel}
                    className="cursor-grab active:cursor-grabbing overflow-visible"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -maxScrollWidth }}
                        whileTap={{ cursor: "grabbing" }}
                        animate={controls} // Connects the animation controls to the div
                        style={{ x }} // Connects the MotionValue (keeps drag & click in sync)
                        className="flex gap-6"
                    >
                        {industries.map((industry) => (
                            <motion.div
                                key={industry.title}
                                // WIDTH LOGIC FOR PEEKING:
                                // Mobile: w-[85vw] (Shows 1 card + 15% of next)
                                // Tablet: w-[42vw] (Shows 2 cards + space)
                                // Desktop: w-[22vw] (Shows 4 cards + 15% of 5th)
                                className="relative flex-shrink-0 bg-black rounded-xl overflow-hidden group border border-[#0d938c] w-[85vw] md:w-[42vw] lg:w-[22vw] h-[400px]"
                            >
                                {/* 1. BACKGROUND IMAGE (ENABLED) */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={industry.image}
                                        alt={industry.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                    />
                                    {/* Base Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                                </div>

                                {/* 2. DEFAULT STATE (Title) */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                                    <h4 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:opacity-0 transition-opacity duration-300 transform translate-y-0 group-hover:-translate-y-4">
                                        {industry.title}
                                    </h4>
                                    <div className="h-[2px] w-8 bg-[#0d938c] group-hover:opacity-0 transition-opacity duration-300" />
                                </div>

                                {/* 3. THE SOVEREIGN REVEAL (Hover State) */}
                                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-center px-8 z-20">
                                    <span className="text-[#0d938c] text-xs font-bold uppercase tracking-widest mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {industry.category}
                                    </span>
                                    <h4 className="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        {industry.title}
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                        {industry.solution}
                                    </p>
                                    <Link href={industry.link || '#'} className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 cursor-pointer pointer-events-auto">
                                        Explore Industry <MoveRight className="w-4 h-4 text-[#0d938c]" />
                                    </Link>
                                </div>

                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}