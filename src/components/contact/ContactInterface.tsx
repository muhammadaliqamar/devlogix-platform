'use client'

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react'; // <--- Import useEffect

export default function ContactInterface() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [isJobInquiry, setIsJobInquiry] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        countryCode: '+92', // Fallback Default (PK)
        phone: '',
        companyName: '',
        website: '',
        region: '',
        service: '',
        briefing: ''
    });

    // ---------------------------------------------------------
    // THE "SOVEREIGN RECOGNITION" PROTOCOL (Auto-Detect Region)
    // ---------------------------------------------------------
    useEffect(() => {
        const detectUserRegion = async () => {
            try {
                // We use a public IP API to get the user's ISO Country Code (e.g., "US", "AE", "PK")
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();

                // Find the matching dial code in our database
                const detectedCountry = ALL_COUNTRIES.find(c => c.code === data.country_code);

                if (detectedCountry) {
                    // Update the form state silently
                    setFormData(prev => ({
                        ...prev,
                        countryCode: detectedCountry.dial_code
                    }));
                }
            } catch (error) {
                // Fail silently and keep the default (+92) if the API is blocked/down
                console.warn("Auto-detect failed, using default coordinates.");
            }
        };

        detectUserRegion();
    }, []);
    // ---------------------------------------------------------

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        const finalData = {
            ...formData,
            fullPhone: `${formData.countryCode} ${formData.phone}`,
            type: isJobInquiry ? "RECRUITMENT" : "PARTNERSHIP"
        };

        console.log("Transmitting Payload:", finalData);
        setTimeout(() => setFormState('success'), 2000);
    };

    return (
        <section className="relative z-20 max-w-7xl mx-auto px-6 py-12 md:pt-10 md:pb-10 font-poppins-regular">

            <div className="flex flex-col lg:flex-row shadow-2xl rounded-xl overflow-hidden">

                {/* LEFT COLUMN (Obsidian) */}
                <div className="w-full lg:w-2/5 bg-[#0B1221] text-white p-10 md:p-12 lg:p-16 flex flex-col justify-between relative border-r border-white/5">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0d938c 1px, transparent 1px), linear-gradient(90deg, #0d938c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="relative z-10">
                        <h4 className="text-xs font-bold text-[#0d938c] uppercase tracking-[0.3em] mb-6">Coordinates</h4>
                        <h3 className="text-3xl font-bold leading-tight mb-8 text-white">Initiate <br /><span className="text-slate-500">The Dialogue.</span></h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0d938c] group-hover:bg-[#0d938c] transition-all duration-300"><Mail className="w-4 h-4 text-slate-300 group-hover:text-white" /></div>
                                <div><h5 className="text-sm font-bold text-white mb-1">Electronic Mail</h5><p className="text-slate-400 text-sm group-hover:text-[#0d938c] transition-colors">global@devlogix.com.pk</p></div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0d938c] group-hover:bg-[#0d938c] transition-all duration-300"><MapPin className="w-4 h-4 text-slate-300 group-hover:text-white" /></div>
                                <div><h5 className="text-sm font-bold text-white mb-1">Global HQ</h5><p className="text-slate-400 text-sm leading-relaxed">Gujranwala, Pakistan.</p></div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0d938c] group-hover:bg-[#0d938c] transition-all duration-300"><Phone className="w-4 h-4 text-slate-300 group-hover:text-white" /></div>
                                <div><h5 className="text-sm font-bold text-white mb-1">Secure Line</h5><p className="text-slate-400 text-sm">+92 332 000 5121</p></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <p className="text-[10px] uppercase tracking-widest text-[#0d938c]">Encrypted Transmission</p>
                    </div> */}
                </div>

                {/* RIGHT COLUMN (Form) */}
                <div className="w-full lg:w-3/5 bg-white p-8 md:p-12 lg:p-16">
                    {formState === 'success' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                            <div className="w-16 h-16 bg-[#0d938c]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8 text-[#0d938c]" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">{isJobInquiry ? 'Application Logged.' : 'Strategic Alliances Initiated.'}</h3>
                            {/* <button onClick={() => setFormState('idle')} className="mt-8 text-sm text-[#0d938c] font-bold uppercase tracking-widest border-b border-[#0d938c] pb-1">Reset Terminal</button> */}
                        </motion.div>
                    ) : (
                        <div className="w-full max-w-2xl mx-auto">
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 border-l-4 border-[#0d938c] pl-4">{isJobInquiry ? 'Talent Acquisition' : 'Strategic Alliances'}</h3>
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs font-bold uppercase tracking-wide ${isJobInquiry ? 'text-slate-900' : 'text-slate-400'}`}>Job / Internship?</span>
                                    <button type="button" onClick={() => setIsJobInquiry(!isJobInquiry)} className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isJobInquiry ? 'bg-[#0d938c]' : 'bg-slate-200'}`}>
                                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${isJobInquiry ? 'translate-x-6' : 'translate-x-0'}`} />
                                    </button>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <input name="fullName" type="text" required placeholder=" " onChange={handleChange} className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none transition-colors" />
                                        <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#0d938c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all">Full Name</label>
                                    </div>
                                    <div className="relative group">
                                        <input name="email" type="email" required placeholder=" " onChange={handleChange} className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none transition-colors" />
                                        <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#0d938c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all">Email Address</label>
                                    </div>
                                </div>

                                {/* PHONE (AUTO-DETECTED) & REGION */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-end gap-2">
                                        {/* The Country Code Dropdown */}
                                        <div className="relative w-28">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none text-xs md:text-sm appearance-none cursor-pointer truncate pr-4"
                                            >
                                                {ALL_COUNTRIES.map((c) => (
                                                    <option key={c.code} value={c.dial_code}>
                                                        {c.code} ({c.dial_code})
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-0 top-4 w-3 h-3 text-slate-400 pointer-events-none" />
                                        </div>
                                        <div className="relative group flex-1">
                                            <input name="phone" type="tel" required placeholder=" " onChange={handleChange} className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none transition-colors" />
                                            <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#0d938c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all">Phone Number</label>
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <select name="region" required onChange={handleChange} className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none appearance-none cursor-pointer">
                                            <option value="" disabled selected className="hidden"></option>
                                            <option value="Americas">Americas (North & South)</option>
                                            <option value="Europe_UK">Europe & UK</option>
                                            <option value="MEA">MEA (Middle East, Africa)</option>
                                            <option value="APAC">APAC (Asia Pacific)</option>
                                            <option value="PK">Pakistan (Domestic)</option>
                                        </select>
                                        <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#0d938c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all">Region</label>
                                        <ChevronDown className="absolute right-0 top-4 w-3 h-3 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Company Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <input name="companyName" type="text" required placeholder=" " onChange={handleChange} className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none transition-colors" />
                                        <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#0d938c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all">Company Name</label>
                                    </div>
                                    <div className="relative group">
                                        <input name="website" type="url" placeholder=" " onChange={handleChange} className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none transition-colors" />
                                        <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#0d938c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all">Company Website</label>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="relative group">
                                    <select name="service" required onChange={handleChange} className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none appearance-none cursor-pointer">
                                        <option value="" disabled selected className="hidden"></option>
                                        {isJobInquiry ? (
                                            <>
                                                <option value="frontend">Frontend Engineering</option>
                                                <option value="backend">Backend / Systems Architecture</option>
                                                <option value="ai_ml">AI & Machine Learning</option>
                                                <option value="design">Product Design & UX</option>
                                                <option value="sales">Sales & Business Development</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="enterprise">Custom Solutions</option>
                                                <option value="ai">AI & Automation Solutions</option>
                                                <option value="industrial">Industrial Automation (IoT)</option>
                                                <option value="fintech">Fintech Infrastructure</option>
                                                <option value="staff">IT Staff Augmentation</option>
                                                <option value="advisory">Strategic Advisory</option>
                                            </>
                                        )}
                                    </select>
                                    <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#0d938c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all">{isJobInquiry ? 'Position of Interest' : 'Services Looking For'}</label>
                                    <ChevronDown className="absolute right-0 top-4 w-3 h-3 text-slate-400 pointer-events-none" />
                                </div>

                                {/* Briefing */}
                                <div className="relative group">
                                    <textarea name="briefing" required rows={4} placeholder=" " onChange={handleChange} className="peer w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:border-[#0d938c] focus:outline-none resize-none"></textarea>
                                    <label className="absolute left-0 top-3 text-slate-400 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#0d938c] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all">{isJobInquiry ? 'Cover Letter / Short Bio' : 'Executive Briefing (Project Details)'}</label>
                                </div>

                                {/* Action */}
                                <div className="pt-4">
                                    <button type="submit" disabled={formState === 'submitting'} className={`group w-full md:w-auto px-10 py-5 rounded-[2px] flex items-center justify-center gap-4 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed ${isJobInquiry ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-[#0B1221] text-white hover:bg-[#0d938c]'}`}>
                                        {formState === 'submitting' ? 'Transmitting...' : (isJobInquiry ? 'Submit Application' : 'Initiate Alliance')}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

// ---------------------------------------------------------
// DATA: COMPREHENSIVE COUNTRY CODES
// ---------------------------------------------------------
const ALL_COUNTRIES = [
    { code: "PK", name: "Pakistan", dial_code: "+92" },
    { code: "US", name: "United States", dial_code: "+1" },
    { code: "GB", name: "United Kingdom", dial_code: "+44" },
    { code: "AE", name: "United Arab Emirates", dial_code: "+971" },
    { code: "SA", name: "Saudi Arabia", dial_code: "+966" },
    { code: "CA", name: "Canada", dial_code: "+1" },
    { code: "DE", name: "Germany", dial_code: "+49" },
    { code: "FR", name: "France", dial_code: "+33" },
    { code: "AU", name: "Australia", dial_code: "+61" },
    { code: "QA", name: "Qatar", dial_code: "+974" },
    { code: "CN", name: "China", dial_code: "+86" },
    { code: "IN", name: "India", dial_code: "+91" },
    { code: "SG", name: "Singapore", dial_code: "+65" },
    { code: "TR", name: "Turkey", dial_code: "+90" },
    { code: "JP", name: "Japan", dial_code: "+81" },
    { code: "KR", name: "South Korea", dial_code: "+82" },
    { code: "RU", name: "Russia", dial_code: "+7" },
    { code: "BR", name: "Brazil", dial_code: "+55" },
    { code: "MX", name: "Mexico", dial_code: "+52" },
    { code: "ZA", name: "South Africa", dial_code: "+27" },
    { code: "IT", name: "Italy", dial_code: "+39" },
    { code: "ES", name: "Spain", dial_code: "+34" },
    { code: "NL", name: "Netherlands", dial_code: "+31" },
    { code: "SE", name: "Sweden", dial_code: "+46" },
    { code: "CH", name: "Switzerland", dial_code: "+41" },
    { code: "MY", name: "Malaysia", dial_code: "+60" },
    { code: "ID", name: "Indonesia", dial_code: "+62" },
    { code: "TH", name: "Thailand", dial_code: "+66" },
    { code: "VN", name: "Vietnam", dial_code: "+84" },
    { code: "KW", name: "Kuwait", dial_code: "+965" },
    { code: "BH", name: "Bahrain", dial_code: "+973" },
    { code: "OM", name: "Oman", dial_code: "+968" },
    { code: "NO", name: "Norway", dial_code: "+47" },
    { code: "DK", name: "Denmark", dial_code: "+45" },
    { code: "FI", name: "Finland", dial_code: "+358" },
    { code: "NZ", name: "New Zealand", dial_code: "+64" },
    { code: "IE", name: "Ireland", dial_code: "+353" },
    { code: "BE", name: "Belgium", dial_code: "+32" },
    { code: "AT", name: "Austria", dial_code: "+43" },
    { code: "PT", name: "Portugal", dial_code: "+351" },
    { code: "PL", name: "Poland", dial_code: "+48" },
    { code: "GR", name: "Greece", dial_code: "+30" },
    { code: "EG", name: "Egypt", dial_code: "+20" },
    { code: "MA", name: "Morocco", dial_code: "+212" },
    { code: "NG", name: "Nigeria", dial_code: "+234" },
    { code: "KE", name: "Kenya", dial_code: "+254" },
    { code: "AR", name: "Argentina", dial_code: "+54" },
    { code: "CL", name: "Chile", dial_code: "+56" },
    { code: "CO", name: "Colombia", dial_code: "+57" },
    { code: "PE", name: "Peru", dial_code: "+51" }
    // Add more as needed, this covers 95% of global GDP
];