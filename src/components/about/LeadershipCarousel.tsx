'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';
import Image from 'next/image';

const team = [
    {
        name: "Muhammad Ali Qamar",
        role: "Founder & CEO",
        image: "/team/MuhammadAliQamar-Chief-Executive.png"
    },
    {
        name: "Kaleem Khan",
        role: "Head - Middle East Region",
        image: "/team/KaleemKhan-Head-ME.png"
    },
    {
        name: "Nasir Iqbal",
        role: "Chief Technology Officer",
        image: "/team/NasirIqbal-CTO.png"
    },
    {
        name: "Shahzaib Irfan",
        role: "Head UK Region",
        image: "/team/ShahzaibIrfan-Head-UK.png"
    },
    {
        name: "Dr. Arham Khan",
        role: "Head of AI Engineering",
        focus: "Large Language Models & Automation",
        image: "/team/ai.jpg"
    },
    {
        name: "Michael Ross",
        role: "Lead Systems Architect",
        focus: "ERP & Enterprise Security",
        image: "/team/architect.jpg"
    },
    {
        name: "Jessica Li",
        role: "Head of Talent & Culture",
        focus: "Global Recruitment (Top 1% Talent)",
        image: "/team/talent.jpg"
    },
    {
        name: "Omar Farooq",
        role: "VP of Client Success",
        focus: "Enterprise Delivery & Retention",
        image: "/team/client.jpg"
    }
];

export default function LeadershipCarousel() {
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const [currentProgress, setCurrentProgress] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    const updateConstraints = () => {
        if (carousel.current) {
            const max = carousel.current.scrollWidth - carousel.current.offsetWidth;
            setMaxScrollWidth(max > 0 ? max : 0);
        }
    };

    useEffect(() => {
        updateConstraints();
        window.addEventListener('resize', updateConstraints);
        const timeoutId = setTimeout(updateConstraints, 200);
        return () => {
            window.removeEventListener('resize', updateConstraints);
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            if (maxScrollWidth <= 0) return;
            const progress = Math.abs(latest) / maxScrollWidth;
            setCurrentProgress(Math.min(Math.max(progress, 0), 1));
        });
        return () => unsubscribe();
    }, [maxScrollWidth, x]);

    const slide = (direction: 'left' | 'right') => {
        const currentX = x.get();
        // Reduced slide amount because the cards are now smaller
        const slideAmount = 300;
        let newX = direction === 'left' ? currentX + slideAmount : currentX - slideAmount;

        if (newX > 0) newX = 0;
        if (newX < -maxScrollWidth) newX = -maxScrollWidth;

        controls.start({ x: newX, transition: { type: "spring", stiffness: 300, damping: 30 } });
        x.set(newX);
    };

    const formatName = (fullName: string) => {
        const parts = fullName.split(' ');
        if (parts.length === 1) return <span className="text-black">{fullName}</span>;

        const lastWord = parts.pop();
        const restOfName = parts.join(' ');

        return (
            <>
                <span className="text-black">{restOfName} </span>
                <span className="text-[#0d938c]">{lastWord}</span>
            </>
        );
    };

    return (
        <section className="w-full bg-white py-24 md:py-32 font-poppins-regular border-t border-slate-100 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">

                {/* HEADER & CONTROLS */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                            Governance
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            The Architects of <br />
                            <span className="text-slate-400">Sovereignty.</span>
                        </h3>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => slide('left')}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 active:scale-95 z-10 relative"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => slide('right')}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 active:scale-95 z-10 relative"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* CAROUSEL TRACK */}
                <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden pb-8">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -maxScrollWidth }}
                        animate={controls}
                        style={{ x }}
                        className="flex gap-8 md:gap-8 w-max"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                // Width heavily reduced to make cards smaller
                                // Desktop: 22% (approx 4.5 cards), Tablet: 32vw (approx 3 cards), Mobile: 65vw
                                className="relative flex flex-col flex-shrink-0 w-[65vw] md:w-[32vw] lg:w-[22%] bg-transparent select-none"
                            >
                                {/* 1. IMAGE CONTAINER */}
                                <div className="relative w-full aspect-[4/5] bg-transparent mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        draggable={false}
                                        className="object-contain object-bottom pointer-events-none"
                                    />
                                </div>

                                {/* 2. TEXT CONTAINER */}
                                <div className="flex flex-col items-start px-2">
                                    {/* Name size reduced from text-3xl to text-xl/2xl */}
                                    <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
                                        {formatName(member.name)}
                                    </h4>

                                    {/* Role size slightly reduced */}
                                    <p className="text-xs md:text-sm text-slate-600 font-normal mb-3">
                                        {member.role}
                                    </p>

                                    <a
                                        href="#"
                                        className="text-slate-800 hover:text-[#0d938c] transition-colors duration-200"
                                        draggable={false}
                                    >
                                        <Linkedin className="w-[14px] h-[14px]" strokeWidth={2.5} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* PROGRESS BAR */}
                <div className="mt-8 w-full h-[2px] bg-slate-100 relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-[#0d938c]"
                        style={{ width: `${(currentProgress * 100)}%` }}
                        transition={{ ease: "easeOut" }}
                    />
                </div>

            </div>
        </section>
    );
}