
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MpesaPaymentProps {
  amount: number;
  onPaymentSuccess: () => void;
  isProcessing: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
}

const MpesaPayment: React.FC<MpesaPaymentProps> = ({ 
  amount, 
  onPaymentSuccess,
  isProcessing,
  setIsProcessing
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid M-Pesa phone number",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate M-Pesa API call
    setTimeout(() => {
      toast({
        title: "Payment request sent",
        description: "Please check your phone for the M-Pesa payment prompt",
      });
      
      // Simulate successful payment after 3 seconds
      setTimeout(() => {
        setIsProcessing(false);
        onPaymentSuccess();
        toast({
          title: "Payment successful",
          description: "Your payment has been processed successfully",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-playfair font-semibold mb-6">M-Pesa Payment</h2>
      
      <div className="bg-barber-gold/5 border border-barber-gold/30 rounded-md p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-barber-white/80">Total Amount:</span>
          <span className="text-xl font-semibold text-barber-gold">${amount}</span>
        </div>
      </div>
      
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label htmlFor="mpesa-phone" className="block text-barber-white/80 mb-2">
            M-Pesa Phone Number
          </label>
          <Input
            id="mpesa-phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g. 0712345678"
            disabled={isProcessing}
            required
            className="bg-transparent border-barber-white/20 focus:border-barber-gold/50 focus-visible:ring-barber-gold/30"
          />
          <p className="text-sm text-barber-white/60 mt-1">
            Enter the phone number registered with M-Pesa
          </p>
        </div>
        
        <Button 
          type="submit"
          disabled={isProcessing}
          className="w-full bg-barber-gold hover:bg-barber-gold/90 text-barber-black py-3 font-medium"
        >
          {isProcessing ? "Processing Payment..." : "Pay with M-Pesa"}
        </Button>
      </form>
      
      <div className="mt-4 text-center text-sm text-barber-white/60">
        <p>You will receive a prompt on your phone to confirm the payment.</p>
      </div>
    </div>
  );
};

export default MpesaPayment;
