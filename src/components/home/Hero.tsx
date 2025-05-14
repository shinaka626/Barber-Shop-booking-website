
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')",
          filter: "brightness(0.3)" 
        }}
      ></div>
      
      <div className="relative z-10 section-padding py-20 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
              <span className="gold-text">SHARP</span> SHEARS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-barber-white/90 font-light">
              Premium Grooming Experience for the Modern Gentleman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking" 
                className="px-8 py-3 bg-barber-gold text-barber-black font-semibold rounded-md hover:bg-barber-gold/90 transition-all"
              >
                Book Appointment
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-3 border-2 border-barber-gold text-barber-white rounded-md hover:bg-barber-gold/10 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
