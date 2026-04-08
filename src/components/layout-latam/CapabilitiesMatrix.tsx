'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MoveRight, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const getCapabilities = (lang: 'es' | 'pt') => {
    const images = [
        "/services/mobileapp.jpg", "/services/blockchain.jpg", "/services/erp.jpg", "/services/dataanalytics.jpg",
        "/services/fullstack.jpg", "/services/ai.jpg", "/services/cloud.jpg", "/services/staff.jpg",
        "/services/cyber.jpg", "/services/customsoftware.jpg", "/services/advisory.jpeg", "/services/uiux.jpg"
    ];

    if (lang === 'pt') {
        return [
            { title: "Arquiteturas Mobile-First", description: "Projete aplicativos nativos rápidos e ultrarresponsivos para a base móvel da LATAM.", image: images[0] },
            { title: "FinTech & Gateways de Pagamento", description: "Crie soluções de pagamento digital seguras e plataformas de neo-banking.", image: images[1] },
            { title: "ERP Corporativo Sob Medida", description: "Centralize suas operações, cadeia de suprimentos e finanças em um sistema hiperlocalizado.", image: images[2] },
            { title: "Cadeia de Suprimentos", description: "Implemente software logístico em tempo real para os desafios geográficos do continente.", image: images[3] },
            { title: "E-Commerce de Alto Volume", description: "Construa marketplaces escaláveis capazes de processar tráfego massivo simultâneo.", image: images[4] },
            { title: "IA e Machine Learning", description: "Automatize decisões complexas com modelagem preditiva criada para seus dados.", image: images[5] },
            { title: "Escalonamento AWS/Azure", description: "Implante infraestrutura de nuvem localizada que garante alta disponibilidade.", image: images[6] },
            { title: "Aumento Ágil de Equipe de TI", exp: true, description: "Expanda seus esquadrões instantaneamente com equipes de engenharia altamente qualificadas.", image: images[7] },
            { title: "Segurança Corporativa", description: "Proteja sua infraestrutura de ameaças emergentes com arquiteturas zero-trust.", image: images[8] },
            { title: "Engenharia Sob Medida", description: "Desenvolva fluxos de trabalho que o software padrão simplesmente não suporta.", image: images[9] },
            { title: "Consultoria Tecnológica", description: "Alinhe seu roteiro de tecnologia com planos de expansão regionais ousados.", image: images[10] },
            { title: "Design de Produto e UX", description: "Crie interfaces altamente intuitivas e acessíveis que reduzem o atrito.", image: images[11] }
        ];
    }
    
    return [
        { title: "Arquitecturas Mobile-First", description: "Diseñe aplicaciones nativas rápidas y ultrarresponsivas adaptadas a la base móvil de LATAM.", image: images[0] },
        { title: "FinTech y Opciones de Pago", description: "Cree soluciones de pago digital seguras, confiables y de neo-banking.", image: images[1] },
        { title: "ERP Empresarial a Medida", description: "Centralice operaciones, cadena de suministro y finanzas en un sistema hiper-localizado.", image: images[2] },
        { title: "Logística y Rastreo de Flota", description: "Implemente software logístico en tiempo real para enfrentar los desafíos geográficos del continente.", image: images[3] },
        { title: "Comercio Electrónico", description: "Construya marketplaces escalables de alto volumen capaces de procesar tráfico masivo.", image: images[4] },
        { title: "IA y Machine Learning", description: "Automatice decisiones complejas con modelado predictivo construido específicamente para sus datos.", image: images[5] },
        { title: "Escalado Nube AWS/Azure", description: "Despliegue infraestructura localizada que garantice alta disponibilidad y cumplimiento regulatorio.", image: images[6] },
        { title: "Aumento Ágil de Personal TI", description: "Expanda sus escuadrones al instante con nuestros equipos enfocados y altamente capacitados.", image: images[7] },
        { title: "Seguridad Empresarial", description: "Proteja su infraestructura de amenazas emergentes con arquitecturas de confianza cero.", image: images[8] },
        { title: "Ingeniería a Medida", description: "Desarrolle flujos de trabajo personalizados y bases que el software estandarizado no puede dar soporte.", image: images[9] },
        { title: "Asesoramiento Estratégico", description: "Alinee su roadmap tecnológico con planes de expansión regionales audaces para dominar el mercado.", image: images[10] },
        { title: "Diseño de Producto y UX", description: "Cree interfaces altamente intuitivas y accesibles que reducen la fricción.", image: images[11] }
    ];
};

const uiContent = {
    es: {
        tagline: "Capacidades Digitales Sudamericanas",
        title: "Ingeniería para",
        highlight: "Escala Rápida.",
        description: "Desde transacciones FinTech de alto volumen hasta plataformas logísticas end-to-end, diseñamos sistemas escalables adaptados a la rápida digitalización de LATAM.",
        explore: "Explorar Solución",
        viewLess: "Ver Menos",
        viewAll: "Explorar Todas las Capacidades"
    },
    pt: {
        tagline: "Capacidades Digitais Sul-Americanas",
        title: "Engenharia para",
        highlight: "Escala Rápida.",
        description: "Desde transações FinTech de alto volume até plataformas logísticas de ponta a ponta, projetamos sistemas escaláveis adaptados à rápida digitalização da LATAM.",
        explore: "Explorar Solução",
        viewLess: "Ver Menos",
        viewAll: "Explorar Todas as Capacidades"
    }
}

const CapabilityCard = ({ item, index, exploreText }: { item: any, index: number, exploreText: string }) => (
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
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0d938c] transition-colors leading-tight">
                    {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mt-auto opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {exploreText} <MoveRight className="w-3 h-3 text-[#0d938c]" />
            </div>
        </div>
    </div>
);

export default function CapabilitiesMatrix({ lang = 'es' }: { lang?: 'es' | 'pt' }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const capabilities = getCapabilities(lang);
    const t = uiContent[lang];

    const initialItems = capabilities.slice(0, 4);
    const hiddenItems = capabilities.slice(4);

    return (
        <section className="w-full bg-white pt-10 pb-12 md:pt-1 md:pb-12 font-poppins-regular">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-4">
                        {t.tagline}
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl">
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-[#0a706b]">
                                {t.highlight}
                            </span>
                        </h3>
                        <p className="text-slate-500 max-w-md text-sm leading-relaxed">
                            {t.description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {initialItems.map((item, index) => (
                        <CapabilityCard key={item.title} item={item} index={index} exploreText={t.explore} />
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
                            <CapabilityCard key={item.title} item={item} index={index + 4} exploreText={t.explore} />
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
                                {t.viewLess}
                                <div className="p-1 rounded-full bg-slate-50 group-hover:bg-[#0d938c] transition-colors">
                                    <ArrowUp className="w-3 h-3 text-slate-500 group-hover:text-white" />
                                </div>
                            </>
                        ) : (
                            <>
                                {t.viewAll}
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
