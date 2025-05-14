
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceSelection from '@/components/booking/ServiceSelection';
import DateTimeSelection from '@/components/booking/DateTimeSelection';
import CustomerInfo from '@/components/booking/CustomerInfo';
import BookingSummary from '@/components/booking/BookingSummary';
import MpesaPayment from '@/components/booking/MpesaPayment';
import ConfirmationScreen from '@/components/booking/ConfirmationScreen';
import { Service } from '@/data/services';
import { Button } from '@/components/ui/button';
import { generateBookingId, sendBookingToBarber, sendReceiptToClient } from '@/utils/bookingUtils';
import { useToast } from '@/hooks/use-toast';

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
  
  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ServiceSelection 
                 selectedServices={selectedServices} 
                 setSelectedServices={setSelectedServices} 
               />;
      case 1:
        return <DateTimeSelection 
                 selectedDate={selectedDate} 
                 setSelectedDate={setSelectedDate}
                 selectedTime={selectedTime}
                 setSelectedTime={setSelectedTime}
               />;
      case 2:
        return <CustomerInfo 
                 name={name} setName={setName}
                 email={email} setEmail={setEmail}
                 phone={phone} setPhone={setPhone}
                 notes={notes} setNotes={setNotes}
               />;
      case 3:
        return <MpesaPayment 
                 amount={totalAmount} 
                 onPaymentSuccess={handlePaymentSuccess}
                 isProcessing={isProcessing}
                 setIsProcessing={setIsProcessing}
               />;
      case 4:
        return <ConfirmationScreen 
                 bookingDetails={{
                   services: selectedServices,
                   date: selectedDate!,
                   time: selectedTime!,
                   customerName: name,
                   customerEmail: email,
                   customerPhone: phone,
                   totalAmount,
                   bookingId
                 }}
                 onDone={resetBooking}
               />;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-barber-black text-barber-white">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Book Your <span className="gold-text">Appointment</span>
            </h1>
            
            {currentStep < 4 && (
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
            )}
            
            <div className="md:hidden mb-4">
              <p className="text-sm text-barber-white/70">Step {currentStep + 1} of {steps.length}</p>
              <p className="text-lg font-medium">{steps[currentStep]}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {renderStep()}
              
              {currentStep < 3 && (
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
