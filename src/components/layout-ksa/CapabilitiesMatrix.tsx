'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MoveRight, ArrowUp } from 'lucide-react';
import Image from 'next/image';

// DATA
const capabilities = [
    { title: "الذكاء الاصطناعي وتعلم الآلة", description: "أتمتة القرارات المعقدة من خلال نماذج مخصصة مبنية لبياناتك التشغيلية المحددة.", image: "/services/ai.jpg" },
    { title: "الأمن السيبراني", description: "حماية بنيتك التحتية الحرجة وأصول بياناتك بهيكليات أمنية تعتمد مبدأ انعدام الثقة.", image: "/services/cyber.jpg" },
    { title: "بنية السحابة والتطوير", description: "نشر بنية تحتية سيادية قابلة للتوسع بمعدلات توافر عالية.", image: "/services/cloud.jpg" },
    { title: "تحليلات البيانات الضخمة", description: "تحويل البيانات التشغيلية الخام إلى استخبارات أعمال حية لدعم الرؤية.", image: "/services/dataanalytics.jpg" },
    { title: "أنظمة برمجية مخصصة", description: "بناء منصات سيادية لحل أعقد المشاكل التشغيلية الحكومية والمؤسسية.", image: "/services/customsoftware.jpg" },
    { title: "الاستشارات التقنية الاستراتيجية", description: "توجيه خارطة الطريق للتحول الرقمي لضمان كفاءة البنية التحتية.", image: "/services/advisory.jpeg" }
];

// REUSABLE CARD COMPONENT (To keep the main logic clean)
const CapabilityCard = ({ item, index }: { item: any, index: number }) => (
    <div className="group relative flex flex-col h-[320px] rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500 cursor-pointer">
        {/* IMAGE */}
        <div className="relative h-[45%] w-full bg-slate-50 overflow-hidden">
            <div className="absolute inset-0 bg-slate-200">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between p-6 h-[55%]">
            <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0d938c] transition-colors">
                    {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mt-auto opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                اكتشف الحل <MoveRight className="w-3 h-3 text-[#0d938c] rtl:rotate-180" />
            </div>
        </div>
    </div>
);

export default function CapabilitiesMatrix() {
    const [isExpanded, setIsExpanded] = useState(false);

    // STATIC SPLIT: Top 4 are always there. The rest wait in the hidden div.
    const initialItems = capabilities.slice(0, 3);
    const hiddenItems = capabilities.slice(3);

    return (
        <section className="w-full bg-white pt-10 pb-12 md:pt-1 md:pb-12 font-poppins-regular">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-16 md:mb-24">
                    <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                        خبراتنا
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl">
                            إعادة تعريف <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-[#0a706b]">
                                التميز الرقمي.
                            </span>
                        </h3>
                        <p className="text-slate-500 max-w-md text-sm leading-relaxed">
                            من منصات الشركات الكبرى إلى أنظمة الأتمتة، نصمم الحلول التي تقود للتميز التشغيلي.
                        </p>
                    </div>
                </div>

                {/* --- GRID PART 1: THE ANCHORS (Always Visible, No Animation) --- */}
                {/* This grid never re-renders, preventing layout thrashing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {initialItems.map((item, index) => (
                        <CapabilityCard key={item.title} item={item} index={index} />
                    ))}
                </div>

                {/* --- GRID PART 2: THE EXPANSION (Animated Height) --- */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth "Apple-like" ease
                    className="overflow-hidden"
                >
                    {/* Inner container needs padding-top to simulate the Grid Gap between the two sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                        {hiddenItems.map((item, index) => (
                            <CapabilityCard key={item.title} item={item} index={index + 3} />
                        ))}
                    </div>
                </motion.div>

                {/* BUTTON */}
                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm hover:shadow-md"
                    >
                        {isExpanded ? (
                            <>
                                عرض أقل
                                <div className="p-1 rounded-full bg-slate-50 group-hover:bg-[#0d938c] transition-colors">
                                    <ArrowUp className="w-3 h-3 text-slate-500 group-hover:text-white" />
                                </div>
                            </>
                        ) : (
                            <>
                                تصفح جميع القدرات
                                <div className="p-1 rounded-full bg-slate-50 group-hover:bg-[#0d938c] transition-colors">
                                    <ArrowDown className="w-3 h-3 text-slate-500 group-hover:text-white" />
                                </div>
                            </>
                        )}
                    </button>
                </div>

            </div>
        </section>
    );
}