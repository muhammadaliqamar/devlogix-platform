'use client'

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Reuse Global CTA
import CTASection from '@/components/layout/CTASection';

// REUSABLE CARD
const CinematicCard = ({ title, desc, image, index }: { title: string, desc?: string, image: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative h-[400px] w-full rounded-xl overflow-hidden cursor-pointer"
    >
        <div className="absolute inset-0">
            <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            {desc && <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">{desc}</p>}
            <div className="w-12 h-1 bg-[#0d938c] mt-4 rounded-full" />
        </div>
    </motion.div>
);

export default function IndustryContent({ data }: { data: any }) {
    if (!data) return notFound();

    return (
        <main className="w-full min-h-screen bg-white font-poppins-regular">

            {/* 1. HERO */}
            <section className="relative w-full  bg-[#0B1221] flex items-center justify-center overflow-hidden pt-20 pb-20">
                <div className="absolute inset-0 opacity-[0.1] bg-center" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0d938c] opacity-[0.05] blur-[150px] rounded-full" />
                <div className="relative z-10 text-center max-w-6xl px-6">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 mt-20">
                        {data.hero.subtitle}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-8xl mx-auto">
                        {data.hero.description}
                    </motion.p>
                </div>
            </section>

            {/* 2. OVERVIEW */}
            <section className="w-full bg-white pt-10 pb-10 md:pt-24 md:pb-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{data.overview.heading}</h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8 border-l-4 border-[#0d938c] pl-6">
                            {data.overview.content}
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[400px] w-full bg-slate-100 rounded-xl overflow-hidden shadow-2xl">
                        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300" />
                        {data.overview.image && (
                            <Image
                                src={data.overview.image}
                                alt={data.overview.heading}
                                fill
                                className="object-cover"
                            />
                        )}
                    </motion.div>
                </div>
            </section>

            {/* 3. NEW SECTION: STRATEGIC SHIFT (Below Split) */}
            <section className="w-full bg-slate-50 py-16 mb-10 ">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">Strategic Impact</h3>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{data.strategicShift.heading}</h2>
                    <p className="text-slate-500 leading-relaxed mb-10">{data.strategicShift.description}</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {data.strategicShift.points.map((point: string, i: number) => (
                            <span key={i} className="px-6 py-3 bg-white rounded-full text-sm font-bold text-slate-700 shadow-sm border border-slate-100 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#0d938c] rounded-full" /> {point}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. EXPERTISE (Was SubServices) */}
            <section className="w-full bg-[#0B1221] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <h3 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">Domain Expertise</h3>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">360-Degree Solutions</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.expertise.map((item: any, idx: number) => (
                            <CinematicCard key={idx} title={item.title} desc={item.desc} image={item.image} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TECHNOLOGIES (Was Industries) */}
            <section className="w-full bg-[#050505] py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <h3 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">Enabling Tech</h3>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Powered By</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.technologies.map((tech: any, idx: number) => (
                            <CinematicCard key={idx} title={tech.title} desc={tech.desc} image={tech.image} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. DYNAMIC CTA */}
            {/* <CTASection
                title={`Ready to Revolutionize ${data.hero.title}?`}
                subtitle="The market is moving. Position your organization at the forefront of the shift."
            /> */}

        </main>
    );
}