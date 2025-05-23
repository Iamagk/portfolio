import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address'
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been sent.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // In a real application, you would send the form data to a server here
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gold-100 dark:bg-gold-900/30 rounded-lg p-6 shadow-md">
                <div className="flex space-x-4">
                  <div className="p-3 bg-gold-200 dark:bg-gold-800/40 rounded-full text-gold-600 dark:text-gold-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:allenngeorgek@gmail.com" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                        allenngeorgek@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gold-100 dark:bg-gold-900/30 rounded-lg p-6 shadow-md">
                <div className="flex space-x-4">
                  <div className="p-3 bg-gold-200 dark:bg-gold-800/40 rounded-full text-gold-600 dark:text-gold-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Benguluru, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gold-100 dark:bg-gold-900/30 rounded-lg p-6 shadow-md">
                <div className="flex space-x-4">
                  <div className="p-3 bg-gold-200 dark:bg-gold-800/40 rounded-full text-gold-600 dark:text-gold-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+919946317858" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                        +91 9946317858
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-gold-100 dark:bg-gold-900/30 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gold-50 dark:bg-gold-800/40 border border-gold-200 dark:border-gold-800 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 dark:focus:ring-gold-400 dark:focus:border-gold-400 text-gray-900 dark:text-gold-100"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gold-50 dark:bg-gold-800/40 border border-gold-200 dark:border-gold-800 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 dark:focus:ring-gold-400 dark:focus:border-gold-400 text-gray-900 dark:text-gold-100"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-gold-50 dark:bg-gold-800/40 border border-gold-200 dark:border-gold-800 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 dark:focus:ring-gold-400 dark:focus:border-gold-400 text-gray-900 dark:text-gold-100"
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                  </div>
                  
                  {formStatus.submitted && (
                    <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gold-600 hover:bg-gold-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;