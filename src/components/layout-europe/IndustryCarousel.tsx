'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const industries = [
    { title: "Fintech & Banking", category: "High-Value", solution: "Open banking APIs & secure payment gateways for UK/EU compliance.", image: "/industries/banking.jpg", link: "/industries/fintech" },
    { title: "Automotive", category: "Industrial", solution: "Industry 4.0 & connected vehicle infrastructure.", image: "/industries/manufacturing.jpg", link: "/industries/manufacturing" },
    { title: "GovTech", category: "Sovereign", solution: "Citizen data platforms & secure public digital services adhering to GDPR.", image: "/industries/govtech.jpg", link: "/industries/govtech" },
    { title: "Cleantech & Energy", category: "Industrial", solution: "Grid modernization & renewable asset telemetry.", image: "/industries/energy.jpg", link: "/industries/energy" },
    { title: "Retail", category: "Commercial", solution: "Omnichannel customer analytics & inventory AI for European markets.", image: "/industries/retail.jpg", link: "/industries/retail" },
    { title: "Healthcare", category: "Sovereign", solution: "Telemedicine platforms & highly secure interoperable patient data.", image: "/industries/healthcare.jpg", link: "/industries/healthcare" },
    { title: "Telecom", category: "Commercial", solution: "5G network slicing & automated infrastructure.", image: "/industries/telecom.jpg", link: "/industries/telecom" },
    { title: "Logistics", category: "Industrial", solution: "End-to-end cross-border supply chain visibility.", image: "/industries/logistics.jpg", link: "/industries/supplychain" }
];

export default function IndustryCarousel() {
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    useEffect(() => {
        if (carousel.current) {
            setMaxScrollWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    const slide = (direction: 'left' | 'right') => {
        const currentX = x.get();
        const slideAmount = 350;
        let newX = direction === 'left' ? currentX + slideAmount : currentX - slideAmount;

        if (newX > 0) newX = 0;
        if (newX < -maxScrollWidth) newX = -maxScrollWidth;

        controls.start({
            x: newX,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        });
        x.set(newX);
    };

    return (
        <section className="w-full bg-slate-50 pt-8 pb-12 md:pt-8 md:pb-12 font-poppins-regular overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                            European Industry Focus
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                            Excellence Across Regional Sectors
                        </h3>
                    </div>
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

                <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-visible">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -maxScrollWidth }}
                        whileTap={{ cursor: "grabbing" }}
                        animate={controls}
                        style={{ x }}
                        className="flex gap-6"
                    >
                        {industries.map((industry) => (
                            <motion.div
                                key={industry.title}
                                className="relative flex-shrink-0 bg-black rounded-xl overflow-hidden group border border-[#0d938c] w-[85vw] md:w-[42vw] lg:w-[22vw] h-[400px]"
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={industry.image}
                                        alt={industry.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                                </div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                                    <h4 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:opacity-0 transition-opacity duration-300 transform translate-y-0 group-hover:-translate-y-4">
                                        {industry.title}
                                    </h4>
                                    <div className="h-[2px] w-8 bg-[#0d938c] group-hover:opacity-0 transition-opacity duration-300" />
                                </div>
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
