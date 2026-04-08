import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request Received',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-poppins-regular px-6 py-26 text-center bg-slate-950 overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center p-10 md:p-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="w-20 h-20 bg-[#0d938c]/20 border border-[#0d938c]/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(13,147,140,0.3)]">
          <CheckCircle className="w-10 h-10 text-[#14b8a6]" />
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
          Request Received.
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Your NDA is now active, and your project brief is secure. Our senior architects are reviewing your requirements and will reach out shortly to schedule your technical consultation.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#0d938c] hover:bg-[#0a706b] text-white font-medium text-sm py-3.5 px-10 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(13,147,140,0.4)] hover:shadow-[0_0_30px_rgba(13,147,140,0.6)]"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
