
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { services } from '@/data/services';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-barber-black text-barber-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2066&auto=format&fit=crop')",
              filter: "brightness(0.3)" 
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
              Our <span className="gold-text">Services</span>
            </h1>
            <p className="text-xl text-barber-white/80 max-w-2xl mx-auto">
              Discover our premium grooming services tailored for the modern gentleman.
            </p>
          </div>
        </div>
        
        {/* Services List */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-barber-black border border-barber-gold/30 rounded-lg overflow-hidden group hover:border-barber-gold transition-all duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-barber-gold transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-barber-white/70 mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-barber-gold text-xl font-playfair">${service.price}</span>
                      <span className="text-barber-white/50 text-sm">{service.duration} min</span>
                    </div>
                    <Link 
                      to="/booking" 
                      state={{ selectedService: service }}
                      className="block text-center py-2 border border-barber-gold text-barber-gold rounded hover:bg-barber-gold hover:text-barber-black transition-colors"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-barber-black/80 to-barber-black border-t border-barber-gold/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">
              Ready for a Premium <span className="gold-text">Grooming Experience?</span>
            </h2>
            <Link 
              to="/booking" 
              className="px-8 py-3 bg-barber-gold text-barber-black font-semibold rounded-md hover:bg-barber-gold/90 transition-all inline-block"
            >
              Book Your Appointment
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
