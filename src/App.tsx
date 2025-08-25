import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhatsAppDemo from './components/WhatsAppDemo';
import AutomationSolutions from './components/AutomationSolutions';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'GORK TECNOLOGIA | Automações, Landing Pages e IA';
    
    // Add grid pattern and animations to CSS
    const style = document.createElement('style');
    style.textContent = `
      .bg-grid-pattern {
        background-size: 30px 30px;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out forwards;
      }
      
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      .animate-scaleIn {
        animation: scaleIn 0.3s ease-out forwards;
      }

      @keyframes slideInLeft {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      @keyframes slideInRight {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      @keyframes slideInUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      .slide-in-left {
        opacity: 0;
        transform: translateX(-100px);
      }

      .slide-in-right {
        opacity: 0;
        transform: translateX(100px);
      }

      .slide-in-up {
        opacity: 0;
        transform: translateY(50px);
      }

      .animate-slide-in {
        animation: slideInUp 0.6s ease-out forwards;
      }

      .animate-slide-in-left {
        animation: slideInLeft 0.6s ease-out forwards;
      }

      .animate-slide-in-right {
        animation: slideInRight 0.6s ease-out forwards;
      }

      .bg-animate {
        background-size: 400% 400%;
        animation: gradientBG 15s ease infinite;
      }

      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .parallax {
        transform: translateY(var(--parallax-y, 0));
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Observe elements with animation classes
    document.querySelectorAll('.slide-in-up, .slide-in-left, .slide-in-right').forEach((el) => {
      observer.observe(el);
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.parallax').forEach((el) => {
          const speed = el.getAttribute('data-speed') || '0.5';
          const yPos = -(window.scrollY * parseFloat(speed));
          el.style.setProperty('--parallax-y', `${yPos}px`);
        });
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="antialiased text-gray-100 min-h-screen bg-animate bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AutomationSolutions />
        <WhatsAppDemo />
        <Portfolio />
        <About />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;