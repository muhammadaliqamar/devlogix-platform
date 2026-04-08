'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

// REGION DATA
const regions = [
    "Global", "MEA", "KSA", "APAC",
    "LATAM", "North America", "Europe & UK"
];

// REGION SLUGS
const regionPaths: Record<string, string> = {
    "Global": "/", "MEA": "/mea", "KSA": "/ksa", "APAC": "/apac",
    "LATAM": "/latam", "North America": "/north-america", "Europe & UK": "/europe"
};

// DATA STRUCTURES
const industryItems = [
    { name: 'Textile & Mfg', link: '/industries/textile-manufacturing', desc: 'Smart fabrics & production.' },
    { name: 'Supply Chain', link: '/industries/supply-chain', desc: 'Fleet tracking systems.' },
    { name: 'Fintech', link: '/industries/fintech', desc: 'Secure banking.' },
    { name: 'GovTech', link: '/industries/govtech', desc: 'Public sector digitization.' },
    { name: 'Healthcare', link: '/industries/healthcare', desc: 'Telehealth data.' },
    { name: 'Retail', link: '/industries/retail', desc: 'Omnichannel commerce.' },
    { name: 'Real Estate', link: '/industries/realestate', desc: 'Proptech management.' },
    { name: 'Energy', link: '/industries/energy', desc: 'Grid management tech.' },
    { name: 'SaaS', link: '/industries/saas', desc: 'Scalable software.' },
    { name: 'Legal', link: '/industries/legal', desc: 'Case management.' },
    { name: 'Telecom', link: '/industries/telecom', desc: '5G infrastructure.' },
    { name: 'Nat. Resources', link: '/industries/natural-resources', desc: 'Mining & Agriculture.' }
];

