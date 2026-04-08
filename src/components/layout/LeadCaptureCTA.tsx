'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { countryCodes } from '@/lib/countryCodes';

export interface LeadCaptureLocalization {
  dir?: 'ltr' | 'rtl';
  leftTitle?: string;
  leftSubtitle?: string;
  headingText?: string;
  headingHighlight?: string;
  subheading?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  emailSubtext?: string;
  servicePlaceholder?: string;
  services?: { label: string; value: string }[];
  dialCode?: string;
  phonePlaceholder?: string;
  projectPlaceholder?: string;
  budgetPlaceholder?: string;
  ndaLabel?: string;
  submitText?: string;
  successTitle?: string;
  successMessage?: string;
  successButton?: string;
  successRedirect?: string;
}

const defaultLocalization: LeadCaptureLocalization = {
  dir: 'ltr',
  leftTitle: 'DevLogix',
  leftSubtitle: 'Empowering Your Digital Journey',
  headingText: "Have Questions? Let's",
  headingHighlight: "Talk.",
  subheading: "We have got the answers to your questions.",
  namePlaceholder: "Your name *",
  emailPlaceholder: "Your email *",
  emailSubtext: "We recommend using your work email.",
  servicePlaceholder: "Select the service you need *",
  services: [
    { label: "Custom AI & Machine Learning", value: "Custom AI & Machine Learning" },
    { label: "Enterprise ERP Solutions", value: "Enterprise ERP Solutions" },
    { label: "Full-Stack Web Engineering", value: "Full-Stack Web Engineering" },
    { label: "Custom Software Development", value: "Custom Software Development" },
    { label: "IT Staff Augmentation", value: "IT Staff Augmentation" },
    { label: "Enterprise Mobile App Development", value: "Enterprise Mobile App Development" },
    { label: "Cloud Architecture & DevOps", value: "Cloud Architecture & DevOps" },
    { label: "Blockchain Development Services", value: "Blockchain Development Services" },
    { label: "Cybersecurity", value: "Cybersecurity" },
    { label: "Strategic Tech Advisory", value: "Strategic Tech Advisory" },
    { label: "Data Science & Analytics", value: "Data Science & Analytics" },
    { label: "Enterprise UX/UI Design", value: "Enterprise UX/UI Design" },
  ],
  dialCode: "PK +92",
  phonePlaceholder: "(xxx) xxxxxxx *",
  projectPlaceholder: "Please describe your project. *",
  budgetPlaceholder: "What is your budget? *",
  ndaLabel: "Request NDA",
  submitText: "Submit",
  successTitle: "Message Sent!",
  successMessage: "Thank you for reaching out. A team member will get back to you shortly.",
  successButton: "Send another message"
};

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  dialCode: z.string().min(1, 'Please select a code'),
  message: z.string().min(10, 'Please describe your project'),
  budget: z.string().min(1, 'Please specify a budget'),
  nda: z.boolean(),
  botField: z.string().max(0, 'Spam detected').optional(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

export default function LeadCaptureCTA({ localization }: { localization?: LeadCaptureLocalization }) {
  const content = { ...defaultLocalization, ...localization };
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      dialCode: content.dialCode || 'US +1',
      phone: '',
      message: '',
      budget: '',
      nda: false,
      botField: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg('');

    // Prefix phone internally before submitting to API
    const finalData = { ...data, phone: `${data.dialCode} ${data.phone}` };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        reset();
        router.push(content.successRedirect || '/thank-you');
      } else {
        setErrorMsg(result.error || 'Failed to submit the form. Please try again.');
      }
    } catch (error) {
      // Safe default fallback error
      setErrorMsg('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full font-poppins-regular relative bg-white" dir={content.dir}>
      {/* Main Container - Full Width Edge to Edge */}
      <div className="flex flex-col lg:flex-row w-full overflow-hidden items-stretch border-t border-slate-100">

        {/* Left Panel - Abstract engaging graphic */}
        <div className="lg:w-[35%] bg-slate-950 relative overflow-hidden flex flex-col justify-center items-center py-10 p-8 lg:p-12">
          {/* Concentric Circles & Nodes overlay */}
          <div className={`absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none ${content.dir === 'rtl' ? '-scale-x-100' : ''}`}>
            <div className="absolute w-[800px] h-[800px] border-[0.5px] border-white/20 rounded-full translate-x-1/3"></div>
            <div className="absolute w-[600px] h-[600px] border-[0.5px] border-white/30 rounded-full translate-x-1/3"></div>
            <div className="absolute w-[400px] h-[400px] border-[0.5px] border-white/40 rounded-full translate-x-1/3"></div>
            <div className="absolute w-[200px] h-[200px] border-[0.5px] border-white/50 rounded-full translate-x-1/3"></div>

            {/* Abstract Nodes representing people/connections */}
            <div className="absolute w-12 h-12 bg-white/20 backdrop-blur-md rounded-full shadow-lg right-[10%] top-[20%] flex items-center justify-center border border-white/30">
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" />
              </div>
            </div>
            <div className="absolute w-10 h-10 bg-white/10 backdrop-blur-md rounded-full shadow-lg left-[60%] top-[40%] flex items-center justify-center border border-white/20">
              <div className="w-7 h-7 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=e2e8f0" alt="Avatar" />
              </div>
            </div>
            <div className="absolute w-14 h-14 bg-white/20 backdrop-blur-md rounded-full shadow-lg left-[30%] bottom-[30%] flex items-center justify-center border border-white/30">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Jocelyn&backgroundColor=e2e8f0" alt="Avatar" />
              </div>
            </div>
            <div className="absolute w-8 h-8 bg-orange-400 rounded-full left-[40%] top-[15%] shadow-md border-2 border-white"></div>
            <div className="absolute w-4 h-4 bg-teal-400 rounded-full right-[20%] bottom-[20%] shadow-md border border-white"></div>
            <div className="absolute w-6 h-6 bg-yellow-400 rounded-full left-[70%] top-[70%] shadow-md border border-white"></div>
          </div>

          {/* <div className={`relative z-10 w-full text-center lg:text-left text-white mt-auto pt-8 ${content.dir === 'rtl' ? 'lg:text-right' : ''}`}>
                <h3 className="text-2xl font-bold font-poppins-regular mb-1 text-white">{content.leftTitle}</h3>
                <p className="text-teal-500 font-light text-xs tracking-wide">{content.leftSubtitle}</p>
            </div> */}
        </div>

        {/* Right Panel - Form */}
        <div className="lg:w-[65%] bg-white py-10 px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-2 text-slate-800">
            {content.headingText} <span className="text-[#0d938c]">{content.headingHighlight}</span>
          </h2>
          <p className="text-slate-500 mb-10 text-sm">{content.subheading}</p>

          {isSuccess ? (
            <div className="bg-[#f0f9f9] border border-[#d2eeed] rounded-2xl p-8 text-center mt-10">
              <div className="bg-[#e0f5f4] rounded-full p-4 mb-4 mx-auto w-fit">
                <CheckCircle2 className="w-12 h-12 text-[#0d938c]" />
              </div>
              <h4 className="text-2xl font-semibold text-slate-800 mb-2">{content.successTitle}</h4>
              <p className="text-slate-600">{content.successMessage}</p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-6 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded transition-colors font-medium text-sm"
              >
                {content.successButton}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-2">
              <input
                type="text"
                {...register('botField')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 rounded text-sm font-medium border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder={content.namePlaceholder}
                    {...register('name')}
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-slate-300 group-hover:border-[#0d938c]'} text-slate-800 px-0 py-2 focus:outline-none focus:border-[#0d938c] focus:border-b-2 transition-all placeholder:text-slate-400 placeholder:font-light text-sm`}
                  />
                  {errors.name && <p className={`text-red-500 text-[10px] mt-1 absolute -bottom-4 ${content.dir === 'rtl' ? 'right-0' : 'left-0'}`}>{content.dir === 'rtl' ? 'الاسم مطلوب' : errors.name.message}</p>}
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    placeholder={content.emailPlaceholder}
                    {...register('email')}
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-slate-300 group-hover:border-[#0d938c]'} text-slate-800 px-0 py-2 focus:outline-none focus:border-[#0d938c] focus:border-b-2 transition-all placeholder:text-slate-400 placeholder:font-light text-sm`}
                  />
                  <p className={`text-[10px] text-slate-400 mt-1 absolute -bottom-4 ${content.dir === 'rtl' ? 'right-0' : 'left-0'}`}>{content.emailSubtext}</p>
                  {errors.email && <p className={`text-red-500 text-[10px] mt-1 absolute -bottom-8 ${content.dir === 'rtl' ? 'right-0' : 'left-0'}`}>{content.dir === 'rtl' ? 'البريد الإلكتروني غير صالح' : errors.email.message}</p>}
                </div>
              </div>

              <div className="relative group pt-4">
                <select
                  {...register('service')}
                  className={`w-full bg-transparent border-b ${errors.service ? 'border-red-500' : 'border-slate-300 group-hover:border-[#0d938c]'} text-slate-800 px-0 py-2 focus:outline-none focus:border-[#0d938c] focus:border-b-2 transition-all placeholder:text-slate-400 placeholder:font-light appearance-none cursor-pointer text-sm`}
                  defaultValue=""
                >
                  <option value="" disabled className="text-slate-400">{content.servicePlaceholder}</option>
                  {content.services?.map((svc, i) => (
                    <option key={i} value={svc.value}>{svc.label}</option>
                  ))}
                </select>
                <div className={`absolute top-[20px] pointer-events-none text-slate-400 ${content.dir === 'rtl' ? 'left-0' : 'right-0'}`}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {errors.service && <p className={`text-red-500 text-[10px] mt-1 absolute -bottom-4 ${content.dir === 'rtl' ? 'right-0' : 'left-0'}`}>{content.dir === 'rtl' ? 'يرجى اختيار خدمة' : errors.service.message}</p>}
              </div>

              <div className="relative group pt-4">
                <div className="flex">
                  <div className="w-[110px] flex-shrink-0 flex items-center border-b border-slate-300 group-hover:border-[#0d938c] transition-all relative">
                    <select
                      {...register('dialCode')}
                      className="w-full h-full bg-transparent text-slate-600 text-[13px] tracking-wide focus:outline-none cursor-pointer py-2 pr-4 appearance-none"
                      dir="ltr"
                    >
                      {countryCodes.map(c => {
                        const val = `${c.code} ${c.dial}`;
                        return <option key={c.code} value={val}>{val}</option>;
                      })}
                    </select>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className={`w-3 h-3 text-slate-400 ${content.dir === 'rtl' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="tel"
                    placeholder={content.phonePlaceholder}
                    {...register('phone')}
                    className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-slate-300 group-hover:border-[#0d938c]'} text-slate-800 px-3 py-2 focus:outline-none focus:border-[#0d938c] focus:border-b-2 transition-all placeholder:text-slate-400 placeholder:font-light text-sm`}
                    dir="ltr"
                  />
                </div>
                {errors.phone && <p className={`text-red-500 text-[10px] mt-1 absolute -bottom-4 ${content.dir === 'rtl' ? 'right-[100px]' : 'left-[100px]'}`}>{content.dir === 'rtl' ? 'رقم الهاتف مطلوب' : errors.phone.message}</p>}
              </div>

              <div className="relative group pt-4">
                <input
                  type="text"
                  placeholder={content.projectPlaceholder}
                  {...register('message')}
                  className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-slate-300 group-hover:border-[#0d938c]'} text-slate-800 px-0 py-2 focus:outline-none focus:border-[#0d938c] focus:border-b-2 transition-all placeholder:text-slate-400 placeholder:font-light text-sm`}
                />
                {errors.message && <p className={`text-red-500 text-[10px] mt-1 absolute -bottom-4 ${content.dir === 'rtl' ? 'right-0' : 'left-0'}`}>{content.dir === 'rtl' ? 'الرسالة مطلوبة' : errors.message.message}</p>}
              </div>

              <div className="relative group pt-4">
                <select
                  {...register('budget')}
                  className={`w-full bg-transparent border-b ${errors.budget ? 'border-red-500' : 'border-slate-300 group-hover:border-[#0d938c]'} text-slate-800 px-0 py-2 focus:outline-none focus:border-[#0d938c] focus:border-b-2 transition-all placeholder:text-slate-400 placeholder:font-light appearance-none cursor-pointer text-sm`}
                  defaultValue=""
                >
                  <option value="" disabled className="text-slate-400">{content.budgetPlaceholder}</option>
                  <option value="Under $50,000">Under $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="$250,000+">$250,000+</option>
                </select>
                <div className={`absolute top-[20px] pointer-events-none text-slate-400 ${content.dir === 'rtl' ? 'left-0' : 'right-0'}`}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {errors.budget && <p className={`text-red-500 text-[10px] mt-1 absolute -bottom-4 ${content.dir === 'rtl' ? 'right-0' : 'left-0'}`}>{content.dir === 'rtl' ? 'الميزانية مطلوبة' : errors.budget.message}</p>}
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer group w-fit">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      {...register('nda')}
                      className="peer appearance-none w-4 h-4 border border-slate-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0d938c]/30 checked:bg-[#0d938c] checked:border-[#0d938c] transition-all cursor-pointer m-0"
                    />
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-medium text-slate-500 group-hover:text-slate-800 transition-colors tracking-wide">{content.ndaLabel}</span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-slate-950 hover:bg-slate-800 text-white text-sm font-medium py-2.5 px-6 rounded transition-all duration-300 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 ${content.dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      {content.submitText}
                      <ArrowRight className={`w-4 h-4 ${content.dir === 'rtl' ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
