'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MoveRight, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const capabilities = [
    { title: "Advanced AI & Machine Learning", description: "Automate complex decisions with predictive modeling and generative AI built specifically for your enterprise data.", image: "/services/ai.jpg" },
    { title: "High-Performance SaaS Engineering", description: "Engineer robust, scalable platforms capable of handling massive Coast-to-Coast traffic loads.", image: "/services/fullstack.jpg" },
    { title: "Mobile App Development", description: "Create native iOS and Android experiences that keep your users connected anywhere.", image: "/services/mobileapp.jpg" },
    { title: "Timezone-Aligned IT Staff Augmentation", description: "Scale your internal engineering capacity instantly with our vetted nearshore-equivalent developers.", image: "/services/staff.jpg" },
    { title: "Enterprise ERP Solutions", description: "Centralize your finance, supply chain, and operations into one unified management system.", image: "/services/erp.jpg" },
    { title: "FinTech & Secure Transactions", description: "Implement secure platforms for high-frequency trading and massive financial volumes.", image: "/services/blockchain.jpg" },
    { title: "AWS/Azure Enterprise Cloud", description: "Deploy scalable infrastructure that guarantees extreme high availability and fault tolerance.", image: "/services/cloud.jpg" },
    { title: "Custom Software Development", description: "Build tailored software solutions that solve specific problems off-the-shelf products cannot.", image: "/services/customsoftware.jpg" },
    { title: "Security & Compliance (SOC2 / HIPAA)", description: "Protect your infrastructure and data assets with zero-trust architectures and rigorous NA compliance.", image: "/services/cyber.jpg" },
    { title: "Data Science & Analytics", description: "Turn raw operational data into clear, actionable insights for boardroom decision-making.", image: "/services/dataanalytics.jpg" },
    { title: "Strategic Tech Advisory", description: "Guide your long-term technology roadmap with expert advice on architecture and rapid scaling.", image: "/services/advisory.jpeg" },
    { title: "Product Design & UX", description: "Design intuitive, clean interfaces that reduce user friction and drive adoption.", image: "/services/uiux.jpg" }
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
                        North American Capabilities
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-[#0a706b]">
                                Scalable Innovation.
                            </span>
                        </h3>
                        <p className="text-slate-500 max-w-md text-sm leading-relaxed">
                            From high-load SaaS platforms to strict SOC2/HIPAA-compliant data systems, we design software architectures ready for massive scaling logic.
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
