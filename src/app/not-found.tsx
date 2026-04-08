import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-poppins-regular px-6 py-32 text-center bg-slate-950 overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950 z-0" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

        {/* Glowing 404 Number */}
        <div className="relative mb-6">
          <span className="text-[160px] md:text-[200px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#0d938c]/15 border border-[#0d938c]/25 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(13,147,140,0.25)]">
              <Search className="w-9 h-9 text-[#14b8a6]" />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="p-8 md:p-12 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-2xl w-full">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0d938c] hover:bg-[#0a706b] text-white font-medium text-sm py-3.5 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(13,147,140,0.35)] hover:shadow-[0_0_30px_rgba(13,147,140,0.55)]"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] text-slate-300 hover:text-white font-medium text-sm py-3.5 px-8 rounded-lg transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { label: 'Services', href: '/services' },
            { label: 'Industries', href: '/industries' },
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-slate-500 hover:text-[#14b8a6] transition-colors uppercase tracking-widest font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
