
export default function ContactHero() {
    return (
        <section
            aria-labelledby="contact-hero-title"
            className="relative w-full h-[50vh] bg-[#0B1221] flex items-center justify-center overflow-hidden font-poppins-regular"
        >

            {/* 1. BACKGROUND AMBIENCE (Subtle & Dark) */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                aria-hidden="true" // SEO FIX 1: Explicitly hide decorative grid from screen readers
                style={{
                    backgroundImage: 'linear-gradient(#0d938c 1px, transparent 1px), linear-gradient(90deg, #0d938c 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0d938c] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

            {/* 2. TEXT CONTENT */}
            <div className="relative z-10 text-center mt-10">
                <h1
                    id="contact-hero-title" // Linked to aria-labelledby above
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up"
                    style={{ animationDuration: '0.8s', animationFillMode: 'both' }}
                >
                    Partner With <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                        DevLogix
                    </span>
                    {/* SEO FIX 2: Visually hidden keywords to define the page intent for Google */}
                    <span className="sr-only"> - Custom Software Development & AI Consultations</span>
                </h1>

                {/* SEO FIX 3: Added an H2 (even if small/subtle) to reinforce intent */}
                <p
                    className="mt-4 text-slate-400 text-sm md:text-base max-w-md mx-auto px-6 font-light animate-fade-in-up"
                    style={{ animationDuration: '0.8s', animationDelay: '0.2s', animationFillMode: 'both' }}
                >
                    Connect with our global engineering hubs to scale your digital transformation.
                </p>
            </div>

        </section>
    );
}