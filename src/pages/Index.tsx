
import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import FeaturedServices from '@/components/home/FeaturedServices';
import AboutSection from '@/components/home/AboutSection';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-barber-black text-barber-white">
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <AboutSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
