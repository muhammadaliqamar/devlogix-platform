import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import HeroVideo from '@/components/layout/HeroVideo';

export default function Hero() {
    return (
        // CHANGE 1: min-h-screen instead of h-screen (allows scrolling if content is tall)
        // CHANGE 2: flex flex-col (creates a vertical stack layout)
        <section className="relative min-h-screen w-full overflow-hidden bg-black font-poppins-regular flex flex-col">
            {/* 1. VISUAL FOUNDATION (Video Background) */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="/hero-poster.png"
                    alt="DevLogix Hero Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover z-0"
                />
                
                <HeroVideo />

                {/* The "Readability" Layers */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
            </div>

            {/* 2. THE MESSAGE (Typography & Buttons) */}
            {/* flex-grow ensures this takes up all available space, pushing the Trust Bar down */}
            <div className="relative z-30 flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-18">

                {/* Animated Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-7.5xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight text-balance animate-fade-in-up" style={{ animationDuration: '0.8s', animationFillMode: 'both' }}>
                    Expanding Digital Horizons Across the Middle East & Africa
                </h1>

                {/* Sub-Headline */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mt-0 leading-relaxed font-light text-balance animate-fade-in-up" style={{ animationDuration: '0.8s', animationDelay: '0.2s', animationFillMode: 'both' }}>
                    From visionary enterprises in the Gulf to fast-growing markets in Africa, we help organizations transcend limits through intelligent digital solutions
                </p>

                {/* CTA COMPONENT ENGINEERING */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 relative z-30">

                    {/* Primary: Enterprise Glass */}
                    <Link
                        href="/contact"
                        className="px-10 py-4 backdrop-blur-[10px] bg-white/5 border border-white/20 text-white font-medium text-lg rounded-[4px] 
               transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
               hover:bg-[#0d938c] hover:border-[#0d938c] hover:shadow-[0_0_40px_rgba(13,147,140,0.3)]
               flex items-center justify-center gap-3 group"
                    >
                        Partner With Us
                        <ArrowRight className="w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1" />
                    </Link>

                    {/* Secondary: High-Authority Ghost */}
                    {/* <Link
                        href="/case-studies"
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