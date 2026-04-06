'use client'

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EnterprisePartnership() {
    return (
        <section className="w-full bg-slate-50 pt-24 pb-12 md:pt-16 md:pb-12 font-poppins-regular ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6">
                            Strategic LATAM Partnerships
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Co-innovating with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-[#0a706b]">Latin America&apos;s Tech Elite</span>
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                            We partner with enterprise leaders from Brazil to Chile to construct massive, highly available platforms capable of meeting the continent&apos;s accelerating digital demands.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Localized Ecosystem Integration",
                                "Rapid Agile Scaling Modules",
                                "Pan-American Engineering Pods",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#0d938c]" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-[4px] font-semibold transition-all duration-300 hover:bg-[#0d938c] hover:shadow-lg group"
                        >
                            Discuss Your Project
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="relative h-[500px] w-full rounded-xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-slate-200">
                            <Image
                                src="/team.jpg"
                                alt="South American Tech Delivery Team"
                                fill
                                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-300 to-slate-400" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
