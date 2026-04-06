'use client'

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
    title?: string;
    subtitle?: string;
}

export default function CTASection({
    title = "Lead the LATAM Digital Revolution",
    subtitle = "Partner with us to engineer high-performance software. Scale faster and capture market share across South America."
}: CTASectionProps) {
    return (
        <section className="w-full bg-slate-50 pt-16 pb-8 md:pt-10 md:pb-10 font-poppins-regular">
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-gradient-to-br from-[#0B1221] to-slate-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                        {subtitle}
                    </p>
                    <div className="flex flex-col items-center gap-6 relative z-10">
                        <Link
                            href="/contact"
                            className="group bg-[#0d938c] hover:bg-[#0a706b] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                        >
                            Initiate a Technical Audit
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <a
                            href="mailto:latam@devlogix.com"
                            className="text-sm font-medium text-slate-500 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-slate-500 pb-0.5"
                        >
                            Prefer email? reach us at latam@devlogix.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
