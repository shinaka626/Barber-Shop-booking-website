
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Service } from '@/data/services';
import { format } from 'date-fns';

interface ConfirmationScreenProps {
  bookingDetails: {
    services: Service[];
    date: Date;
    time: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    totalAmount: number;
    bookingId: string;
  };
  onDone: () => void;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ bookingDetails, onDone }) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-full bg-barber-gold/20 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-barber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-playfair font-bold mb-2">Booking Confirmed!</h2>
        <p className="text-barber-white/70">Your appointment has been successfully scheduled.</p>
      </div>

      <div className="bg-barber-gold/5 border border-barber-gold/30 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-barber-white/70">Booking ID:</span>
            <span>{bookingDetails.bookingId}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-barber-white/70">Date & Time:</span>
            <span>{format(bookingDetails.date, 'MMMM d, yyyy')} at {bookingDetails.time}</span>
          </div>
          
          <div className="pt-2 border-t border-barber-gold/20">
            <p className="text-barber-white/70 mb-2">Services:</p>
            <ul className="space-y-1">
              {bookingDetails.services.map(service => (
                <li key={service.id} className="flex justify-between">
                  <span>{service.name}</span>
                  <span className="text-barber-gold">${service.price}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-2 border-t border-barber-gold/20 flex justify-between font-semibold">
            <span>Total Amount:</span>
            <span className="text-barber-gold">${bookingDetails.totalAmount}</span>
          </div>
        </div>
      </div>

      <div className="text-center text-barber-white/70 mb-6">
        <p>A confirmation email has been sent to {bookingDetails.customerEmail}</p>
        <p>Your barber has been notified via WhatsApp.</p>
      </div>

      <div className="flex flex-col space-y-3">
        <Button 
          onClick={onDone}
          className="bg-barber-gold hover:bg-barber-gold/90 text-barber-black py-3 font-medium"
        >
          Done
        </Button>
        
        <Link to="/" className="text-center text-barber-white/70 hover:text-barber-gold transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
