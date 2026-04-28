'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const getIndustries = (lang: 'es' | 'pt') => {
    const images = [
        "/industries/banking.jpg", "/industries/retail.jpg", "/industries/logistics.jpg", 
        "/industries/energy.jpg", "/industries/telecom.jpg", "/industries/healthcare.jpg", 
        "/industries/saas.jpg", "/industries/realestate.jpg"
    ];
    const links = [
        "/industries/fintech", "/industries/retail", "/industries/supplychain", 
        "/industries/natural-resources", "/industries/telecom", "/industries/healthcare", 
        "/industries/saas", "/industries/realestate"
    ];

    if (lang === 'pt') {
        return [
            { title: "Neo-Banking e FinTech", category: "Alto Valor", solution: "Criando camadas de API bancárias fluidas e redes de carteira móvel.", image: images[0], link: links[0] },
            { title: "Varejo e E-commerce", category: "Comercial", solution: "Estratégias omnichannel para captar os consumidores digitais da LATAM.", image: images[1], link: links[1] },
            { title: "Logística e Cadeias de Suprimentos", category: "Industrial", solution: "Telemetria geoespacial e sistemas de rastreamento transfronteiriço.", image: images[2], link: links[2] },
            { title: "AgriTech e Mineração", category: "Recursos", solution: "Sensores IoT para monitoramento remoto de ativos e previsibilidade de safra.", image: images[3], link: links[3] },
            { title: "Telecomunicações", category: "Comercial", solution: "Integração 5G e arquiteturas operacionais automatizadas.", image: images[4], link: links[4] },
            { title: "Saúde e Telemedicina", category: "Soberano", solution: "Plataformas de diagnóstico remoto acessíveis para alcance geográfico.", image: images[5], link: links[5] },
            { title: "High-Growth Startups (SaaS)", category: "Comercial", solution: "Prototipagem rápida e hiper-escalonamento para líderes de Séries A/B.", image: images[6], link: links[6] },
            { title: "Imóveis e PropTech", category: "Comercial", solution: "Redes de corretagem digital e ferramentas modernas de avaliação.", image: images[7], link: links[7] }
        ];
    }
    
    return [
        { title: "Neo-Banca & FinTech", category: "Alto Valor", solution: "Creando capas de API bancarias fluidas y redes de billeteras móviles.", image: images[0], link: links[0] },
        { title: "Retail y Comercio Electrónico", category: "Comercial", solution: "Estrategias omnicanal para captar a los consumidores digitales de LATAM.", image: images[1], link: links[1] },
        { title: "Logística y Cadena de Suministro", category: "Industrial", solution: "Telemetría geoespacial y sistemas de seguimiento transfronterizo.", image: images[2], link: links[2] },
        { title: "AgriTech y Minería", category: "Recursos", solution: "Sensores IoT para monitoreo remoto de activos y previsibilidad de rendimiento.", image: images[3], link: links[3] },
        { title: "Telecomunicaciones", category: "Comercial", solution: "Integración de 5G y arquitecturas operativas automatizadas.", image: images[4], link: links[4] },
        { title: "Salud y Telemedicina", category: "Soberano", solution: "Plataformas de diagnóstico remoto para alcance geográfico.", image: images[5], link: links[5] },
        { title: "High-Growth Startups (SaaS)", category: "Comercial", solution: "Prototipado rápido e hiper-escalamiento para líderes de Series A/B.", image: images[6], link: links[6] },
        { title: "Bienes Raíces y PropTech", category: "Comercial", solution: "Redes digitales y herramientas modernas de valoración.", image: images[7], link: links[7] }
    ];
}

const uiContent = {
    es: {
        tagline: "Sectores Clave Sudamericanos",
        title: "Acelerando Industrias de LATAM",
        dragAction: "Arrastrar para Explorar",
        exploreAction: "Explorar Industria"
    },
    pt: {
        tagline: "Setores Principais Sul-Americanos",
        title: "Acelerando Indústrias da LATAM",
        dragAction: "Arraste para Explorar",
        exploreAction: "Explorar Indústria"
    }
};

export default function IndustryCarousel({ lang = 'es' }: { lang?: 'es' | 'pt' }) {
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const x = useMotionValue(0);

    const industries = getIndustries(lang);
    const t = uiContent[lang];

    useEffect(() => {
        if (carousel.current) {
            setMaxScrollWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [lang]); // Re-calculate if layout shifts on language change

    const slide = (direction: 'left' | 'right') => {
        const currentX = x.get();
        const slideAmount = 350;
        let newX = direction === 'left' ? currentX + slideAmount : currentX - slideAmount;

        if (newX > 0) newX = 0;
        if (newX < -maxScrollWidth) newX = -maxScrollWidth;

        controls.start({
            x: newX,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        });
        x.set(newX);
    };

    return (
        <section className="w-full bg-slate-50 pt-8 pb-12 md:pt-8 md:pb-12 font-poppins-regular overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                            {t.tagline}
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                            {t.title}
                        </h3>
                    </div>
                    <div className="flex gap-2 hidden md:flex">
                        <button
                            onClick={() => slide('left')}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0d938c] hover:border-[#0d938c] hover:bg-[#0d938c] text-[#0d938c] hover:text-white transition-all duration-300 active:scale-95"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => slide('right')}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0d938c] hover:border-[#0d938c] hover:bg-[#0d938c] text-[#0d938c] hover:text-white transition-all duration-300 active:scale-95"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 self-center ml-4">
                            {t.dragAction}
                        </p>
                    </div>
                </div>

                <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-visible">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -maxScrollWidth }}
                        whileTap={{ cursor: "grabbing" }}
                        animate={controls}
                        style={{ x }}
                        className="flex gap-6"
                    >
                        {industries.map((industry) => (
                            <motion.div
                                key={industry.title}
                                className="relative flex-shrink-0 bg-black rounded-xl overflow-hidden group border border-[#0d938c] w-[85vw] md:w-[42vw] lg:w-[22vw] h-[400px]"
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={industry.image}
                                        alt={industry.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                                </div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
                                    <h4 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:opacity-0 transition-opacity duration-300 transform translate-y-0 group-hover:-translate-y-4">
                                        {industry.title}
                                    </h4>
                                    <div className="h-[2px] w-8 bg-[#0d938c] group-hover:opacity-0 transition-opacity duration-300" />
                                </div>
                                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-center px-8 z-20">
                                    <span className="text-[#0d938c] text-xs font-bold uppercase tracking-widest mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {industry.category}
                                    </span>
                                    <h4 className="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        {industry.title}
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                        {industry.solution}
                                    </p>
                                    <Link href={industry.link || '#'} className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 cursor-pointer pointer-events-auto">
                                        {t.exploreAction} <MoveRight className="w-4 h-4 text-[#0d938c]" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
