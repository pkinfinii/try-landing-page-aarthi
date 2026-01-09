
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#038f5c] rounded-lg flex items-center justify-center text-white font-bold text-lg">A</div>
            <h2 className="text-white font-bold tracking-wider leading-none">AARTHI <br /><span className="text-[10px] text-slate-500">SCANS & LABS</span></h2>
          </div>
          <p className="text-sm leading-relaxed">Established in 1988, we are India's leading diagnostic chain providing high quality services at affordable costs.</p>
          <div className="flex space-x-4">
            {['fb', 'tw', 'ln', 'ig'].map(s => (
              <div key={s} className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#038f5c] transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-[10px] uppercase font-bold text-white">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Our Services</a></li>
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Home Collection</a></li>
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Find a Center</a></li>
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Corporate Tie-ups</a></li>
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Doctor Connect</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Support</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Download Reports</a></li>
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Feedback</a></li>
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-[#038f5c] transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-[#038f5c] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Head Office: 7th Avenue, Ashok Nagar, Chennai - 600083</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#038f5c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white font-bold">+91 75500 75500</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#038f5c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@aarthiscans.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:row justify-between items-center text-[10px] tracking-widest uppercase text-slate-600">
        <p>© 2024 Aarthi Scans & Labs. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Accredited by NABL, NABH & CAP Certified</p>
      </div>
    </footer>
  );
};

export default Footer;
