
import React, { useState } from 'react';

interface BloodTest {
  id: string;
  name: string;
  shortName: string;
  price: string;
  originalPrice: string;
  description: string;
  includes: string[];
  preparation: string;
  reportTime: string;
}

const bloodTests: BloodTest[] = [
  {
    id: 'cbc',
    name: 'CBC (Complete Blood Count) Test',
    shortName: 'CBC',
    price: '200',
    originalPrice: '500',
    description: 'A fundamental test that evaluates your overall health and detects a wide range of disorders, including anemia, infection, and leukemia.',
    includes: ['Red blood cell count', 'White blood cell count', 'Platelet count', 'Hemoglobin levels', 'Hematocrit'],
    preparation: 'No fasting required. Can be done any time of the day.',
    reportTime: 'Within 6-8 Hours'
  },
  {
    id: 'hba1c',
    name: 'Diabetes HbA1c Test',
    shortName: 'HbA1c',
    price: '450',
    originalPrice: '900',
    description: 'Measures your average blood sugar levels over the past 3 months. It is the gold standard for monitoring diabetes control.',
    includes: ['Glycated Hemoglobin', 'Estimated Average Glucose (eAG)'],
    preparation: 'No fasting required. Test can be taken even after meals.',
    reportTime: 'Same Day Delivery'
  },
  {
    id: 'thyroid',
    name: 'Thyroid Panel (T3, T4, TSH)',
    shortName: 'Thyroid',
    price: '550',
    originalPrice: '1200',
    description: 'Evaluates how well your thyroid gland is working and helps diagnose hyperthyroidism or hypothyroidism.',
    includes: ['Total T3', 'Total T4', 'TSH (Thyroid Stimulating Hormone)'],
    preparation: 'Early morning sample preferred. Fasting is recommended for better accuracy.',
    reportTime: 'Within 12 Hours'
  },
  {
    id: 'vitd',
    name: 'Vitamin D (25-Hydroxy) Test',
    shortName: 'Vitamin D',
    price: '1100',
    originalPrice: '2200',
    description: 'Essential for bone health and immune function. Deficiency is extremely common in urban populations.',
    includes: ['Vitamin D Total (25-OH)'],
    preparation: 'No fasting required.',
    reportTime: '24 Hours'
  },
  {
    id: 'vitb12',
    name: 'Vitamin B12 Test',
    shortName: 'Vitamin B12',
    price: '850',
    originalPrice: '1600',
    description: 'Measures the amount of Vitamin B12 in your blood, crucial for nerve function and brain health.',
    includes: ['Serum Vitamin B12'],
    preparation: 'Overnight fasting (8-10 hours) is recommended.',
    reportTime: '24 Hours'
  },
  {
    id: 'amh',
    name: 'AMH (Anti-Mullerian Hormone) Test',
    shortName: 'AMH',
    price: '1800',
    originalPrice: '3500',
    description: 'Used to assess ovarian reserve and fertility potential in women.',
    includes: ['AMH Levels'],
    preparation: 'Can be done on any day of the menstrual cycle.',
    reportTime: '48 Hours'
  },
  {
    id: 'hepb',
    name: 'Hepatitis B (HBsAg) Test',
    shortName: 'Hepatitis B',
    price: '300',
    originalPrice: '600',
    description: 'A screening test to detect the presence of Hepatitis B surface antigen, indicating an active infection.',
    includes: ['HBsAg Screening'],
    preparation: 'No special preparation needed.',
    reportTime: 'Same Day'
  },
  {
    id: 'lft',
    name: 'Liver Function Test (LFT)',
    shortName: 'LFT',
    price: '650',
    originalPrice: '1400',
    description: 'Comprehensive screening of liver enzymes and proteins to check for liver damage or inflammation.',
    includes: ['Bilirubin (Total/Direct)', 'SGOT (AST)', 'SGPT (ALT)', 'Alkaline Phosphatase', 'Albumin'],
    preparation: 'Fasting (8-10 hours) is mandatory for this test.',
    reportTime: 'Within 12 Hours'
  },
  {
    id: 'urine',
    name: 'Urine Routine & Microscopic',
    shortName: 'Urine Test',
    price: '150',
    originalPrice: '350',
    description: 'Routine screening for kidney health, urinary tract infections (UTI), and metabolic disorders like diabetes.',
    includes: ['Physical Examination', 'Chemical Analysis', 'Microscopic Sediment Examination'],
    preparation: 'First morning mid-stream urine sample is preferred.',
    reportTime: 'Within 4-6 Hours'
  }
];