const serviceItems = [
    { name: 'AI & Machine Learning', link: '/services/ai-ml', desc: 'Automation & Agents.' },
    { name: 'Cybersecurity', link: '/services/cybersecurity', desc: 'Protection.' },
    { name: 'Custom Software', link: '/services/custom-software', desc: 'Backend systems.' },
    { name: 'Web Development', link: '/services/web-development', desc: 'Next.js apps.' },
    { name: 'Mobile Apps', link: '/services/mobile-app', desc: 'iOS & Android.' },
    { name: 'Cloud & DevOps', link: '/services/cloud-devops', desc: 'AWS/Azure.' },
    { name: 'Blockchain', link: '/services/blockchain', desc: 'Ledgers.' },
    { name: 'IT Staff Augmentation', link: '/services/staff-augmentation', desc: 'Scale your team.' },
    { name: 'Tech Advisory', link: '/services/consulting', desc: 'Strategic plans.' },
    { name: 'Data Science', link: '/services/data-science', desc: 'Analytics.' },
    { name: 'Product Design & UX', link: '/services/ui-ux', desc: 'User interfaces.' },
];

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false)

    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

    const [regionOpen, setRegionOpen] = useState(false);
    const [currentRegion, setCurrentRegion] = useState("Global");

    useEffect(() => {
        if (pathname) {
            const foundRegion = Object.keys(regionPaths).find(
                key => regionPaths[key] !== '/' && pathname.startsWith(regionPaths[key])
            );
            setCurrentRegion(foundRegion || "Global");
        }
    }, [pathname]);

    const menuRef = useRef<HTMLDivElement>(null)
    const regionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setActiveMenu(null)
            }
            if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
                setRegionOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const toggleMenu = (name: string) => {
        if (activeMenu === name) setActiveMenu(null);
        else setActiveMenu(name);
        setRegionOpen(false);
    }

    const toggleMobileAccordion = (name: string) => {
        if (mobileExpanded === name) setMobileExpanded(null);
        else setMobileExpanded(name);
    }

    const toggleRegion = () => {
        setRegionOpen(!regionOpen)
        setActiveMenu(null)
    }

    const handleRegionSelect = (selectedRegion: string) => {
        setCurrentRegion(selectedRegion);
        setRegionOpen(false);
        setMobileMenuOpen(false);
        document.cookie = `devlogix-region=${selectedRegion}; path=/; max-age=31536000; SameSite=Lax`;
        const targetPath = regionPaths[selectedRegion] || "/";
        router.push(targetPath);
    }

    const isDark = isScrolled || mobileMenuOpen;

    const navLinkStyle = `cursor-pointer font-normal text-sm transition-colors flex items-center gap-1.5 ${isDark ? 'text-slate-700 hover:text-[#14B8A6]' : 'text-gray-200 hover:text-white'}`
    const megaMenuContainer = "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up origin-top";
    const gridItemStyle = "block p-4 rounded-lg hover:bg-slate-50 transition group border border-transparent hover:border-gray-100";
    const mobileLinkStyle = "flex items-center justify-between w-full py-4 text-lg font-medium text-slate-800 border-b border-gray-100";

    if (pathname?.startsWith('/ksa') || pathname?.startsWith('/latam')) return null;

    return (
        <nav
            ref={menuRef}
            aria-label="Main Navigation" // SEO FIX 1: Identifies the nav landmark
            className={`fixed w-full z-50 transition-all duration-300 ease-in-out font-poppins-regular ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2' : 'bg-white/0 border-b border-transparent py-4'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">

                {/* LOGO */}
                <Link href="/" aria-label="DevLogix Home" className="relative z-50 flex items-center gap-2" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>
                    <div className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px]">
                        <Image src="/devlogix-logo.svg" alt="DevLogix Custom Software Development" fill sizes="150px" className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} priority />
                        <Image src="/devlogix-logo-white.svg" alt="DevLogix AI Solutions" fill sizes="150px" className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} priority />
                    </div>
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <div className="hidden lg:flex gap-8 items-center">
                    {/* SEO FIX 2: Added aria-expanded and aria-haspopup to all dropdown triggers */}
                    <button onClick={() => toggleMenu('industries')} aria-expanded={activeMenu === 'industries'} aria-haspopup="true" className={navLinkStyle}>
                        Industries
                        <i aria-hidden="true" className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''} ${isScrolled ? 'text-black' : 'text-white'}`}></i>
                    </button>

                    <button onClick={() => toggleMenu('services')} aria-expanded={activeMenu === 'services'} aria-haspopup="true" className={navLinkStyle}>
                        Services
                        <i aria-hidden="true" className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''} ${isScrolled ? 'text-black' : 'text-white'}`}></i>
                    </button>

                    <button onClick={() => toggleMenu('company')} aria-expanded={activeMenu === 'company'} aria-haspopup="true" className={navLinkStyle}>
                        Company
                        <i aria-hidden="true" className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${activeMenu === 'company' ? 'rotate-180' : ''} ${isScrolled ? 'text-black' : 'text-white'}`}></i>
                    </button>
                </div>

                {/* ================= RIGHT SIDE ACTIONS ================= */}
                <div className="flex items-center gap-4 md:gap-6">
                    <Link href="/contact" className={`hidden sm:block px-5 py-2.5 rounded-lg font-normal transition-all shadow-lg text-sm bg-[#0d938c] text-white hover:bg-[#0a706b]`}>
                        Partner with us
                    </Link>

                    {/* HAMBURGER BUTTON */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu" // SEO FIX 3: Mobile accessibility
                        aria-expanded={mobileMenuOpen}
                        className={`lg:hidden relative z-50 p-2 focus:outline-none`}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                            <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'bg-slate-900 rotate-45 translate-y-2' : (isScrolled ? 'bg-slate-900' : 'bg-white')}`}></span>
                            <span className={`block w-full h-0.5 rounded-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : (isScrolled ? 'bg-slate-900' : 'bg-white')}`}></span>
                            <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'bg-slate-900 -rotate-45 -translate-y-2' : (isScrolled ? 'bg-slate-900' : 'bg-white')}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU DRAWER ================= */}
            <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full pt-24 pb-10 px-6 overflow-y-auto">
                    <div className="flex-1 space-y-2">
                        {/* MOBILE: INDUSTRIES */}
                        <div className="border-b border-gray-100">
                            <button onClick={() => toggleMobileAccordion('industries')} aria-expanded={mobileExpanded === 'industries'} className={mobileLinkStyle}>
                                <span>Industries</span>
                                <i aria-hidden="true" className={`fa-solid fa-chevron-down text-sm transition-transform ${mobileExpanded === 'industries' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === 'industries' ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-[#14B8A6] uppercase tracking-wide">
                                    View Overview
                                </Link>
                                <div className="grid grid-cols-1 gap-3 mt-2">
                                    {industryItems.map((item) => (
                                        <Link key={item.name} href={item.link} onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 text-sm py-1">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MOBILE: SERVICES */}
                        <div className="border-b border-gray-100">
                            <button onClick={() => toggleMobileAccordion('services')} aria-expanded={mobileExpanded === 'services'} className={mobileLinkStyle}>
                                <span>Services</span>
                                <i aria-hidden="true" className={`fa-solid fa-chevron-down text-sm transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === 'services' ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-[#14B8A6] uppercase tracking-wide">
                                    View Overview
                                </Link>
                                <div className="grid grid-cols-1 gap-3 mt-2">
                                    {serviceItems.map((item) => (
                                        <Link key={item.name} href={item.link} onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 text-sm py-1">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MOBILE: COMPANY */}
                        <div className="border-b border-gray-100">
                            <button onClick={() => toggleMobileAccordion('company')} aria-expanded={mobileExpanded === 'company'} className={mobileLinkStyle}>
                                <span>Company</span>
                                <i aria-hidden="true" className={`fa-solid fa-chevron-down text-sm transition-transform ${mobileExpanded === 'company' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === 'company' ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">About Us</Link>
                                <Link href="/about/board" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Board of Directors</Link>
                                <Link href="/investors" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Investors</Link>
                                <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Careers</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-6">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-4 rounded-lg bg-[#0d938c] text-white font-medium text-lg hover:bg-[#0a706b] shadow-lg">
                            Partner with us
                        </Link>
                    </div>
                </div>
            </div>


            {/* ================= DESKTOP MEGA MENUS ================= */}

            {/* 1. INDUSTRIES MENU */}
            {activeMenu === 'industries' && (
                <div className={`${megaMenuContainer} hidden lg:block`}>
                    <div className="flex min-h-[320px]">
                        <div className="w-[260px] bg-[#f8fafc] p-8 border-r border-gray-100 flex flex-col justify-between">
                            <div>
                                <Link href="/industries" className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-slate-900 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all group">
                                    Overview
                                    <i aria-hidden="true" className="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#14B8A6]"></i>
                                </Link>
                                {/* SEO FIX 4: Depromoted <h3> to a styled <div> to prevent document outline pollution */}
                                <div className="text-lg font-bold text-slate-900 mt-6 mb-2">Industries</div>
                                <p className="text-xs text-slate-500 leading-relaxed">Specialized solutions spanning 12 industries, each engineered to meet distinct operational challenges.</p>
                            </div>
                        </div>
                        <div className="flex-1 p-8 bg-white">
                            <div className="grid grid-cols-3 gap-4">
                                {industryItems.map((item) => (
                                    <Link key={item.name} href={item.link} className={gridItemStyle}>
                                        {/* SEO FIX 4: Depromoted <h4> to a styled <span> */}
                                        <span className="block font-bold text-slate-900 text-[15px] group-hover:text-[#14B8A6] transition-colors mb-0.5">{item.name}</span>
                                        <p className="text-[11px] text-slate-500 font-normal leading-tight">{item.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 2. SERVICES MENU */}
            {activeMenu === 'services' && (
                <div className={`${megaMenuContainer} hidden lg:block`}>
                    <div className="flex min-h-[320px]">
                        <div className="w-[260px] bg-[#f8fafc] p-8 border-r border-gray-100 flex flex-col justify-between">
                            <div>
                                <Link href="/services" className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-slate-900 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all group">
                                    Overview
                                    <i aria-hidden="true" className="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#14B8A6]"></i>
                                </Link>
                                <div className="text-lg font-bold text-slate-900 mt-6 mb-2">Services</div>
                                <p className="text-xs text-slate-500 leading-relaxed">From enterprise platforms to automation systems, we architect solutions that drive operational excellence.</p>
                            </div>
                        </div>
                        <div className="flex-1 p-8 bg-white">
                            <div className="grid grid-cols-3 gap-4">
                                {serviceItems.map((item) => (
                                    <Link key={item.name} href={item.link} className={gridItemStyle}>
                                        <span className="block font-bold text-slate-900 text-[15px] group-hover:text-[#14B8A6] transition-colors mb-0.5">{item.name}</span>
                                        <p className="text-[11px] text-slate-500 font-normal leading-tight">{item.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 3. COMPANY MENU */}
            {activeMenu === 'company' && (
                <div className={`${megaMenuContainer} hidden lg:block`}>
                    <div className="flex min-h-[320px]">
                        <div className="w-[260px] bg-[#f8fafc] p-8 border-r border-gray-100 flex flex-col justify-between">
                            <div>
                                <Link href="/about" className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-slate-900 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all group">
                                    Overview
                                    <i aria-hidden="true" className="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#14B8A6]"></i>
                                </Link>
                                <div className="text-lg font-bold text-slate-900 mt-6 mb-2">Company</div>
                                <p className="text-xs text-slate-500 leading-relaxed">Technology, trust, and domain expertise in motion.</p>
                            </div>
                        </div>
                        <div className="flex-1 p-8 bg-white">
                            <div className="grid grid-cols-3 gap-4">
                                <Link href="/about" className={gridItemStyle}>
                                    <span className="block font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">About </span>
                                    <p className="text-xs text-slate-500 leading-relaxed">Learn about our journey, vision, and values.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}