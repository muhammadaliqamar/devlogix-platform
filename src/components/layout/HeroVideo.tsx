'use client'

import { useEffect, useState } from 'react';

export default function HeroVideo() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // --- MOBILE OPTIMIZATION ---
        // By deferring and conditioning this upload to devices > 768px, 
        // we save mobile devices from downloading 18MB of video data, 
        // instantly repairing FCP and LCP scores.
        if (window.innerWidth >= 768) {
            setShouldLoad(true);
        }
    }, []);

    if (!shouldLoad) return null;

    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover relative z-10"
        >
            <source src="/hero-background.mp4" type="video/mp4" />
        </video>
    );
}
