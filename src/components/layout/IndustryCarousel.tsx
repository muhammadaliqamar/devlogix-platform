'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// DATA (Untouched)
const industries = [
    // Industrial Cluster
    { title: "Textile", category: "Industrial", solution: "Custom Solutions for smart manufacturing and real-time production monitoring.", image: "/industries/textile.jpg", link: "/industries/textile-manufacturing" },
    { title: "Energy", category: "Industrial", solution: "Grid modernization software and renewable asset telemetry systems.", image: "/industries/energy.jpg", link: "/industries/energy" },
    { title: "Manufacturing", category: "Industrial", solution: "Industry 4.0 automation and AI-driven predictive maintenance software.", image: "/industries/manufacturing.jpg", link: "/industries/manufacturing" },
    { title: "Logistics", category: "Industrial", solution: "End-to-end supply chain solutions and intelligent fleet tracking visibility.", image: "/industries/logistics.jpg", link: "/industries/supply-chain" },
    // Commercial Cluster
    { title: "Retail", category: "Commercial", solution: "Omnichannel customer analytics and AI-powered inventory management systems.", image: "/industries/retail.jpg", link: "/industries/retail" },
    { title: "Real Estate", category: "Commercial", solution: "Smart building management and predictive valuation systems.", image: "/industries/realestate.jpg", link: "/industries/realestate" },
    { title: "Telecom", category: "Commercial", solution: "5G network slicing and automated infrastructure management systems.", image: "/industries/telecom.jpg", link: "/industries/telecom" },
    { title: "SaaS", category: "Commercial", solution: "Scalable microservices architecture and cloud infrastructure optimization.", image: "/industries/saas.jpg", link: "/industries/saas" },
    // Sovereign Cluster
    { title: "Fintech", category: "Sovereign", solution: "High-frequency trading infrastructure and secure financial platforms.", image: "/industries/banking.jpg", link: "/industries/fintech" },
    { title: "GovTech", category: "Sovereign", solution: "Secure citizen data platforms and interoperable public digital services.", image: "/industries/govtech.jpg", link: "/industries/govtech" },
    { title: "Healthcare", category: "Sovereign", solution: "Telemedicine platforms and interoperable patient data systems.", image: "/industries/healthcare.jpg", link: "/industries/healthcare" },
    { title: "Legal", category: "Sovereign", solution: "AI-driven contract analysis and case management systems.", image: "/industries/legal.jpg", link: "/industries/legal" }
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
        // SEO FIX 1: Added aria-labelledby to connect the section to its semantic title
        <section aria-labelledby="industries-heading" className="w-full bg-slate-50 pt-8 pb-12 md:pt-6 md:pb-12 font-poppins-regular overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 relative">

                {/* HEADER & CONTROLS */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        {/* SEO FIX 2: Changed from <h2> to <span>. Just a visual overline. */}
                        <span className="block text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                            Verticalized Expertise
                        </span>

                        {/* SEO FIX 3: Changed from <h3> to <h2>. Added invisible core keywords. */}
                        <h2 id="industries-heading" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                            Excellence Across Sectors
                            <span className="sr-only"> - Industry-Specific Custom Software Development</span>
                        </h2>
                    </div>

                    <div className="flex gap-2 hidden md:flex">
                        {/* SEO FIX 4: Added aria-labels to interactive custom buttons */}
                        <button
                            onClick={() => slide('left')}
                            aria-label="Scroll industries left"
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0d938c] hover:border-[#0d938c] hover:bg-[#0d938c] text-[#0d938c] hover:text-white transition-all duration-300 active:scale-95"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => slide('right')}
                            aria-label="Scroll industries right"
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0d938c] hover:border-[#0d938c] hover:bg-[#0d938c] text-[#0d938c] hover:text-white transition-all duration-300 active:scale-95"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p aria-hidden="true" className="text-[10px] uppercase tracking-widest text-slate-400 self-center ml-4">
                            Drag to Explore
                        </p>
                    </div>
                </div>

                {/* CAROUSEL TRACK */}
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
                                {/* 1. BACKGROUND IMAGE */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={industry.image}
                                        // SEO FIX 5: Dynamic, long-tail alt text injection
                                        alt={`${industry.title} industry software solutions and development`}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                                </div>

                                {/* 2. DEFAULT STATE (Title) */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                                    {/* SEO FIX 6: Changed from <h4> to <h3>. This is the main title for the document outline. */}
                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:opacity-0 transition-opacity duration-300 transform translate-y-0 group-hover:-translate-y-4">
                                        {industry.title}
                                    </h3>
                                    <div className="h-[2px] w-8 bg-[#0d938c] group-hover:opacity-0 transition-opacity duration-300" />
                                </div>

                                {/* 3. THE SOVEREIGN REVEAL (Hover State) */}
                                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-center px-8 z-20">
                                    <span className="text-[#0d938c] text-xs font-bold uppercase tracking-widest mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {industry.category}
                                    </span>

                                    {/* SEO FIX 7: Changed from <h4> to <div> and added aria-hidden="true". 
                                        This stops Google from indexing the exact same heading twice, while keeping your animation identical. */}
                                    <div aria-hidden="true" className="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        {industry.title}
                                    </div>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                        {industry.solution}
                                    </p>

                                    {/* SEO FIX 8: Added highly descriptive aria-label to the Link. 
                                        "Explore Industry" is bad link context. This fixes it invisibly. */}
                                    <Link
                                        href={industry.link || '#'}
                                        aria-label={`Explore our software solutions for the ${industry.title} sector`}
                                        className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 cursor-pointer pointer-events-auto"
                                    >
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