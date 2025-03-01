import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Cpu, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      
      const { left, top, width, height } = logoRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = (e.clientX - centerX) / 25;
      const deltaY = (e.clientY - centerY) / 25;
      
      logoRef.current.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Secure Your Future with</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Next-Gen Technology
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300">
              Pioneering AI-powered cybersecurity solutions for enterprises in an increasingly connected world.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-lg shadow-lg hover:shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center">
              <Cpu className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              <span>Global Support</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div 
            ref={logoRef}
            className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-200 ease-out"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-slate-900 dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-40 h-40 md:w-56 md:h-56 bg-slate-800 dark:bg-slate-700 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="h-16 w-16 md:h-24 md:w-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;