
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.2)" 
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Ready for a Fresh <span className="gold-text">New Look?</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-barber-white/90">
            Book your appointment today and experience premium grooming services tailored just for you.
          </p>
          <Link 
            to="/booking" 
            className="px-8 py-4 bg-barber-gold text-barber-black font-semibold rounded-md hover:bg-barber-gold/90 transition-all text-lg"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
