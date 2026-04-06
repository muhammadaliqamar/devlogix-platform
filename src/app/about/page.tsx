import AboutHero from '@/components/about/AboutHero';
import NorthStar from '@/components/about/NorthStar';
import ChairmansNote from '@/components/about/ChairmansNote';
import DevLogixStandard from '@/components/about/DevLogixStandard';
import EvolutionaryPath from '@/components/about/EvolutionaryPath';
import LeadershipCarousel from '@/components/about/LeadershipCarousel';
import GlobalNexus from '@/components/about/GlobalNexus';
import AboutCTA from '@/components/about/AboutCTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Enterprise Software Innovation',
  description: 'Learn about DevLogix: our vision, our leadership, and the evolutionary path of our enterprise digital transformation services.',
  alternates: {
    canonical: '/about',
  }
};

export default function AboutPage() {
    return (
        <main className="w-full bg-slate-50 min-h-screen">
            {/* SECTION 1: THE VISION ANCHOR */}
            <AboutHero />
            <NorthStar />
            <ChairmansNote />
            <LeadershipCarousel />
            <DevLogixStandard />
            <EvolutionaryPath />

            {/* <GlobalNexus /> */}
            <AboutCTA />


        </main>
    );
}