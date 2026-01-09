
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const GeminiHealthAssistant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Hello! I am your Aarthi Smart Assistant. Need help understanding a scan or choosing a health package? Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    // Simulation Mode if API Key is missing (Useful for WordPress team demos)
    if (!process.env.API_KEY || process.env.API_KEY === 'undefined') {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'ai', 
          text: `[Demo Mode] This is a simulated response. Once you add your Gemini API Key, I will give expert advice on "${userText}" tailored to Aarthi Scans' standards.` 
        }]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `You are a medical assistant for Aarthi Scans and Labs. Help users understand MRI, CT, and blood tests. Suggest Aarthi Scans services. Advise consulting a doctor for diagnosis. Keep answers concise.`,
          temperature: 0.7,
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Service temporarily unavailable. Please call our helpline." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#038f5c]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#038f5c]/20 border border-[#038f5c]/40 rounded-full px-4 py-1">
              <span className="animate-pulse w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Smart Health Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Can't decide which <br /><span className="text-[#038f5c]">Scan</span> you need?</h2>
            <p className="text-slate-400 text-lg font-medium">Chat with our intelligent assistant to learn about preparation, the difference between tests, or to find the best health package.</p>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 overflow-hidden bg-slate-800">
                    <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-slate-500">MD</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-300">Verified by our panel of <span className="text-white font-bold">50+ MD Radiologists</span></p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-[2.5rem] border border-slate-700 shadow-2xl flex flex-col h-[500px]">
            <div className="p-6 border-b border-slate-700 flex items-center justify-between bg-slate-800/50 backdrop-blur-md rounded-t-[2.5rem]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#038f5c] rounded-2xl flex items-center justify-center text-xs font-black shadow-lg shadow-[#038f5c]/20">AS</div>
                <div>
                  <span className="block font-bold text-sm text-white">Aarthi Assistant</span>
                  <span className="block text-[9px] text-green-500 font-bold uppercase tracking-widest">Active Now</span>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-[#038f5c] text-white rounded-tr-none shadow-lg' 
                      : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-700/50 text-slate-400 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest animate-pulse">
                    Typing Response...
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-slate-800 rounded-b-[2.5rem]">
              <div className="flex items-center space-x-2 bg-slate-900 border border-slate-700 p-2 rounded-2xl shadow-inner group-focus-within:border-[#038f5c] transition-colors">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="e.g., Difference between MRI and CT?"
                  className="flex-grow bg-transparent text-sm focus:outline-none px-3 py-2 text-slate-200 placeholder:text-slate-600"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 bg-[#038f5c] rounded-xl hover:bg-[#1a8058] transition-all disabled:opacity-50 active:scale-95 shadow-lg shadow-[#038f5c]/20"
                  disabled={isTyping}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiHealthAssistant;
