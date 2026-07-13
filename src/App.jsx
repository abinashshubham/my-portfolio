import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing All Functional Modules Safely
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] text-white selection:bg-[#0c7fac] selection:text-white">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-16">
        <About />
        <Education />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;