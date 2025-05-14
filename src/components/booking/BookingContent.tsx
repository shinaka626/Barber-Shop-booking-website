
import React from 'react';
import { Service } from '@/data/services';
import ServiceSelection from '@/components/booking/ServiceSelection';
import DateTimeSelection from '@/components/booking/DateTimeSelection';
import CustomerInfo from '@/components/booking/CustomerInfo';
import MpesaPayment from '@/components/booking/MpesaPayment';
import ConfirmationScreen from '@/components/booking/ConfirmationScreen';

interface BookingContentProps {
  currentStep: number;
  selectedServices: Service[];
  setSelectedServices: (services: Service[]) => void;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string | undefined;
  setSelectedTime: (time: string | undefined) => void;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  handlePaymentSuccess: () => void;
  isProcessing: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
  totalAmount: number;
  resetBooking: () => void;
  bookingId: string;
}

const BookingContent: React.FC<BookingContentProps> = ({
  currentStep,
  selectedServices,
  setSelectedServices,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  notes,
  setNotes,
  handlePaymentSuccess,
  isProcessing,
  setIsProcessing,
  totalAmount,
  resetBooking,
  bookingId
}) => {
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

export default BookingContent;
