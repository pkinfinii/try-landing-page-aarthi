
import React from 'react';

const PreferenceSection: React.FC = () => {
  const preferences = [
    {
      title: "Quality",
      proof: "NABL & NABH Accredited",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a.747.747 0 001.031-.513 3.374 3.374 0 016.268 0 .747.747 0 001.031.513 3.374 3.374 0 013.432 3.432.747.747 0 00.513 1.031 3.374 3.374 0 010 6.268.747.747 0 00-.513 1.031 3.374 3.374 0 01-3.432 3.432.747.747 0 00-1.031.513 3.374 3.374 0 01-6.268 0 .747.747 0 00-1.031-.513 3.374 3.374 0 01-3.432-3.432.747.747 0 00-.513-1.031 3.374 3.374 0 010-6.268.747.747 0 00.513-1.031 3.374 3.374 0 013.432-3.432z" />
        </svg>
      )
    },
    {
      title: "Price Transparency",
      proof: "Standard Flat Rates",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M11 11.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Professional Doctors",
      proof: "Supervised by MDs",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Reporting Accuracy",
      proof: "99.9% Precision Rate",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-slate-50 pointer-events-none select-none z-0 whitespace-nowrap opacity-50">
        1.7 CRORE TRUST
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[#038f5c] text-3xl md:text-5xl font-serif leading-tight">
            Why 1.7cr patients prefer Aarthi Scans & Labs?
          </h2>
          <div className="w-16 h-1 bg-[#e6e6e6] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {preferences.map((item, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center text-center p-8 transition-all duration-500 rounded-[3rem] hover:bg-slate-50/50"
            >
              {/* Pillar Icon Container */}
              <div className="relative mb-8">
                {/* Magnetic Hover Effect Background */}
                <div className="absolute inset-0 bg-[#f0f9f6] rounded-full scale-110 group-hover:scale-125 transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100"></div>
                
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#f0f9f6] rounded-full flex items-center justify-center text-[#038f5c] shadow-inner relative z-10 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                  {item.icon}
                </div>
                
                {/* Orbital dots for "Reporting Accuracy" and "Professionalism" feeling */}
                <div className="absolute -inset-2 border border-[#038f5c]/5 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
              </div>

              <div className="space-y-3 relative z-10 w-full">
                <h3 className="text-lg md:text-xl font-black text-[#0a3d31] group-hover:text-[#038f5c] transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Enhanced Proof Point Reveal */}
                <div className="relative h-6 overflow-hidden w-full flex flex-col items-center">
                  <p className="absolute inset-0 flex items-center justify-center text-[#038f5c]/40 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                    {item.title} FOCUS
                  </p>
                  <p className="absolute inset-0 flex items-center justify-center text-[#038f5c] text-[11px] font-bold uppercase tracking-widest opacity-0 translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    {item.proof}
                  </p>
                </div>
              </div>

              {/* Decorative line connector for desktop flow */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-gradient-to-r from-slate-100 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Closing trust statement */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            Consistency. Transparency. Excellence. <span className="text-[#038f5c] font-bold">Since 1988.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreferenceSection;
