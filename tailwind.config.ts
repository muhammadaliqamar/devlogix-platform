import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Scan the app folder
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scan the components folder
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Scan pages (if you have them)
    ],
    theme: {
        extend: {
            fontFamily: {
                // This makes Poppins the default font for the whole site
                sans: ['var(--font-poppins)', 'sans-serif'],
                'poppins-regular': ['var(--font-poppins)', 'sans-serif'],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'infinite-scroll': 'infinite-scroll 40s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;