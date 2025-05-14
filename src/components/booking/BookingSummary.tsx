
import React from 'react';
import { Service } from '@/data/services';
import { format } from 'date-fns';

interface BookingSummaryProps {
  selectedServices: Service[];
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  customerName: string;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  selectedServices,
  selectedDate,
  selectedTime,
  customerName
}) => {
  const totalAmount = selectedServices.reduce((sum, service) => sum + service.price, 0);
  const totalDuration = selectedServices.reduce((sum, service) => sum + service.duration, 0);
  
  return (
    <div className="bg-barber-gold/5 border border-barber-gold/30 rounded-md p-4">
      <h3 className="text-xl font-semibold mb-3">Booking Summary</h3>
      
      {customerName && (
        <div className="mb-3 pb-3 border-b border-barber-gold/20">
          <p className="text-barber-white/90">{customerName}</p>
        </div>
      )}
      
      {selectedDate && selectedTime && (
        <div className="mb-3 pb-3 border-b border-barber-gold/20">
          <p className="text-barber-white/70 text-sm">Appointment Date & Time</p>
          <p className="text-barber-white/90">{format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}</p>
        </div>
      )}
      
      <div className="mb-3 pb-3 border-b border-barber-gold/20">
        <p className="text-barber-white/70 text-sm">Selected Services</p>
        <ul className="mt-1 space-y-1">
          {selectedServices.map((service) => (
            <li key={service.id} className="flex justify-between">
              <span className="text-barber-white/90">{service.name}</span>
              <span className="text-barber-gold">${service.price}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-barber-white/70">Duration:</span>
        <span>{totalDuration} min</span>
      </div>
      
      <div className="flex justify-between items-center font-semibold">
        <span>Total:</span>
        <span className="text-barber-gold text-xl">${totalAmount}</span>
      </div>
    </div>
  );
};

export default BookingSummary;
