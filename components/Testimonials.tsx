
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      location: "Chennai",
      quote: "The MRI was super fast and the silent technology made it much easier for my claustrophobia. Reports were on my WhatsApp by evening.",
      rating: 5
    },
    {
      name: "Priya Sundar",
      location: "Bangalore",
      quote: "Booked a home collection for my parents. The technician was very professional and hygienic. Very satisfied with the service.",
      rating: 5
    },
    {
      name: "Senthil V.",
      location: "Coimbatore",
      quote: "Cheapest prices in town without compromising on quality. I compared with 3 other labs, Aarthi was the best deal.",
      rating: 5
    }
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <h2 className="text-[#038f5c] font-bold tracking-widest uppercase text-sm">Patient Voice</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Loved by Millions, <br />Trusted by Doctors.</h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{review.quote}"</p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center space-x-4">
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              <div className="text-left">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-xs text-slate-500">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
