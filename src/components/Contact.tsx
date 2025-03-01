import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Have questions about our services or want to discuss how we can help secure your organization? 
            Reach out to our team of experts.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Email Us</h3>
                <p className="text-slate-600 dark:text-slate-300">info@zincor.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Phone className="h-6 w-6 text-purple-500 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Call Us</h3>
                <p className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <MapPin className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Visit Us</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  1234 Tech Boulevard, Suite 500<br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                  <svg className="w-8 h-8 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-transparent border ${
                        errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-200 ${
                        formData.name ? '-top-2.5 text-sm bg-white dark:bg-slate-800 px-1' : 'top-3'
                      } ${errors.name ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}`}
                    >
                      Your Name
                    </label>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-transparent border ${
                        errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-200 ${
                        formData.email ? '-top-2.5 text-sm bg-white dark:bg-slate-800 px-1' : 'top-3'
                      } ${errors.email ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}`}
                    >
                      Your Email
                    </label>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-transparent border ${
                        errors.subject ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="subject"
                      className={`absolute left-4 transition-all duration-200 ${
                        formData.subject ? '-top-2.5 text-sm bg-white dark:bg-slate-800 px-1' : 'top-3'
                      } ${errors.subject ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}`}
                    >
                      Subject
                    </label>
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                  
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 bg-transparent border ${
                        errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all`}
                      placeholder=" "
                    ></textarea>
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-200 ${
                        formData.message ? '-top-2.5 text-sm bg-white dark:bg-slate-800 px-1' : 'top-3'
                      } ${errors.message ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}`}
                    >
                      Your Message
                    </label>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-6 w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;