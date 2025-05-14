
import { Service } from '@/data/services';
import { format } from 'date-fns';

// The barber's WhatsApp phone number (with country code)
const BARBER_PHONE_NUMBER = "+254759507039"; // Barber's phone number with country code

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
    try {
      // Create a formatted message for WhatsApp
      const servicesText = services.map(s => `- ${s.name} ($${s.price})`).join('\n');
      const totalAmount = services.reduce((sum, service) => sum + service.price, 0);
      const formattedDate = format(date, 'MMMM d, yyyy');
      
      const message = `*NEW BOOKING*\n\n` +
        `*Customer*: ${customerName}\n` +
        `*Phone*: ${customerPhone}\n` +
        `*Date*: ${formattedDate}\n` +
        `*Time*: ${time}\n\n` +
        `*Services*:\n${servicesText}\n\n` +
        `*Total*: $${totalAmount}\n\n` +
        `${notes ? `*Notes*: ${notes}` : ''}`;
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${BARBER_PHONE_NUMBER}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      console.log('WhatsApp message link opened:', whatsappUrl);
      resolve(true);
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      resolve(false);
    }
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
