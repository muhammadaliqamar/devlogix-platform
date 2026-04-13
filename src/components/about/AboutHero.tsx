

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black font-poppins-regular flex flex-col">
            {/* 1. VISUAL FOUNDATION (Video Background) */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    // SEO FIX 1: Added poster image to fix Core Web Vitals (LCP) penalty
                    poster="/about/network-mesh-poster.png"
                    className="w-full h-full object-cover"
                    aria-hidden="true" // Hides decorative background video from screen readers
                >
                    <source src="/about/network-mesh.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-[#0B1221]/85 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221] via-transparent to-[#0B1221]" />
            </div>

            {/* 2. THE MESSAGE */}
            <div className="relative z-30 flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-18">

                {/* Animated Headline */}
                <h1
                    className="text-xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-6xl leading-tight text-balance animate-fade-in-up"
                    style={{ animationDuration: '0.8s', animationFillMode: 'both' }}
                >
                    Beyond Code <br />We Engineer Legacies
                    {/* SEO FIX 2: Visually hidden, but gives your About H1 massive SEO power */}
                    <span className="sr-only"> - About DevLogix, Custom Software & AI Development Company</span>
                </h1>

                {/* Sub-Headline */}
                {/* SEO FIX 3: Upgraded to <h2> for semantic outline weight */}
                <h2
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mt-0 leading-relaxed font-light text-balance animate-fade-in-up"
                    style={{ animationDuration: '0.8s', animationDelay: '0.2s', animationFillMode: 'both' }}
                >
                    At DevLogix, we build <strong>intelligent digital ecosystems</strong> designed for longevity, resilience, and growth. We don't just solve today's problems; we architect tomorrow's foundation.
                </h2>

                {/* CTA COMPONENT ENGINEERING */}
                <div 
                    className="flex flex-col sm:flex-row items-center gap-6 mt-6 relative z-30 animate-fade-in-up"
                    style={{ animationDuration: '0.8s', animationDelay: '0.4s', animationFillMode: 'both' }}
                >

                    {/* Primary */}
                    <Link
                        href="/contact"
                        aria-label="Partner with DevLogix for custom enterprise software" // SEO FIX 4: Rich link context
                        className="px-10 py-4 backdrop-blur-[10px] bg-white/5 border border-white/20 text-white font-medium text-lg rounded-[4px] 
               transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
               hover:bg-[#0d938c] hover:border-[#0d938c] hover:shadow-[0_0_40px_rgba(13,147,140,0.3)]
               flex items-center justify-center gap-3 group"
                    >
                        Partner With Us
                        <ArrowRight className="w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1" />
                    </Link>

                    {/* Secondary */}
                    {/* <Link
                        href="/case-studies"
                        aria-label="View DevLogix software engineering case studies" // SEO FIX 4: Rich link context
                        className="px-10 py-4 bg-transparent border-[1.5px] border-white/40 text-white font-medium text-lg rounded-[4px] 
               transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
               hover:bg-white/5 backdrop-blur-sm
               flex items-center justify-center"
                    >
                        View Case Studies
                    </Link> */}
                </div>

            </div>
        </section >
    );
}