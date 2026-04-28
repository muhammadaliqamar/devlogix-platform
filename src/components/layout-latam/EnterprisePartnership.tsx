'use client'

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const content = {
    es: {
        tagline: "Asociaciones Estratégicas en LATAM",
        title: "Co-innovando con la",
        highlight: "Élite Tecnológica de América Latina",
        description: "Nos asociamos con líderes empresariales desde Brasil hasta Chile para construir plataformas masivas y de alta disponibilidad capaces de satisfacer las aceleradas demandas digitales del continente.",
        bullets: [
            "Integración de Ecosistemas Localizados",
            "Módulos de Escalado Ágil Rápido",
            "Equipos de Ingeniería Panamericanos",
        ],
        cta: "Discutir Su Proyecto"
    },
    pt: {
        tagline: "Parcerias Estratégicas na LATAM",
        title: "Co-inovando com a",
        highlight: "Elite Tecnológica da América Latina",
        description: "Temos parcerias com líderes corporativos do Brasil ao Chile para construir plataformas massivas e de alta disponibilidade com capacidade para atender às crescentes demandas digitais do continente.",
        bullets: [
            "Integração de Ecossistemas Localizados",
            "Módulos de Escalonamento Ágil Rápido",
            "Equipes de Engenharia Pan-Americanas",
        ],
        cta: "Discutir Seu Projeto"
    }
};

export default function EnterprisePartnership({ lang = 'es' }: { lang?: 'es' | 'pt' }) {
    const t = content[lang];

    return (
        <section className="w-full bg-slate-50 pt-24 pb-12 md:pt-16 md:pb-12 font-poppins-regular ">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h2 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6">
                            {t.tagline}
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d938c] to-[#0a706b]">{t.highlight}</span>
                        </h3>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                            {t.description}
                        </p>

                        <div className="space-y-4 mb-10">
                            {t.bullets.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#0d938c]" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-[4px] font-semibold transition-all duration-300 hover:bg-[#0d938c] hover:shadow-lg group"
                        >
                            {t.cta}
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="relative h-[500px] w-full rounded-xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-slate-200">
                            <Image
                                src="/team.jpg"
                                alt="South American Tech Delivery Team"
                                fill
                                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-300 to-slate-400" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
