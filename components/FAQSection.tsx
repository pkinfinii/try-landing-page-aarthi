
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories: FAQCategory[] = [
    {
      id: 'general',
      label: 'General Queries',
      items: [
        {
          question: "Why choose Aarthi Scans and Labs for your blood test?",
          answer: "Aarthi Scans is India's most trusted diagnostic chain with 35+ years of legacy. We combine NABL-accredited precision with the industry's most affordable flat-rate pricing, ensuring world-class diagnostics are accessible to every family."
        },
        {
          question: "What types of blood tests are available?",
          answer: "We offer an exhaustive menu of over 2000+ tests ranging from routine CBC and Thyroid profiles to advanced genomic sequencing and specialized allergy panels, all processed in our high-tech robotic labs."
        }
      ]
    },
    {
      id: 'logistics',
      label: 'Samples & Reports',
      items: [
        {
          question: "Is home sample collection available?",
          answer: "Yes! Our premium home collection service is handled by trained phlebotomists. We follow strict hygiene protocols, using vacuum-sealed tubes and cold-chain transport to maintain sample integrity from your doorstep to our lab."
        },
        {
          question: "When will I get my blood test results?",
          answer: "Speed is our strength. Most routine test results (CBC, Sugar, Thyroid) are delivered within 6-12 hours via WhatsApp, Email, and our mobile app. Some specialized tests may take 24-48 hours."
        }
      ]
    },
    {
      id: 'quality',
      label: 'Cost & Accuracy',
      items: [
        {
          question: "How much does a blood test cost at Aarthi Scans?",
          answer: "We operate on a 'High Volume, Low Margin' model. By processing millions of samples, we are able to offer tests at 40-60% lower costs than corporate hospitals without ever compromising on clinical quality."
        },
        {
          question: "How accurate are blood test reports?",
          answer: "Our labs are NABL and NABH accredited. We employ a 'Double Verification' system where every report is scrutinized by two independent MD Pathologists, supported by AI-driven anomaly detection."
        }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#038f5c] text-4xl md:text-5xl font-serif">Frequently asked questions</h2>
          <div className="flex items-center justify-center space-x-3 pt-2">
            <div className="h-[1px] w-8 bg-[#038f5c]/20"></div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">The Clarity Hub</p>
            <div className="h-[1px] w-8 bg-[#038f5c]/20"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Category Sidebar (Desktop Only) */}
          <div className="hidden lg:flex lg:flex-col lg:w-1/3 space-y-4 sticky top-32">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center justify-between px-8 py-6 rounded-3xl border-2 transition-all duration-300 text-left group ${
                  activeCategory === cat.id
                    ? 'border-[#038f5c] bg-[#f0f9f6] shadow-lg shadow-[#038f5c]/5'
                    : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                <span className={`font-bold transition-colors ${
                  activeCategory === cat.id ? 'text-[#038f5c]' : 'text-slate-500 group-hover:text-slate-700'
                }`}>
                  {cat.label}
                </span>
                <div className={`w-2 h-2 rounded-full transition-transform ${
                  activeCategory === cat.id ? 'bg-[#038f5c] scale-150' : 'bg-slate-200'
                }`}></div>
              </button>
            ))}

            <div className="p-8 mt-4 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden group cursor-pointer">
               <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#038f5c] mb-2">Still have questions?</p>
                  <p className="text-sm font-medium text-slate-300 leading-relaxed mb-4">Our healthcare experts are available 24/7 to guide you.</p>
                  <div className="flex items-center space-x-2 text-white font-black uppercase tracking-tighter text-lg">
                    <span>Call +91 75500 75500</span>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#038f5c]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>

          {/* Category Pills (Mobile Only) */}
          <div className="flex lg:hidden overflow-x-auto w-full pb-4 scrollbar-hide space-x-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#038f5c] text-white shadow-lg shadow-[#038f5c]/20'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right: The Accordion */}
          <div className="w-full lg:w-2/3 space-y-4">
            {currentCategory.items.map((item, index) => (
              <div 
                key={index}
                className={`group border-2 rounded-[2rem] transition-all duration-500 overflow-hidden ${
                  openIndex === index 
                    ? 'border-[#038f5c] bg-white shadow-xl shadow-[#038f5c]/5' 
                    : 'border-slate-100 hover:border-slate-200 bg-slate-50/30'
                }`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-8 py-7 flex items-center justify-between gap-4"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors ${
                    openIndex === index ? 'text-[#0a3d31]' : 'text-slate-600 group-hover:text-slate-900'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? 'bg-[#038f5c] rotate-180 text-white' : 'bg-white border border-slate-200 text-slate-400'
                  }`}>
                    {openIndex === index ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>

                <div className={`transition-all duration-500 ease-in-out px-8 overflow-hidden ${
                  openIndex === index ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}>
                  <div className="h-[1px] w-12 bg-[#038f5c]/20 mb-6"></div>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                    {item.answer}
                  </p>
                  
                  {/* Subtle Contextual CTA inside the answer */}
                  <div className="mt-6 flex items-center space-x-3">
                    <button className="text-[#038f5c] text-[10px] font-black uppercase tracking-widest hover:underline">
                      Learn more about this
                    </button>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <button className="text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-[#038f5c]">
                      Share via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Proof Section */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
               <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-500 tracking-tight">
                    Join <span className="text-[#0a3d31]">100,000+</span> monthly visitors getting clarity.
                  </p>
               </div>
               <button className="text-[10px] font-black uppercase tracking-[0.2em] bg-white border border-slate-200 px-6 py-3 rounded-full hover:bg-[#038f5c] hover:text-white transition-all shadow-sm">
                 Download Patient Handbook
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
