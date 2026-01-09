
import React from 'react';

const ServiceGrid: React.FC = () => {
  const services = [
    {
      title: 'Advanced MRI',
      description: 'High-definition 3 Tesla Silent MRI for precise neurological & orthopedic imaging.',
      icon: (
        <svg className="w-8 h-8 text-[#038f5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      cta: 'Explore MRI Tech'
    },
    {
      title: 'Multi-slice CT',
      description: 'Ultra-fast 128 Slice CT scans with significantly lower radiation and high clarity.',
      icon: (
        <svg className="w-8 h-8 text-[#038f5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      cta: 'Book CT Scan'
    },
    {
      title: 'Blood Lab',
      description: 'Fully automated biochemistry & pathology labs ensuring 99.9% accurate reporting.',
      icon: (
        <svg className="w-8 h-8 text-[#038f5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.282a2 2 0 01-1.806 0l-.628-.282a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l1.166 2.332A2 2 0 003.747 20h16.506a2 2 0 001.781-1.12l1.166-2.332z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11V3m0 0l-3 3m3-3l3 3" />
        </svg>
      ),
      cta: 'Home Collection'
    },
    {
      title: '4D Ultrasound',
      description: 'State-of-the-art fetal imaging and organ screening with real-time clarity.',
      icon: (
        <svg className="w-8 h-8 text-[#038f5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      cta: 'View Fetal Care'
    },
    {
      title: 'Digital X-Ray',
      description: 'Crystal clear digital imaging with instant report availability for bone diagnostics.',
      icon: (
        <svg className="w-8 h-8 text-[#038f5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      cta: 'Walk-in Scan'
    },
    {
      title: 'Cardiology (ECG/Echo)',
      description: 'Comprehensive heart screening services with expert clinical interpretation.',
      icon: (
        <svg className="w-8 h-8 text-[#038f5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      cta: 'Check Heart Health'
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#038f5c] font-bold tracking-widest uppercase text-sm">Comprehensive Diagnostics</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">World-Class Tech, Compassionate Care.</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">From high-end radiology to precision pathology, we offer the widest range of diagnostic tests at the most affordable prices.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-[#038f5c]/5 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#038f5c]/10 transition-colors mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">{service.description}</p>
              <button className="flex items-center space-x-2 text-[#038f5c] font-bold group-hover:translate-x-2 transition-transform">
                <span>{service.cta}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
