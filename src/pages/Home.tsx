import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhatsAppSection from '../components/WhatsAppSection';
import NepalSection from '../components/NepalSection';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhatsAppSection />
      <NepalSection />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
