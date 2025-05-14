
import React from 'react';
import { Button } from '@/components/ui/button';

interface BookingNavigationProps {
  currentStep: number;
  handleBack: () => void;
  handleNext: () => void;
}

const BookingNavigation: React.FC<BookingNavigationProps> = ({ 
  currentStep, 
  handleBack, 
  handleNext 
}) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 0 ? (
        <Button 
          onClick={handleBack} 
          variant="outline"
          className="border-barber-white/20 text-barber-white hover:bg-barber-gold/5 hover:border-barber-gold/50"
        >
          Back
        </Button>
      ) : (
        <div></div>
      )}
      
      <Button 
        onClick={handleNext}
        className="bg-barber-gold hover:bg-barber-gold/90 text-barber-black"
      >
        Continue
      </Button>
    </div>
  );
};

export default BookingNavigation;
