import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] text-white selection:bg-[#0c7fac] selection:text-white relative">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <About />
        <Education />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;