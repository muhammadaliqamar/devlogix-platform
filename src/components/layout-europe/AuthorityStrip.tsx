'use client'

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const stats = [
    { label: 'Industries Verticalized', value: 12, suffix: '' },
    { label: 'European Hubs (London - Frankfurt - Paris - Dublin)', value: 4, suffix: '' },
    { label: 'Enterprise Systems Integrated', value: 300, suffix: '+' },
    { label: 'GDPR Compliant Systems', value: 100, suffix: '%' },
];

function Counter({ value }: { value: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            animate(motionValue, value, {
                duration: 2.5,
                ease: [0.4, 0, 0.2, 1],
            });
        }
    }, [isInView, value, motionValue]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function AuthorityStrip() {
    return (
        <div className="relative w-full bg-white font-poppins-regular">
            <div className="relative h-0 w-full z-1 px-6">
                <div className="max-w-7xl mx-auto -translate-y-6">
                    <div className="bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-[4px] overflow-hidden backdrop-blur-md">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 py-4 md:py-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.0,
                                        delay: index * 0.1,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                    className="flex flex-col items-center justify-center text-center px-4 group"
                                >
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-6xl font-bold text-[#0d938c] tracking-tighter">
                                            <Counter value={stat.value} />
                                        </span>
                                        <span className="text-xl font-semibold text-slate-300">
                                            {stat.suffix}
                                        </span>
                                    </div>
                                    <p className="mt-3 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.25em] leading-tight">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-24 md:h-40" />
        </div>
    );
}
