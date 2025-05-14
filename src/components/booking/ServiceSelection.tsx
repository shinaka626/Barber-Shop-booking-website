
import React from 'react';
import { Service, services } from '@/data/services';

interface ServiceSelectionProps {
  selectedServices: Service[];
  setSelectedServices: (services: Service[]) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ 
  selectedServices, 
  setSelectedServices 
}) => {
  const toggleService = (service: Service) => {
    if (selectedServices.some(s => s.id === service.id)) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-playfair font-semibold mb-6">Select Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => {
          const isSelected = selectedServices.some(s => s.id === service.id);
          
          return (
            <div 
              key={service.id}
              onClick={() => toggleService(service)}
              className={`cursor-pointer p-4 rounded-md border transition-all ${
                isSelected 
                  ? 'border-barber-gold bg-barber-gold/10' 
                  : 'border-barber-white/20 hover:border-barber-gold/50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-barber-white/70 text-sm">{service.description}</p>
                  <p className="text-sm text-barber-white/50 mt-1">{service.duration} min</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-barber-gold font-playfair text-xl">${service.price}</span>
                  {isSelected && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-barber-gold mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {selectedServices.length > 0 && (
        <div className="mt-4 p-4 border border-barber-gold/30 bg-barber-gold/5 rounded-md">
          <h3 className="font-semibold mb-2">Selected Services</h3>
          <ul className="space-y-1">
            {selectedServices.map(service => (
              <li key={service.id} className="flex justify-between">
                <span>{service.name}</span>
                <span className="text-barber-gold">${service.price}</span>
              </li>
            ))}
            <li className="flex justify-between font-semibold border-t border-barber-gold/30 pt-2 mt-2">
              <span>Total</span>
              <span className="text-barber-gold">${selectedServices.reduce((sum, service) => sum + service.price, 0)}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceSelection;
