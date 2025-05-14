
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

const FeaturedServices = () => {
  const featuredServices = services.filter(service => service.popular);
  
  return (
    <section className="section-padding bg-barber-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Premium <span className="gold-text">Services</span></h2>
          <div className="w-24 h-1 bg-barber-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-barber-black border border-barber-gold/30 rounded-lg overflow-hidden hover:border-barber-gold transition-all duration-300 group"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-barber-gold transition-colors">{service.name}</h3>
                <p className="text-barber-white/70 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-barber-gold text-xl font-playfair">${service.price}</span>
                  <span className="text-barber-white/50 text-sm">{service.duration} min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/services" 
            className="px-6 py-3 border-2 border-barber-gold text-barber-gold rounded-md hover:bg-barber-gold hover:text-barber-black transition-all inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
