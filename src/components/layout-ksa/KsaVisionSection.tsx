'use client'

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, DatabaseZap, Flag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function KsaVisionSection() {
    return (
        <section className="w-full bg-slate-50 pt-24 pb-12 md:pt-16 md:pb-12 font-poppins-regular ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* COLUMN 1: THE NARRATIVE */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6">
                            محفز رؤية 2030
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
                            نبني الأساس <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-[#0a706b]">الرقمي</span> <br />
                            للمشاريع العملاقة.
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                            نحن لا نقدم مجرد برمجيات. نحن نقدم بنية تحتية هندسية سيادية. انضم إلى صفوة القطاعات في المملكة التي تعتمد على تقنياتنا لتحقيق التحول الرقمي بأمان واستدامة.
                        </p>

                        {/* Sovereign Pillars List */}
                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#0d938c]/10 flex items-center justify-center group-hover:bg-[#0d938c] transition-colors duration-300">
                                    <Flag className="w-5 h-5 text-[#0d938c] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-slate-700 font-bold">بنية تحتية متوافقة محلياً</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#0d938c]/10 flex items-center justify-center group-hover:bg-[#0d938c] transition-colors duration-300">
                                    <ShieldCheck className="w-5 h-5 text-[#0d938c] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-slate-700 font-bold">أمان بمستوى دفاعي (انعدام الثقة)</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-[#0d938c]/10 flex items-center justify-center group-hover:bg-[#0d938c] transition-colors duration-300">
                                    <DatabaseZap className="w-5 h-5 text-[#0d938c] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-slate-700 font-bold">قابلة للتوسع للمشاريع الكبرى</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-[#0d938c] hover:shadow-lg group"
                        >
                            حجز استشارة استراتيجية
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                        </Link>
                    </motion.div>

                    {/* COLUMN 2: THE VISUAL ANCHOR (Corporate Focus) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="relative h-[550px] w-full rounded-2xl overflow-hidden group shadow-2xl"
                    >
                        {/* Image Container */}
                        <div className="absolute inset-0 bg-slate-900">
                            {/* B2B Vision Image Focus */}
                            <Image
                                src="/team.jpg" 
                                alt="Saudi Vision 2030 Catalyst"
                                fill
                                className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                            />

                            {/* Deep Tech Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent" />
                        </div>

                        {/* Floating Enterprise Badge */}
                        <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-2xl">
                            <div className="flex items-center gap-4">
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-full h-full rounded-full bg-[#0d938c] animate-ping opacity-20"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#0d938c]"></div>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-white uppercase tracking-widest block mb-1">
                                        شراكات حصرية
                                    </span>
                                    <span className="text-slate-300 text-[10px]">نقوم بتمكين نخبة المؤسسات</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
