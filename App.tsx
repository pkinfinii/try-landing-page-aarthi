
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import QualityValueSection from './components/QualityValueSection';
import ExpertPanel from './components/ExpertPanel';
import PreferenceSection from './components/PreferenceSection';
import MediaCoverage from './components/MediaCoverage';
import FAQSection from './components/FAQSection';
import BloodTestExplorer from './components/BloodTestExplorer';
import Testimonials from './components/Testimonials';
import QuickConnect from './components/QuickConnect';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <TrustStats />
        {/* Section 1: Individual Biomarkers */}
        <section id="blood-tests">
          <BloodTestExplorer />
        </section>
        {/* Section 2: Quality & Robotics */}
        <QualityValueSection />
        {/* Section 3: Clinical Authority */}
        <ExpertPanel />
        {/* Section 4: Why 1.7cr Prefer Us */}
        <PreferenceSection />
        {/* Section 5: Media Coverage */}
        <MediaCoverage />
        {/* Section 6: Clarity Hub (FAQ) */}
        <FAQSection />
        <section id="reviews">
          <Testimonials />
        </section>
        <QuickConnect />
      </main>
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <button className="w-full bg-[#038f5c] text-white py-4 rounded-xl shadow-2xl font-bold flex items-center justify-center space-x-2 active:scale-95 transition-transform">
          <span>Book Your Scan Now</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
