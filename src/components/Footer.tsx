'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter, Youtube, Instagram, Globe, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    // SUPPRESS GLOBAL FOOTER ON KSA ROUTE
    if (pathname?.startsWith('/ksa')) return null;

    return (
        <footer className="bg-slate-950 text-slate-400 font-poppins-regular border-t border-slate-900 relative z-10 overflow-hidden">

            {/* BACKGROUND TEXTURE (Subtle "Sovereign" Pattern) */}
            <div className="absolute top-0 right-0 w-[600px] h-full pointer-events-none z-0 opacity-[0.02]">
                <svg viewBox="0 0 500 500" className="w-full h-full text-white fill-none stroke-current stroke-[1]">
                    <path d="M100 0 L300 250 L100 500" />
                    <path d="M200 0 L400 250 L200 500" />
                    <path d="M300 0 L500 250 L300 500" />
                </svg>
            </div>

            {/* MAIN GRID SECTION */}
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20 py-12 lg:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* COLUMN 1: Brand, Locations & Socials */}
                    <div className="space-y-8 col-span-1 md:col-span-2 lg:col-span-1">
                        {/* Logo */}
                        <Link href="/" className="inline-block">
                            <Image
                                src="/devlogix-logo-white.svg"
                                alt="DevLogix"
                                width={160}
                                height={50}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>

                        <div className="space-y-6 text-sm">

                            {/* --- 1. GLOBAL DELIVERY CENTER --- */}

                            <address className="bg-white/5 rounded-[4px] p-5 border border-white/10 relative overflow-hidden group hover:border-[#0d938c]/50 transition-colors duration-500 not-italic">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#0d938c]"></div>
                                <span className="text-white font-bold mb-3 flex items-center gap-2 text-xs uppercase tracking-widest">
                                    <Globe size={14} className="text-[#0d938c]" />
                                    Global Delivery Center
                                </span>
                                <div className="mb-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        {/* <span className="text-lg">🇵🇰</span> */}
                                        <span className="text-white font-bold">Pakistan</span>
                                    </div>
                                    <span className="leading-relaxed text-slate-400 text-xs block">
                                        Grand Trunk Road, Rahwali Cantt,<br />Gujranwala
                                    </span>
                                </div>
                            </address>

                            {/* --- 2. REGIONAL HUBS --- */}
                            {/* <div>
                                    <h6 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Regional Hubs</h6>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white/5 rounded-[4px] p-3 border border-white/10 hover:border-[#0d938c]/50 transition-colors duration-500">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-lg">🇺🇸</span>
                                                <strong className="text-white text-xs">USA</strong>
                                            </div>
                                            <p className="text-[10px] leading-snug text-slate-500">San Jose, CA</p>
                                        </div>
                                        <div className="bg-white/5 rounded-[4px] p-3 border border-white/10 hover:border-[#0d938c]/50 transition-colors duration-500">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-lg">🇬🇧</span>
                                                <strong className="text-white text-xs">UK</strong>
                                            </div>
                                            <p className="text-[10px] leading-snug text-slate-500">London, EC1V</p>
                                        </div>
                                        <div className="bg-white/5 rounded-[4px] p-3 border border-white/10 hover:border-[#0d938c]/50 transition-colors duration-500">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-lg">🇦🇪</span>
                                                <strong className="text-white text-xs">UAE</strong>
                                            </div>
                                            <p className="text-[10px] leading-snug text-slate-500">Dubai Internet City</p>
                                        </div>
                                    </div>
                                </div> */}

                            {/* --- 3. SOCIAL ICONS (Anchored here) --- */}
                            <div className="pt-2">
                                <h6 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Connect</h6>
                                <div className="flex gap-3">
                                    {[
                                        { icon: Linkedin, href: "https://www.linkedin.com/company/devlogix-official/" },
                                        { icon: Facebook, href: "http://facebook.com/devlogixofficial/" },
                                        // { icon: Twitter, href: "#" },
                                        { icon: Instagram, href: "https://www.instagram.com/devlogixofficial/" },
                                        // { icon: Youtube, href: "#" },
                                    ].map((Social, index) => (
                                        <a
                                            key={index}
                                            href={Social.href}
                                            className="w-8 h-8 rounded-[4px] bg-white/5 border border-white/10 hover:bg-[#0d938c] hover:border-[#0d938c] hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300"
                                        >
                                            <Social.icon size={14} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* COLUMN 2: Services */}
                    <div className="lg:pl-8">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.25em] mb-8">
                            Capabilities
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/services/ai-ml" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">AI & Machine Learning</Link></li>
                            {/* <li><Link href="/services/iot" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">IoT Solutions</Link></li> */}
                            <li><Link href="/services/cybersecurity" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Cybersecurity</Link></li>

                            <li><Link href="/services/custom-software" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Custom Software</Link></li>
                            <li><Link href="/services/web-development" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Full-Stack Web Development</Link></li>
                            <li><Link href="/services/mobile-app" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Mobile App Development</Link></li>
                            <li><Link href="/services/cloud-devops" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Cloud & DevOps</Link></li>
                            <li><Link href="/services/blockchain" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Blockchain & Crypto</Link></li>



                            <li><Link href="/services/staff-augmentation" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">IT Staff Augmentation</Link></li>
                            <li><Link href="/services/consulting" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Strategic Tech Advisory</Link></li>
                            <li><Link href="/services/data-science" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Data Science & Analytics</Link></li>
                            <li><Link href="/services/ui-ux" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Product Design & UX</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 3: Industries */}
                    <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.25em] mb-8">
                            Sectors
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/industries/textile-manufacturing" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Textile & Manufacturing</Link></li>
                            <li><Link href="/industries/supplychain" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Supply Chain & Logistics</Link></li>
                            <li><Link href="/industries/fintech" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Fintech & Banking</Link></li>
                            <li><Link href="/industries/govtech" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Government & Public Sector</Link></li>
                            <li><Link href="/industries/healthcare" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Healthcare & Life Sciences</Link></li>
                            <li><Link href="/industries/retail" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Retail & E-Commerce</Link></li>
                            <li><Link href="/industries/realestate" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Real Estate & Construction</Link></li>
                            <li><Link href="/industries/energy" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Energy & Utilities</Link></li>
                            <li><Link href="/industries/saas" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">SaaS & High-Growth Startups</Link></li>
                            <li><Link href="/industries/legal" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Legal & Professional Services</Link></li>
                            <li><Link href="/industries/telecom" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Telecommunications</Link></li>
                            <li><Link href="/industries/natural-resources" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Natural Resources</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: Company & Newsletter */}
                    <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.25em] mb-8">
                            Institution
                        </h4>
                        <ul className="space-y-4 text-sm mb-12">
                            <li><Link href="/about" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">About Us</Link></li>
                            {/* <li><Link href="/about/board" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Board of Directors</Link></li> */}
                            {/* <li><Link href="/careers" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Careers</Link></li> */}
                            {/* <li><Link href="/case-studies" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Case Studies</Link></li> */}
                            {/* <li><Link href="/whitepapers" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Whitepapers</Link></li> */}
                            {/* <li><Link href="/blog" className="text-slate-400 hover:text-[#0d938c] transition-colors duration-300 block">Insights Stream</Link></li> */}
                        </ul>

                        {/* --- NEWSLETTER (Anchored here) --- */}
                        <div className="pt-6 border-t border-white/5">
                            <h5 className="text-white font-bold mb-2 text-sm">Subscribe to Intelligence.</h5>
                            <p className="text-xs text-slate-500 mb-4 leading-relaxed">Strategic insights on the future of sovereign infrastructure.</p>
                            <form className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-[4px] px-4 py-3 text-xs text-white focus:outline-none focus:border-[#0d938c] transition-all"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#0d938c] hover:bg-[#0a706b] text-white px-4 py-3 rounded-[4px] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(13,147,140,0.2)] flex items-center justify-center gap-2"
                                >
                                    Subscribe <ArrowRight size={12} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="bg-black border-t border-slate-900 relative z-20">
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-600 uppercase tracking-wider font-semibold">
                    <p>&copy; {new Date().getFullYear()} DevLogix Technology. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        {/* <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link> */}
                        {/* <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link> */}
                        <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}