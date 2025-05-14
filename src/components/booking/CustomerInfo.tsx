
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CustomerInfoProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  name, setName,
  email, setEmail,
  phone, setPhone,
  notes, setNotes
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-playfair font-semibold mb-6">Your Information</h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-barber-white/80 mb-2">Full Name</label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="bg-transparent border-barber-white/20 focus:border-barber-gold/50 focus-visible:ring-barber-gold/30"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-barber-white/80 mb-2">Email Address</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="bg-transparent border-barber-white/20 focus:border-barber-gold/50 focus-visible:ring-barber-gold/30"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-barber-white/80 mb-2">Phone Number</label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
            className="bg-transparent border-barber-white/20 focus:border-barber-gold/50 focus-visible:ring-barber-gold/30"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-barber-white/80 mb-2">Special Requests (Optional)</label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any special requests or notes for your appointment"
            className="bg-transparent border-barber-white/20 focus:border-barber-gold/50 focus-visible:ring-barber-gold/30 min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