const BloodTestExplorer: React.FC = () => {
  const [selectedId, setSelectedId] = useState(bloodTests[0].id);
  const selectedTest = bloodTests.find(t => t.id === selectedId) || bloodTests[0];

  const TestDetailContent = ({ test, isMobile = false }: { test: BloodTest, isMobile?: boolean }) => (
    <div className={`flex flex-col h-full ${isMobile ? 'p-6 bg-white rounded-b-2xl' : 'p-8 md:p-12'}`}>
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 ${isMobile ? 'mb-6' : 'mb-10'}`}>
        <div className="space-y-2">
          {!isMobile && (
            <span className="inline-block px-3 py-1 bg-[#038f5c]/10 text-[#038f5c] rounded-full text-[10px] font-black uppercase tracking-widest">
              Detailed Overview
            </span>
          )}
          <h4 className={`${isMobile ? 'text-xl' : 'text-3xl'} font-serif text-[#0a3d31] leading-tight`}>
            {test.name}
          </h4>
        </div>
        <div className={`bg-[#fdfdfd] border-2 border-[#e6e6e6] p-4 rounded-3xl text-center ${isMobile ? 'w-full' : 'min-w-[140px]'}`}>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Current Price</p>
          <div className="flex items-baseline justify-center space-x-2">
            <span className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-black text-[#038f5c]`}>₹{test.price}</span>
            <span className="text-sm text-slate-300 line-through font-medium">₹{test.originalPrice}</span>
          </div>
        </div>
      </div>

      <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-2 gap-12'}`}>
        <div className="space-y-6">
          <div className="space-y-3">
            <h5 className="text-[10px] font-black uppercase text-[#0a3d31] tracking-widest flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-[#038f5c] rounded-full"></div>
              <span>About the Test</span>
            </h5>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
              {test.description}
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] font-black uppercase text-[#0a3d31] tracking-widest flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-[#038f5c] rounded-full"></div>
              <span>Parameters Covered</span>
            </h5>
            <div className="grid grid-cols-1 gap-2">
              {test.includes.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-slate-600">
                  <svg className="w-3 h-3 text-[#038f5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[11px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4">
             <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-xl shadow-sm text-[#038f5c]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Report TAT</p>
                  <p className="text-xs font-bold text-[#0a3d31]">{test.reportTime}</p>
                </div>
             </div>
             <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-xl shadow-sm text-[#038f5c]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Preparation</p>
                  <p className="text-xs font-bold text-[#0a3d31]">{test.preparation}</p>
                </div>
             </div>
          </div>

          <div className="space-y-3">
             <button className="w-full relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#038f5c] to-[#1a8058] transition-all group-hover:scale-105 duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6e6e6]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative py-4 flex items-center justify-center space-x-3 text-white">
                   <span className="font-black text-sm uppercase tracking-[0.2em]">Book Now</span>
                   <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                </div>
             </button>
             <p className="text-center text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em]">
               Free Home Sample Collection*
             </p>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-center space-x-8">
           <div className="flex items-center space-x-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/ISO_9001_Logo.svg" className="h-6 w-auto" alt="ISO" />
              <span className="text-[10px] font-black uppercase">ISO Certified</span>
           </div>
           <div className="w-[1px] h-4 bg-slate-300"></div>
           <div className="flex items-center space-x-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="text-[10px] font-black uppercase text-slate-600">NABL Accredited Reports</span>
           </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="py-24 bg-[#fdfdfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16 space-y-4">
          <h2 className="text-[#038f5c] font-black tracking-[0.2em] uppercase text-xs">Individual Biomarkers</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#0a3d31]">Precision Blood Diagnostics.</h3>
          <p className="text-slate-500 max-w-2xl font-medium">Browse our most requested individual tests. High accuracy, NABL certified reporting, and the lowest prices in the industry.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:h-[700px]">
          {/* Left Column: List (All platforms, but behavior varies) */}
          <div className="lg:w-[40%] flex flex-col">
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full">
              <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select a Test</p>
              </div>
              <div className="flex-grow overflow-y-auto scrollbar-hide p-4 space-y-3">
                {bloodTests.map((test) => (
                  <div key={test.id} className="flex flex-col space-y-2">
                    <button
                      onClick={() => setSelectedId(test.id)}
                      className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                        selectedId === test.id
                          ? 'bg-[#038f5c] text-white shadow-lg shadow-[#038f5c]/20 lg:translate-x-2'
                          : 'hover:bg-slate-50 text-[#0a3d31]'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className={`text-sm font-bold ${selectedId === test.id ? 'text-white' : 'text-[#0a3d31]'}`}>
                          {test.name}
                        </span>
                        <span className={`text-[10px] mt-1 ${selectedId === test.id ? 'text-white/70' : 'text-slate-400'}`}>
                          Starting at ₹{test.price}
                        </span>
                      </div>
                      <div className={`p-2 rounded-lg transition-all ${selectedId === test.id ? 'bg-white/20 rotate-90' : 'bg-slate-100 group-hover:bg-[#038f5c]/10'}`}>
                        <svg className={`w-4 h-4 ${selectedId === test.id ? 'text-white' : 'text-[#038f5c]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>

                    {/* Mobile Only: Inline Detail Expansion */}
                    <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
                      selectedId === test.id ? 'max-h-[1200px] opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-2 border-[#038f5c]/10 rounded-2xl shadow-inner">
                        <TestDetailContent test={test} isMobile={true} />
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 mt-4 border-t border-dashed border-slate-200 text-center">
                  <button className="text-[#038f5c] text-sm font-bold hover:underline">
                    + View 2000+ More Tests
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Card (Desktop Only) */}
          <div className="hidden lg:block lg:w-[60%] h-full">
            <div className="bg-white h-full rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative flex flex-col">
              {/* Subtle background gradient hint */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#038f5c]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <TestDetailContent test={selectedTest} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodTestExplorer;
