
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Service } from '@/data/services';
import { useToast } from '@/hooks/use-toast';
import { generateBookingId, sendBookingToBarber, sendReceiptToClient } from '@/utils/bookingUtils';
import BookingContainer from '@/components/booking/BookingContainer';
import BookingSteps from '@/components/booking/BookingSteps';
import BookingContent from '@/components/booking/BookingContent';
import BookingNavigation from '@/components/booking/BookingNavigation';
import BookingSummary from '@/components/booking/BookingSummary';

const steps = [
  "Choose Services",
  "Select Date & Time",
  "Personal Information",
  "Payment",
  "Confirmation"
];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get the selected service from navigation state if available
  const preselectedService = location.state?.selectedService;
  
  // State variables
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<Service[]>(
    preselectedService ? [preselectedService] : []
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingId, setBookingId] = useState('');
  
  const totalAmount = selectedServices.reduce((sum, service) => sum + service.price, 0);
  
  const handleNext = () => {
    if (currentStep === 0 && selectedServices.length === 0) {
      toast({
        title: "No services selected",
        description: "Please select at least one service to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 1 && (!selectedDate || !selectedTime)) {
      toast({
        title: "Date and time required",
        description: "Please select both a date and time for your appointment",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 2 && (!name || !email || !phone)) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handlePaymentSuccess = async () => {
    const newBookingId = generateBookingId();
    setBookingId(newBookingId);
    
    // Send booking to barber via WhatsApp
    await sendBookingToBarber(
      selectedServices,
      selectedDate!,
      selectedTime!,
      name,
      phone,
      notes
    );
    
    // Send receipt to client
    await sendReceiptToClient(email, {
      bookingId: newBookingId,
      services: selectedServices,
      date: selectedDate!,
      time: selectedTime!,
      totalAmount
    });
    
    // Move to confirmation step
    setCurrentStep(4);
    window.scrollTo(0, 0);
  };
  
  const resetBooking = () => {
    navigate('/');
  };
  
  return (
    <BookingContainer title="Book Your">
      {currentStep < 4 && <BookingSteps steps={steps} currentStep={currentStep} />}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <BookingContent
            currentStep={currentStep}
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            notes={notes}
            setNotes={setNotes}
            handlePaymentSuccess={handlePaymentSuccess}
            isProcessing={isProcessing}
            setIsProcessing={setIsProcessing}
            totalAmount={totalAmount}
            resetBooking={resetBooking}
            bookingId={bookingId}
          />
          
          {currentStep < 3 && (
            <BookingNavigation
              currentStep={currentStep}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          )}
        </div>
        
        <div>
          {currentStep < 4 && selectedServices.length > 0 && (
            <BookingSummary 
              selectedServices={selectedServices}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              customerName={name}
            />
          )}
        </div>
      </div>
    </BookingContainer>
  );
};

export default Booking;
