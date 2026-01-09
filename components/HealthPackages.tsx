
import React from 'react';

const HealthPackages: React.FC = () => {
  const packages = [
    {
      name: 'Essential Wellness',
      tests: ['CBC', 'Diabetes (F)', 'Lipid Profile', 'Liver Function', 'Kidney Function'],
      price: '₹1,299',
      originalPrice: '₹2,500',
      badge: 'Popular'
    },
    {
      name: 'Master Health Checkup',
      tests: ['Essential +', 'Vitamin D/B12', 'ECG', 'TFT (Thyroid)', 'Urine Routine'],
      price: '₹2,999',
      originalPrice: '₹6,000',
      badge: 'Best Value'
    },
    {
      name: 'Senior Citizen Care',
      tests: ['Master +', 'Cardiac Screening', 'Chest X-Ray', 'Bone Health', 'Doctor Consult'],
      price: '₹4,499',
      originalPrice: '₹9,500',
      badge: 'Most Comprehensive'
    },
  ];

  return (
    <div className="py-24 bg-[#038f5c]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#038f5c] font-bold tracking-widest uppercase text-sm">Prevention is Better</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Bundled Care for Total Peace.</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">Get complete health insights with our curated packages. Save up to 60% compared to individual tests.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border transition-all ${
                index === 1 
                  ? 'bg-white border-[#038f5c] shadow-2xl scale-105 z-10' 
                  : 'bg-white border-slate-100 shadow-xl'
              }`}
            >
              {pkg.badge && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#1a8058] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {pkg.badge}
                </span>
              )}
              
              <h4 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-3xl font-bold text-[#038f5c]">{pkg.price}</span>
                <span className="text-slate-400 line-through text-sm">{pkg.originalPrice}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.tests.map((test, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                index === 1 
                  ? 'bg-[#038f5c] text-white hover:bg-[#1a8058]' 
                  : 'bg-[#e6e6e6] text-slate-700 hover:bg-slate-300'
              }`}>
                Book Package Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            * Free home sample collection for orders above ₹1000
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
