
import { Service } from '@/data/services';

// Function to send booking to barber via WhatsApp
export const sendBookingToBarber = (
  services: Service[],
  date: Date,
  time: string,
  customerName: string,
  customerPhone: string,
  notes: string = ''
): Promise<boolean> => {
  return new Promise((resolve) => {
    console.log('Sending booking to barber via WhatsApp:', {
      services,
      date,
      time,
      customerName,
      customerPhone,
      notes
    });
    
    // In a real implementation, this would integrate with WhatsApp API
    // For now, we'll simulate a successful message
    setTimeout(() => {
      console.log('Booking sent to barber successfully');
      resolve(true);
    }, 1000);
  });
};

// Function to send receipt to client
export const sendReceiptToClient = (
  email: string, 
  bookingDetails: {
    bookingId: string;
    services: Service[];
    date: Date;
    time: string;
    totalAmount: number;
  }
): Promise<boolean> => {
  return new Promise((resolve) => {
    console.log('Sending receipt to client:', {
      email,
      bookingDetails
    });
    
    // In a real implementation, this would send an email
    // For now, we'll simulate a successful email
    setTimeout(() => {
      console.log('Receipt sent to client successfully');
      resolve(true);
    }, 1000);
  });
};

// Generate a random booking ID
export const generateBookingId = (): string => {
  return 'BK' + Math.floor(100000 + Math.random() * 900000);
};
