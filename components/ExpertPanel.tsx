
import React from 'react';

const ExpertPanel: React.FC = () => {
  const experts = [
    {
      initial: "A",
      name: "Dr. Aarthi Govindarajan",
      qualifications: "MDRD, EDiR (European Board)",
      role: "Chief Pathologist",
      expertise: "Advanced Clinical Diagnostics"
    },
    {
      initial: "A",
      name: "Dr. Arunkumar Govindarajan",
      qualifications: "MDRD and FRCR (London)",
      role: "Executive Director",
      expertise: "Precision Imaging Strategy"
    },
    {
      initial: "P",
      name: "Dr. Prasanna Vignesh",
      qualifications: "MDRD",
      role: "Consultant Pathologist",
      expertise: "Pathology Specialization"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative medical grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#038f5c 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#038f5c] text-4xl md:text-5xl font-serif leading-tight">
            Reports you can trust
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto text-lg">
            Every report is personally verified by India's most qualified MD specialists.
          </p>
          <div className="flex items-center justify-center space-x-2 pt-2">
            <div className="h-[1px] w-12 bg-[#038f5c]/20"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#038f5c]">Expert Pathologists</span>
            <div className="h-[1px] w-12 bg-[#038f5c]/20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {experts.map((doctor, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#038f5c]/10 transition-all duration-500 hover:-translate-y-2 text-center"
            >
              {/* Profile Circle with Initials */}
              <div className="relative mb-8 inline-block">
                <div className="w-32 h-32 rounded-full bg-[#f0f9f6] flex items-center justify-center text-[#038f5c] text-5xl font-serif font-bold transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                  {doctor.initial}
                </div>
                {/* Verified Badge */}
                <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-lg border border-slate-50 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <svg className="w-6 h-6 text-[#038f5c]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-[#0a3d31] leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-bold mt-1 tracking-tight">
                    {doctor.qualifications}
                  </p>
                </div>
                
                <div className="inline-block py-1.5 px-6 rounded-full bg-[#f0f9f6] text-[#038f5c] text-xs font-black uppercase tracking-widest border border-[#038f5c]/10">
                  {doctor.role}
                </div>
                
                <div className="pt-4 border-t border-slate-50">
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider opacity-60">
                    Primary Expertise
                  </p>
                  <p className="text-slate-700 text-sm font-medium mt-1">
                    {doctor.expertise}
                  </p>
                </div>
              </div>

              {/* Decorative signature-like line */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <svg className="w-24 h-8 text-[#038f5c]" viewBox="0 0 100 40" fill="none" stroke="currentColor">
                  <path d="M10 30 Q 30 10, 50 30 T 90 10" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Anchor */}
        <div className="mt-20 flex flex-col items-center justify-center">
           <p className="text-slate-400 text-sm font-medium max-w-lg text-center italic">
             "Our mission is to bring the highest level of clinical accuracy to every patient's doorstep. Quality isn't just a standard; it's our promise."
           </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertPanel;
