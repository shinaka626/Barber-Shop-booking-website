
import React from 'react';

const AboutSection = () => {
  return (
    <section className="section-padding border-t border-b border-barber-gold/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Premium Barbering <span className="gold-text">Experience</span></h2>
            <div className="w-24 h-1 bg-barber-gold mb-6"></div>
            <p className="text-barber-white/80 mb-4">
              At Sharp Shears, we believe that a great haircut is more than just a service – it's an experience. 
              Our skilled barbers combine traditional techniques with modern styles to give you the perfect look.
            </p>
            <p className="text-barber-white/80 mb-6">
              Founded in 2010, our barber shop has become a sanctuary for gentlemen who appreciate attention to detail 
              and a relaxed atmosphere. We use only premium products and tools to ensure the best results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-4xl font-playfair text-barber-gold">12+</span>
                <span className="text-barber-white/70">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-playfair text-barber-gold">5</span>
                <span className="text-barber-white/70">Expert Barbers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-playfair text-barber-gold">10k+</span>
                <span className="text-barber-white/70">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-playfair text-barber-gold">8</span>
                <span className="text-barber-white/70">Premium Services</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden border-2 border-barber-gold">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
                alt="Barber shop interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-barber-black border-2 border-barber-gold p-4 rounded-lg">
              <p className="text-xl font-playfair gold-text">Premium Quality</p>
              <p className="text-sm text-barber-white/70">Guaranteed Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
