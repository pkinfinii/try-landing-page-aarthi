
import React from 'react';

const MediaCoverage: React.FC = () => {
  const publications = [
    { 
      name: "The Hindu", 
      quote: "India's Most Affordable Diagnostic Chain", 
      color: "group-hover:text-[#004e89]" 
    },
    { 
      name: "Times of India", 
      quote: "Pioneering Robotic Lab Technology", 
      color: "group-hover:text-[#e31e24]" 
    },
    { 
      name: "The Print", 
      quote: "Disrupting Healthcare with Quality", 
      color: "group-hover:text-[#000000]" 
    },
    { 
      name: "The Week", 
      quote: "Consistency in Clinical Accuracy", 
      color: "group-hover:text-[#d32f2f]" 
    },
    { 
      name: "PTI", 
      quote: "Nationwide Trust and Excellence", 
      color: "group-hover:text-[#1a237e]" 
    },
    { 
      name: "First India", 
      quote: "Redefining Patient-Centric Care", 
      color: "group-hover:text-[#ff9800]" 
    }
  ];

  return (
    <section className="py-24 bg-[#fdfdfd] border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-[#038f5c] text-3xl md:text-4xl font-serif">Highly featured diagnostic centre in India</h2>
          <div className="flex items-center justify-center space-x-3 pt-2">
            <div className="h-[1px] w-8 bg-[#038f5c]/20"></div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Institutional Validation</p>
            <div className="h-[1px] w-8 bg-[#038f5c]/20"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center justify-center h-36 md:h-32 px-4 bg-gradient-to-br from-white to-[#f8f9fa] border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Publication Name - Moves up on hover */}
              <div className={`text-slate-400 font-serif font-black text-sm md:text-base tracking-tight transition-all duration-500 transform group-hover:-translate-y-4 ${pub.color}`}>
                {pub.name}
              </div>

              {/* Internal Quote Reveal - Slides in from bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-white/80 backdrop-blur-sm border-t border-slate-100 flex items-center justify-center text-center">
                <p className="text-[#0a3d31] text-[10px] md:text-[11px] font-bold leading-tight">
                  "{pub.quote}"
                </p>
              </div>

              {/* Light secondary gradient highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6e6e6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              
              {/* Decorative top accent line that grows on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#038f5c] group-hover:w-full transition-all duration-700 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-40">
           <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest italic">
             Recognized for quality standards by national editorial boards
           </p>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
