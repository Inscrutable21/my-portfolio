'use client'

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import all components with proper error boundaries
const Navbar = dynamic(() => import('../components/Navbar'), { 
  ssr: true,
  loading: () => <div>Loading...</div>
});

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
  </div>
);

const Hero = dynamic(() => import('../components/Hero'), {
  loading: () => <LoadingSpinner />,
  ssr: false // Disable SSR for Hero component
});

const About = dynamic(() => import('../components/About'), {
  ssr: true,
  loading: () => <div>Loading...</div>
});

const Skills = dynamic(() => import('../components/Skills'), {
  ssr: true,
  loading: () => <div>Loading...</div>
});

const Projects = dynamic(() => import('../components/Projects'), {
  ssr: true,
  loading: () => <div>Loading...</div>
});

const Contact = dynamic(() => import('../components/Contact'), {
  ssr: true,
  loading: () => <div>Loading...</div>
});

const SocialLinks = dynamic(() => import('../components/SocialLinks'), {
  ssr: true,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Updated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        {/* Updated gradients to white */}
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Components */}
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SocialLinks />
    </main>
  );
}