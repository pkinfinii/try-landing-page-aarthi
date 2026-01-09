
import React from 'react';

const QuickConnect: React.FC = () => {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a8058] to-[#0a3d31] shadow-2xl">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 items-center">
            
            {/* Left: Animation */}
            <div className="p-8 lg:p-16 flex justify-center items-center border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="w-full max-w-[400px] aspect-square relative group">
                <div className="absolute inset-0 bg-[#038f5c]/20 rounded-full blur-3xl group-hover:bg-[#038f5c]/40 transition-all duration-700"></div>
                <iframe 
                  src="https://lottie.host/embed/49b93cf6-368e-4fec-8e16-cdee3730c1b8/vw1MLMBken.lottie"
                  className="w-full h-full relative z-10 pointer-events-none"
                  title="Medical Animation"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            </div>

            {/* Right: CTA Form */}
            <div className="p-10 lg:p-20 space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                  Instant Response Engine
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  Skip the Queue, <br />
                  <span className="text-[#038f5c] brightness-150">Start Healing.</span>
                </h3>
                <p className="text-slate-300 font-medium text-lg">
                  Don't let health questions linger. Our experts are standing by for your call.
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#038f5c] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Enter your mobile number" 
                    className="w-full pl-16 pr-6 py-6 rounded-2xl bg-white/5 border-2 border-white/10 focus:bg-white/10 focus:border-[#038f5c] outline-none transition-all text-white font-bold text-xl placeholder:text-white/30"
                  />
                </div>

                <button className="w-full relative group overflow-hidden rounded-2xl">
                  {/* Light Secondary Gradient tone as requested */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e6e6e6] via-[#f5f5f5] to-[#e6e6e6] transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#038f5c]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className="relative py-6 px-8 flex items-center justify-center space-x-3">
                    <span className="text-[#0a3d31] text-lg font-black uppercase tracking-widest">Get a Callback in 1 Min</span>
                    <svg className="w-6 h-6 text-[#038f5c] group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
                
                <div className="flex items-center justify-center space-x-4 opacity-50">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-white font-black uppercase tracking-widest">Available 24/7</span>
                  </div>
                  <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                  <span className="text-[10px] text-white font-black uppercase tracking-widest">Privacy Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickConnect;
