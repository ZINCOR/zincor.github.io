import React from 'react';
import { Shield, Cpu, Server, Lock, Database, Code } from 'lucide-react';

const services = [
  {
    icon: <Shield className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: 'Cybersecurity',
    description: 'Advanced threat detection and prevention systems powered by machine learning algorithms.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Cpu className="h-10 w-10 text-purple-500 dark:text-purple-400" />,
    title: 'AI Solutions',
    description: 'Custom artificial intelligence solutions designed to optimize your business processes.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <Server className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud infrastructure management with 24/7 monitoring.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: <Lock className="h-10 w-10 text-green-500 dark:text-green-400" />,
    title: 'Data Protection',
    description: 'Comprehensive data protection solutions compliant with global regulations.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <Database className="h-10 w-10 text-red-500 dark:text-red-400" />,
    title: 'Big Data Analytics',
    description: 'Transform your raw data into actionable insights with our advanced analytics platform.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: <Code className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />,
    title: 'Custom Development',
    description: 'Tailored software solutions developed by our expert team to meet your specific needs.',
    color: 'from-yellow-500 to-yellow-600'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
          Cutting-edge solutions designed to protect and optimize your business in the digital age.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="mb-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-700 inline-block">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
              
              <div className="mt-6">
                <a 
                  href="#" 
                  className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${service.color} flex items-center`}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;