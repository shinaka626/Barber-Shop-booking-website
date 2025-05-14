
import React, { useState } from 'react';
import { format, addDays, isBefore, startOfDay } from 'date-fns';
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface DateTimeSelectionProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string | undefined;
  setSelectedTime: (time: string | undefined) => void;
}

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM"
];

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime
}) => {
  const today = new Date();
  const oneMonthFromNow = addDays(today, 30);
  
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0; // Sunday
  };

  // Disable past dates and dates more than a month in the future
  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfDay(today)) || isWeekend(date);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-playfair font-semibold mb-6">Select Date & Time</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-barber-white/80 mb-2">Select Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-transparent border-barber-white/20 hover:bg-barber-gold/5 hover:border-barber-gold/50",
                  !selectedDate && "text-barber-white/50"
                )}
              >
                {selectedDate ? format(selectedDate, "MMMM d, yyyy") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-barber-black border border-barber-gold/30">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={isDateDisabled}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-barber-white/80 mb-2">Select Time</label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-3 rounded-md text-sm transition-colors ${
                  selectedTime === time
                    ? 'bg-barber-gold text-barber-black'
                    : 'bg-transparent border border-barber-white/20 hover:border-barber-gold/50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
