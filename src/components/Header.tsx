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
    { name: 'Supply Chain', link: '/industries/supplychain', desc: 'Fleet tracking systems.' },
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
    // { name: 'IoT Solutions', link: '/services/iot', desc: 'Connected systems.' },
    { name: 'Cybersecurity', link: '/services/cybersecurity', desc: 'Protection.' },
    { name: 'Cloud & DevOps', link: '/services/cloud-devops', desc: 'AWS/Azure.' },
    { name: 'Custom Software', link: '/services/custom-software', desc: 'Backend systems.' },
    { name: 'Blockchain', link: '/services/blockchain', desc: 'Ledgers.' },
    { name: 'Data Science', link: '/services/data-science', desc: 'Analytics.' },
    { name: 'Web Development', link: '/services/web-development', desc: 'Next.js apps.' },
    { name: 'Mobile Apps', link: '/services/mobile-app', desc: 'iOS & Android.' },
    { name: 'Product Design & UX', link: '/services/ui-ux', desc: 'User interfaces.' },
    { name: 'IT Staff Augmentation', link: '/services/staff-augmentation', desc: 'Scale your team.' },
    { name: 'Tech Advisory', link: '/services/consulting', desc: 'Strategic plans.' }
];

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false)

    // Desktop Menu State
    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    // Mobile Menu State
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null) // For mobile accordions

    // Region State
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

    // 1. TRACK SCROLL
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 2. CLICK OUTSIDE (Desktop)
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

    // 3. LOCK SCROLL WHEN MOBILE MENU OPEN
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

    // Toggle Mobile Accordions
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
        setMobileMenuOpen(false); // Close mobile menu on selection
        document.cookie = `devlogix-region=${selectedRegion}; path=/; max-age=31536000; SameSite=Lax`;
        const targetPath = regionPaths[selectedRegion] || "/";
        router.push(targetPath);
    }

    const isDark = isScrolled || mobileMenuOpen; // Force dark style text when menu is open for contrast if needed, mostly for desktop logic

    // STYLES
    const navLinkStyle = `cursor-pointer font-normal text-sm transition-colors flex items-center gap-1.5 ${isDark ? 'text-slate-700 hover:text-[#14B8A6]' : 'text-gray-200 hover:text-white'}`
    const megaMenuContainer = "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up origin-top";
    const gridItemStyle = "block p-4 rounded-lg hover:bg-slate-50 transition group border border-transparent hover:border-gray-100";
    const mobileLinkStyle = "flex items-center justify-between w-full py-4 text-lg font-medium text-slate-800 border-b border-gray-100";

    // SUPPRESS GLOBAL HEADER ON KSA ROUTE
    if (pathname?.startsWith('/ksa')) return null;

    return (
        <nav
            ref={menuRef}
            className={`fixed w-full z-50 transition-all duration-300 ease-in-out font-poppins-regular ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2' : 'bg-white/0 border-b border-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">

                {/* LOGO */}
                <Link href="/" className="relative z-50 flex items-center gap-2" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>
                    <div className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px]">
                        {/* Dark Logo (Show on scroll OR inside mobile menu OR white background) */}
                        <Image
                            src="/devlogix-logo.svg"
                            alt="DevLogix"
                            fill
                            sizes="150px"
                            className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
                            priority
                        />
                        {/* White Logo (Show on transparent background only) */}
                        <Image
                            src="/devlogix-logo-white.svg"
                            alt="DevLogix"
                            fill
                            sizes="150px"
                            className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
                            priority
                        />
                    </div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${isScrolled ? 'text-[#14B8A6] border-[#14B8A6]/30 bg-[#14B8A6]/5' : 'text-white border-white/30 bg-white/10'
                        }`}>
                        Beta
                    </span>
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <div className="hidden lg:flex gap-8 items-center">
                    <button onClick={() => toggleMenu('industries')} className={navLinkStyle}>
                        Industries
                        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''} ${isScrolled ? 'text-black' : 'text-white'}`}></i>
                    </button>

                    <button onClick={() => toggleMenu('services')} className={navLinkStyle}>
                        Services
                        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''} ${isScrolled ? 'text-black' : 'text-white'}`}></i>
                    </button>

                    {/* <button onClick={() => toggleMenu('insights')} className={navLinkStyle}>
                        Insights
                        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${activeMenu === 'insights' ? 'rotate-180' : ''} ${isScrolled ? 'text-black' : 'text-white'}`}></i>
                    </button> */}

                    <button onClick={() => toggleMenu('company')} className={navLinkStyle}>
                        Company
                        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${activeMenu === 'company' ? 'rotate-180' : ''} ${isScrolled ? 'text-black' : 'text-white'}`}></i>
                    </button>
                </div>

                {/* ================= RIGHT SIDE ACTIONS ================= */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* CTA Button (Hidden on very small screens, shown on tablet/desktop) */}
                    <Link
                        href="/contact"
                        className={`hidden sm:block px-5 py-2.5 rounded-lg font-normal transition-all shadow-lg text-sm bg-[#0d938c] text-white hover:bg-[#0a706b]`}
                    >
                        Partner with us
                    </Link>

                    {/* Region Selector (Desktop Only) */}
                    <div className="relative hidden lg:block" ref={regionRef}>
                        <button
                            onClick={toggleRegion}
                            className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-[#14B8A6]' : 'text-gray-200 hover:text-white'}`}
                        >
                            <i className="fa-solid fa-globe text-sm"></i>
                            <span>{currentRegion}</span>
                            <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-200 ${regionOpen ? 'rotate-180' : ''}`}></i>
                        </button>
                        {/* Desktop Region Dropdown */}

                        {regionOpen && (
                            <div className="absolute top-full right-0 mt-4 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in-up origin-top-right">
                                <div className="absolute -top-1.5 right-2 w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                                <div className="max-h-[300px] overflow-y-auto">
                                    {regions.map((region) => (
                                        <button
                                            key={region}
                                            onClick={() => handleRegionSelect(region)}
                                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center justify-between group transition-colors ${currentRegion === region ? 'text-[#14B8A6] font-bold bg-teal-50/50' : 'text-slate-600'}`}
                                        >
                                            {region}
                                            {currentRegion === region && <i className="fa-solid fa-check text-xs"></i>}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>



                    {/* HAMBURGER BUTTON (Mobile/Tablet Only) */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden relative z-50 p-2 focus:outline-none`}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                            {/* Top Bar */}
                            <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen
                                ? 'bg-slate-900 rotate-45 translate-y-2'
                                : (isScrolled ? 'bg-slate-900' : 'bg-white')
                                }`}></span>
                            {/* Middle Bar */}
                            <span className={`block w-full h-0.5 rounded-full transition-opacity duration-300 ${mobileMenuOpen
                                ? 'opacity-0'
                                : (isScrolled ? 'bg-slate-900' : 'bg-white')
                                }`}></span>
                            {/* Bottom Bar */}
                            <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen
                                ? 'bg-slate-900 -rotate-45 -translate-y-2'
                                : (isScrolled ? 'bg-slate-900' : 'bg-white')
                                }`}></span>
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
                            <button onClick={() => toggleMobileAccordion('industries')} className={mobileLinkStyle}>
                                <span>Industries</span>
                                <i className={`fa-solid fa-chevron-down text-sm transition-transform ${mobileExpanded === 'industries' ? 'rotate-180' : ''}`}></i>
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
                            <button onClick={() => toggleMobileAccordion('services')} className={mobileLinkStyle}>
                                <span>Services</span>
                                <i className={`fa-solid fa-chevron-down text-sm transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}></i>
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

                        {/* MOBILE: INSIGHTS */}
                        <div className="border-b border-gray-100">
                            <button onClick={() => toggleMobileAccordion('insights')} className={mobileLinkStyle}>
                                <span>Insights</span>
                                <i className={`fa-solid fa-chevron-down text-sm transition-transform ${mobileExpanded === 'insights' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === 'insights' ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Technical Blog</Link>
                                <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Case Studies</Link>
                                <Link href="/whitepapers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">White Papers</Link>
                                <Link href="/newsroom" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Newsroom</Link>
                            </div>
                        </div>

                        {/* MOBILE: COMPANY */}
                        <div className="border-b border-gray-100">
                            <button onClick={() => toggleMobileAccordion('company')} className={mobileLinkStyle}>
                                <span>Company</span>
                                <i className={`fa-solid fa-chevron-down text-sm transition-transform ${mobileExpanded === 'company' ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === 'company' ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">About Us</Link>
                                <Link href="/about/board" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Board of Directors</Link>
                                <Link href="/investors" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Investors</Link>
                                <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-600 text-sm">Careers</Link>
                            </div>
                        </div>

                    </div>

                    {/* MOBILE FOOTER: REGION & CTA */}
                    <div className="mt-8 space-y-6">

                        {/* Mobile Region Selector */}
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">Select Region</p>
                            <div className="grid grid-cols-2 gap-2">
                                {regions.map((region) => (
                                    <button
                                        key={region}
                                        onClick={() => handleRegionSelect(region)}
                                        className={`text-xs px-3 py-2 rounded border transition-all ${currentRegion === region
                                            ? 'bg-[#0d938c] text-white border-[#0d938c]'
                                            : 'bg-white text-slate-600 border-gray-200'
                                            }`}
                                    >
                                        {region}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full text-center py-4 rounded-lg bg-[#0d938c] text-white font-medium text-lg hover:bg-[#0a706b] shadow-lg"
                        >
                            Partner with us
                        </Link>
                    </div>
                </div>
            </div>


            {/* ================= DESKTOP MEGA MENUS ================= */}
            {/* 1. INDUSTRIES MENU */}
            {
                activeMenu === 'industries' && (
                    <div className={`${megaMenuContainer} hidden lg:block`}>
                        <div className="flex min-h-[320px]">
                            <div className="w-[260px] bg-[#f8fafc] p-8 border-r border-gray-100 flex flex-col justify-between">
                                <div>
                                    <Link href="#" className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-slate-900 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all group">
                                        Overview
                                        <i className="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#14B8A6]"></i>
                                    </Link>
                                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Industries</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">Specialized solutions spanning 12 industries, each engineered to meet distinct operational challenges.</p>
                                </div>
                            </div>
                            <div className="flex-1 p-8 bg-white">
                                <div className="grid grid-cols-3 gap-4">
                                    {industryItems.map((item) => (
                                        <Link key={item.name} href={item.link} className={gridItemStyle}>
                                            <h4 className="font-bold text-slate-900 text-[15px] group-hover:text-[#14B8A6] transition-colors mb-0.5">{item.name}</h4>
                                            <p className="text-[11px] text-slate-500 font-normal leading-tight">{item.desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* 2. SERVICES MENU */}
            {
                activeMenu === 'services' && (
                    <div className={`${megaMenuContainer} hidden lg:block`}>
                        <div className="flex min-h-[320px]">
                            <div className="w-[260px] bg-[#f8fafc] p-8 border-r border-gray-100 flex flex-col justify-between">
                                <div>
                                    <Link href="#" className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-slate-900 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all group">
                                        Overview
                                        <i className="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#14B8A6]"></i>
                                    </Link>
                                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Services</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">From enterprise platforms to automation systems, we architect solutions that drive operational excellence.</p>
                                </div>
                            </div>
                            <div className="flex-1 p-8 bg-white">
                                <div className="grid grid-cols-3 gap-4">
                                    {serviceItems.map((item) => (
                                        <Link key={item.name} href={item.link} className={gridItemStyle}>
                                            <h4 className="font-bold text-slate-900 text-[15px] group-hover:text-[#14B8A6] transition-colors mb-0.5">{item.name}</h4>
                                            <p className="text-[11px] text-slate-500 font-normal leading-tight">{item.desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* 3. INSIGHTS MENU */}
            {
                activeMenu === 'insights' && (
                    <div className={`${megaMenuContainer} hidden lg:block`}>
                        <div className="flex min-h-[320px]">
                            <div className="w-[260px] bg-[#f8fafc] p-8 border-r border-gray-100 flex flex-col justify-between">
                                <div>
                                    <Link href="#" className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-slate-900 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all group">
                                        Overview
                                        <i className="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#14B8A6]"></i>
                                    </Link>
                                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Insights</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">Explore our latest research, client success stories, and thought leadership across industries.</p>
                                </div>
                            </div>
                            <div className="flex-1 p-8 bg-white">
                                <div className="grid grid-cols-2 gap-4">
                                    <Link href="/blog" className={gridItemStyle}>
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">Technical Blog</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">Engineering guides, tutorials, and architecture deep dives.</p>
                                    </Link>
                                    <Link href="/case-studies" className={gridItemStyle}>
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">Case Studies</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">See how we built scalable systems for Global 500 companies.</p>
                                    </Link>
                                    <Link href="/whitepapers" className={gridItemStyle}>
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">White Papers</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">Research-backed insights on AI, Cloud, and Security.</p>
                                    </Link>
                                    <Link href="/newsroom" className={gridItemStyle}>
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">Newsroom</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">Press releases and company announcements.</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* 4. COMPANY MENU */}
            {
                activeMenu === 'company' && (
                    <div className={`${megaMenuContainer} hidden lg:block`}>
                        <div className="flex min-h-[320px]">
                            <div className="w-[260px] bg-[#f8fafc] p-8 border-r border-gray-100 flex flex-col justify-between">
                                <div>
                                    <Link href="/about" className="inline-flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-slate-900 hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all group">
                                        Overview
                                        <i className="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#14B8A6]"></i>
                                    </Link>
                                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">Company</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">Technology, trust, and domain expertise in motion.</p>
                                </div>
                            </div>
                            <div className="flex-1 p-8 bg-white">
                                <div className="grid grid-cols-3 gap-4">
                                    <Link href="/about" className={gridItemStyle}>
                                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">About </h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">Learn about our journey, vision, and values.</p>
                                    </Link>
                                    {/* <Link href="/about/management" className={gridItemStyle}>
                                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">Management Team</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Pioneering modern finance.</p>
                                </Link> */}
                                    {/* <Link href="/newsroom" className={gridItemStyle}>
                                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">News</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Latest updates from DevLogix.</p>
                                </Link> */}
                                    {/* <Link href="/investors" className={`block p-4 rounded-lg bg-teal-50/30 hover:bg-teal-50 transition group border border-transparent hover:border-teal-100`}>
                                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">Investors</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Sustainable value & growth.</p>
                                </Link> */}
                                    {/* <Link href="/careers" className={gridItemStyle}>
                                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-[#14B8A6]">Careers</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Join the future of tech.</p>
                                </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </nav >
    )
}