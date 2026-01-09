
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Same Day Reports',
      desc: 'Most reports delivered within 6-12 hours via WhatsApp and Email.',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Transparent Pricing',
      desc: 'No hidden charges. High-quality diagnostics at standard affordable rates.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Doctor Led Labs',
      desc: 'Supervised by MD Radiologists and Pathologists with decades of experience.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Safety First',
      desc: 'NABL quality standards maintained across all collection centers.',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#038f5c]/10 rounded-full blur-3xl"></div>
            <img 
              src="https://picsum.photos/id/180/800/1000" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-slate-50" 
              alt="Quality Lab"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1a8058] p-6 rounded-2xl shadow-xl z-20 text-white max-w-[200px]">
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-xs opacity-80 uppercase tracking-wider">Report Accuracy Standard</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-[#038f5c] font-bold tracking-widest uppercase text-sm">Your Trust, Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">Why Millions Choose <br />Aarthi Scans Every Year.</h3>
              <p className="text-slate-500 text-lg">We don't just provide reports; we provide clarity and path to your recovery with unparalleled precision.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feat, i) => (
                <div key={i} className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${feat.color}`}>
                    {i + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{feat.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95">
              <span>Read Our Quality Manual</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
