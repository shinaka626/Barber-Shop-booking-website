
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-barber-black py-4 px-6 border-b border-barber-gold/30">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold font-playfair gold-text">SHARP SHEARS</h1>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-barber-white hover:text-barber-gold transition-colors duration-200">Home</Link>
          <Link to="/services" className="text-barber-white hover:text-barber-gold transition-colors duration-200">Services</Link>
          <Link to="/booking" className="text-barber-white hover:text-barber-gold transition-colors duration-200">Book Now</Link>
          <Link to="/contact" className="text-barber-white hover:text-barber-gold transition-colors duration-200">Contact</Link>
        </nav>
        <Link 
          to="/booking" 
          className="px-5 py-2 bg-barber-gold text-barber-black rounded hover:bg-barber-gold/90 transition-all duration-200 font-medium"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
};

export default Header;
