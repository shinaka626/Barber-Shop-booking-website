
import React from 'react';

interface BookingStepsProps {
  steps: string[];
  currentStep: number;
}

const BookingSteps: React.FC<BookingStepsProps> = ({ steps, currentStep }) => {
  return (
    <>
      <div className="flex justify-between mb-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`hidden md:block text-sm ${
              index === currentStep 
                ? 'text-barber-gold' 
                : index < currentStep 
                  ? 'text-barber-white/70' 
                  : 'text-barber-white/30'
            }`}
          >
            <span className={`inline-block w-6 h-6 rounded-full text-center mr-2 ${
              index <= currentStep 
                ? 'bg-barber-gold text-barber-black' 
                : 'bg-barber-white/10 text-barber-white/50'
            }`}>
              {index + 1}
            </span>
            {step}
          </div>
        ))}
      </div>
      
      <div className="md:hidden mb-4">
        <p className="text-sm text-barber-white/70">Step {currentStep + 1} of {steps.length}</p>
        <p className="text-lg font-medium">{steps[currentStep]}</p>
      </div>
    </>
  );
};

export default BookingSteps;
