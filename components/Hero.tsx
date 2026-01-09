
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const locations = ["Home", "Office", "Anywhere"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const valueProps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      text: "Premium Home Collection*"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Fastest Slots from 6:30 AM"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "Smart Reports on WhatsApp"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "Open Sundays for You"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "Doctor Recommended Labs"
    }
  ];

  return (
    <div className="relative pt-24 md:pt-32 bg-[#fdfdfd] overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#038f5c]/5 -skew-x-12 transform translate-x-20 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Headline & Marketing */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <span className="inline-block py-1.5 px-5 bg-[#038f5c]/10 text-[#038f5c] rounded-full text-xs font-black tracking-widest uppercase">
                India's Trusted Diagnostic Partner
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-[#0a3d31]">
                Accurate Blood Tests.<br />
                <span className="text-[#038f5c]">Done at </span>
                <span className="inline-block min-w-[180px] text-slate-800 font-bold relative h-[1.1em] overflow-hidden align-bottom">
                  <div 
                    className="flex flex-col transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateY(-${currentLocationIndex * 1.1}em)` }}
                  >
                    {locations.map((loc, idx) => (
                      <span key={idx} className="block leading-[1.1em]">{loc}.</span>
                    ))}
                  </div>
                  <div className="absolute bottom-1 left-0 w-full h-2 bg-[#e6e6e6] -z-10 rotate-1 opacity-60"></div>
                </span>
              </h1>

              <div className="space-y-4 pt-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                   <div className="bg-gradient-to-r from-[#038f5c] to-[#1a8058] text-white px-8 py-5 rounded-2xl shadow-xl shadow-[#038f5c]/20 transform hover:scale-105 transition-transform duration-300">
                      <p className="text-[10px] font-bold uppercase tracking-wider opacity-80 mb-1">Blood Tests Starting At</p>
                      <p className="text-5xl font-black tracking-tighter">₹ 200<span className="text-xl font-normal opacity-90 ml-1">*</span></p>
                   </div>
                   <div className="text-left border-l-2 border-[#038f5c]/20 pl-6 space-y-1">
                      <p className="text-[#0a3d31] font-black text-xl leading-tight">Transparent Pricing.</p>
                      <p className="text-slate-500 font-medium">No hidden charges. Ever.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Credibility Indicator */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-6">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/patient${i}/64/64`} className="w-12 h-12 rounded-full border-4 border-white shadow-md" alt="Patient" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-[#e6e6e6] flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-md">
                    10M+
                  </div>
               </div>
               <div>
                 <p className="text-sm text-slate-500 font-medium">
                   Trusted by over <span className="text-[#0a3d31] font-bold">10 Million</span> families
                 </p>
                 <div className="flex items-center space-x-1 mt-1">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="relative group">
            {/* Floating Trust Badge */}
            <div className="absolute -top-6 -right-6 z-30 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 flex flex-col items-center justify-center animate-float hidden md:flex">
               <div className="w-14 h-14 bg-[#038f5c]/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-[#038f5c]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
               </div>
               <p className="text-[11px] font-black uppercase text-[#0a3d31] tracking-tighter">NABL Certified</p>
               <p className="text-[9px] font-bold text-slate-400">99.9% Accuracy</p>
            </div>

            <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(3,143,92,0.15)] p-10 md:p-14 border border-slate-100 relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-40 h-40 bg-[#e6e6e6]/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
               
               <div className="mb-10 relative">
                 <h2 className="text-3xl font-black text-[#0a3d31]">Book Your Test</h2>
                 <p className="text-slate-500 mt-2 font-medium">Quick callback from our healthcare experts.</p>
               </div>

               <div className="space-y-6 relative">
                 <div className="group/field relative">
                   <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#038f5c] transition-colors duration-300">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                   </div>
                   <input 
                    type="text" 
                    placeholder="Patient Name*" 
                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-[#038f5c] outline-none transition-all font-semibold text-slate-700 placeholder:text-slate-400"
                   />
                 </div>

                 <div className="group/field relative">
                   <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#038f5c] transition-colors duration-300">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                   </div>
                   <input 
                    type="tel" 
                    placeholder="Phone Number*" 
                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-[#038f5c] outline-none transition-all font-semibold text-slate-700 placeholder:text-slate-400"
                   />
                 </div>

                 <div className="group/field relative">
                   <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-[#038f5c] transition-colors duration-300">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     </svg>
                   </div>
                   <select className="w-full pl-14 pr-10 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-[#038f5c] outline-none transition-all font-semibold text-slate-600 appearance-none cursor-pointer">
                      <option disabled selected>Select Your City</option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                      <option>Coimbatore</option>
                      <option>Trichy</option>
                   </select>
                   <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </div>
                 </div>

                 <button className="w-full relative overflow-hidden group/btn rounded-2xl mt-4">
                   <div className="absolute inset-0 bg-gradient-to-r from-[#038f5c] to-[#1a8058] transition-transform duration-500 group-hover/btn:scale-105"></div>
                   {/* Light secondary gradient highlight from #e6e6e6 */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                   
                   <div className="relative py-6 px-6 flex items-center justify-center space-x-4 text-white">
                      <span className="text-xl font-black uppercase tracking-[0.2em]">Request a Call</span>
                      <svg className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                   </div>
                 </button>

                 <div className="pt-6 border-t border-slate-100 flex items-center justify-center space-x-6 grayscale opacity-60">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/ISO_9001_Logo.svg" className="h-8" alt="ISO" />
                    <div className="h-6 w-[1px] bg-slate-200"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0a3d31]">NABL Accredited</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Value Strip */}
      <div className="bg-gradient-to-r from-[#038f5c] to-[#1a8058] relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center group flex flex-col items-center">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-xl rounded-[1.25rem] flex items-center justify-center text-white mb-5 group-hover:bg-white group-hover:text-[#038f5c] transition-all duration-300 group-hover:-translate-y-2 shadow-lg">
                  {React.cloneElement(prop.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.15em] text-white leading-tight max-w-[130px]">
                  {prop.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
