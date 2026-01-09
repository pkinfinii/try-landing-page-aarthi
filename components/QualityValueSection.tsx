
import React from 'react';

const QualityValueSection: React.FC = () => {
  const values = [
    {
      title: "Processed in Robotic Lab",
      subtitle: "Precision Engineering",
      description: "Eliminating human error with fully automated world-class robotic processing systems.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Double Verified Reports",
      subtitle: "The Power of Two",
      description: "Every report is scrutinized and cross-verified by two independent MD specialists.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "AI Powered Smart Report",
      subtitle: "Intelligent Insights",
      description: "Receive interactive health trends and AI-driven explanations for complex biomarkers.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        </svg>
      )
    },
    {
      title: "Reports in 8 Hours",
      subtitle: "Lightning Fast Delivery",
      description: "Experience the fastest turnaround time in the industry with reports delivered digitally.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[#038f5c] text-4xl md:text-5xl font-serif leading-tight">
            What do you get?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#038f5c] to-transparent mx-auto"></div>
          <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm uppercase tracking-widest pt-2">
            The Aarthi Advantage: Where Technology Meets Trust
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center space-y-6 p-6 rounded-[2rem] transition-all duration-500 hover:bg-slate-50 hover:shadow-xl hover:shadow-[#038f5c]/5"
            >
              {/* Animated Icon Container */}
              <div className="relative">
                <div className="w-28 h-28 bg-[#f0f9f6] rounded-full flex items-center justify-center text-[#038f5c] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner relative z-10">
                  {item.icon}
                </div>
                {/* Secondary decorative ring */}
                <div className="absolute inset-0 border-2 border-[#038f5c]/5 rounded-full scale-125 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-[#038f5c]/5 rounded-full blur-xl scale-75 group-hover:scale-125 transition-transform duration-500"></div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0a3d31] leading-tight group-hover:text-[#038f5c] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#038f5c]/60 text-[10px] font-black uppercase tracking-[0.2em]">
                  {item.subtitle}
                </p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center space-x-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
             <div className="w-8 h-[1px] bg-slate-200"></div>
             <span>Trusted by 10 Million+ Patients</span>
             <div className="w-8 h-[1px] bg-slate-200"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default QualityValueSection;
