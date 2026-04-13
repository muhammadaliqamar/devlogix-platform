import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        // CHANGE 1: min-h-screen instead of h-screen (allows scrolling if content is tall)
        // CHANGE 2: flex flex-col (creates a vertical stack layout)
        <section className="relative min-h-screen w-full overflow-hidden bg-black font-poppins-regular flex flex-col">
            {/* 1. VISUAL FOUNDATION (Video Background) */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* 
                 * SEO/LCP FIX:
                 * Using Next.js <Image> for the poster instead of the native video poster attribute.
                 * Why? The native poster is a 2.5MB PNG. Next.js <Image> automatically converts it 
                 * to a tiny WEBP and natively preloads it since we use 'priority'.
                 */}
                <Image
                    src="/hero-poster.png"
                    alt="DevLogix Hero Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover z-0"
                />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover relative z-10"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                </video>

                {/* The "Readability" Layers */}
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
            </div>

            {/* 2. THE MESSAGE (Typography & Buttons) */}
            {/* flex-grow ensures this takes up all available space, pushing the Trust Bar down */}
            <div className="relative z-30 flex-grow flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-18">

                {/* Animated Headline */}
                <h1 
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 max-w-6xl leading-tight text-balance animate-fade-in-up"
                    style={{ animationDuration: '0.8s', animationFillMode: 'both' }}
                >
                    Shaping the Digital Horizons
                    <span className="sr-only"> - Custom Software & AI Development Company</span>
                </h1>

                {/* Sub-Headline */}
                <h2 
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mt-0 leading-relaxed font-light text-balance animate-fade-in-up"
                    style={{ animationDuration: '0.8s', animationDelay: '0.2s', animationFillMode: 'both' }}
                >
                    We help global businesses build scalable digital products through <strong>custom software development</strong> and advanced <strong>AI solutions</strong>
                </h2>

                {/* CTA COMPONENT ENGINEERING */}
                <div 
                    className="flex flex-col sm:flex-row items-center gap-6 mt-6 relative z-30 animate-fade-in-up"
                    style={{ animationDuration: '0.8s', animationDelay: '0.4s', animationFillMode: 'both' }}
                >

                    {/* Primary: Enterprise Glass */}
                    <Link
                        href="/contact"
                        aria-label="Partner with our software development team"
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