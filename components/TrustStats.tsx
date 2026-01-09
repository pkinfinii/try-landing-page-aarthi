
import React from 'react';

const TrustStats: React.FC = () => {
  const stats = [
    { value: '35+', label: 'Years of Experience' },
    { value: '10M+', label: 'Patients Served' },
    { value: '150+', label: 'Radiologists' },
    { value: '2500+', label: 'Staff Members' },
  ];

  return (
    <div className="bg-slate-50 py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-4xl font-bold text-[#038f5c] mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStats;
