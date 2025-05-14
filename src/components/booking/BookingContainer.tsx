
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface BookingContainerProps {
  children: React.ReactNode;
  title: string;
}

const BookingContainer: React.FC<BookingContainerProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-barber-black text-barber-white">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              {title} <span className="gold-text">Appointment</span>
            </h1>
            
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingContainer;
