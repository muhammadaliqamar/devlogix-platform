'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MoveRight, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const capabilities = [
    { title: "Mobile-First Architectures", description: "Design fast, ultra-responsive native Android and iOS applications tailored for the mobile-heavy LATAM user base.", image: "/services/mobileapp.jpg" },
    { title: "FinTech & Payment Gateways", description: "Engineer secure, reliable, and instantaneous digital payment solutions and neo-banking platforms.", image: "/services/blockchain.jpg" },
    { title: "Custom Enterprise ERP", description: "Centralize your operations, supply chain, and finances into one hyper-localized management system.", image: "/services/erp.jpg" },
    { title: "Supply Chain & Fleet Tracking", description: "Implement real-time logistical software to tackle the continent's distinct geographic challenges.", image: "/services/dataanalytics.jpg" },
    { title: "High-Volume E-Commerce", description: "Build scalable marketplaces capable of processing massive concurrent traffic during major retail events.", image: "/services/fullstack.jpg" },
    { title: "AI & Machine Learning", description: "Automate complex decisions with predictive modeling built specifically for your enterprise data.", image: "/services/ai.jpg" },
    { title: "AWS/Azure Cloud Scaling", description: "Deploy localized cloud infrastructure that guarantees high availability and regulatory compliance.", image: "/services/cloud.jpg" },
    { title: "Agile IT Staff Augmentation", description: "Expand your engineering pods instantly with our highly skilled, culturally aligned tech teams.", image: "/services/staff.jpg" },
    { title: "Enterprise Security", description: "Protect your infrastructure from emerging threats with zero-trust architectures.", image: "/services/cyber.jpg" },
    { title: "Custom Software Engineering", description: "Develop bespoke workflows and systems that off-the-shelf software simply cannot support.", image: "/services/customsoftware.jpg" },
    { title: "Strategic Tech Advisory", description: "Align your technology roadmap with bold regional expansion plans to dominate the market.", image: "/services/advisory.jpeg" },
    { title: "Product Design & UX", description: "Craft highly intuitive, accessible interfaces that reduce friction and drive user retention.", image: "/services/uiux.jpg" }
];

const CapabilityCard = ({ item, index }: { item: any, index: number }) => (
    <div className="group relative flex flex-col h-[320px] rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500 cursor-pointer">
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
                Explore Solution <MoveRight className="w-3 h-3 text-[#0d938c]" />
            </div>
        </div>
    </div>
);

export default function CapabilitiesMatrix() {
    const [isExpanded, setIsExpanded] = useState(false);
    const initialItems = capabilities.slice(0, 4);
    const hiddenItems = capabilities.slice(4);

    return (
        <section className="w-full bg-white pt-10 pb-12 md:pt-1 md:pb-12 font-poppins-regular">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                        South American Digital Capabilities
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-[#0a706b]">
                                Rapid Scale.
                            </span>
                        </h3>
                        <p className="text-slate-500 max-w-md text-sm leading-relaxed">
                            From high-volume FinTech transactions to end-to-end logistics platforms, we engineer scalable systems tailored to Latin America&apos;s rapid digitalization.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {initialItems.map((item, index) => (
                        <CapabilityCard key={item.title} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={false}
                    animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                        {hiddenItems.map((item, index) => (
                            <CapabilityCard key={item.title} item={item} index={index + 4} />
                        ))}
                    </div>
                </motion.div>

                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm hover:shadow-md"
                    >
                        {isExpanded ? (
                            <>
                                View Less
                                <div className="p-1 rounded-full bg-slate-50 group-hover:bg-[#0d938c] transition-colors">
                                    <ArrowUp className="w-3 h-3 text-slate-500 group-hover:text-white" />
                                </div>
                            </>
                        ) : (
                            <>
                                Explore All Capabilities
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
