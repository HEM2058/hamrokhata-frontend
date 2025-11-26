import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhatsAppSection from './components/WhatsAppSection';
import NepalSection from './components/NepalSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const element = id ? document.querySelector(id) : null;
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Smart navbar auto-hide on scroll
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const currentScrollY = window.scrollY;

      if (navbar) {
        // Add scrolled class for styling
        if (currentScrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }

        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past threshold - hide navbar
          navbar.classList.add('navbar-hidden');
        } else {
          // Scrolling up - show navbar
          navbar.classList.remove('navbar-hidden');
        }

        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Animate elements on scroll
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .pricing-card').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <WhatsAppSection />
      <NepalSection />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
