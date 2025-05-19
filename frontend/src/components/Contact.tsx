import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; details: string }> = ({ icon, title, details }) => (
  <div className="flex space-x-4 items-start">
    <div className="bg-indigo-50 p-3 rounded-lg">
      {icon}
    </div>
    <div>
      <h4 className="font-serif font-semibold text-lg text-indigo-900">{title}</h4>
      <p className="text-gray-600">{details}</p>
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600">Schedule a consultation or reach out with any questions. We're here to help.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl font-semibold text-indigo-900 mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-6 rounded-md transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="font-serif text-2xl font-semibold text-indigo-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon={<MapPin className="h-6 w-6 text-indigo-700" />}
                  title="Our Office"
                  details="123 Financial District, New York, NY 10004"
                />
                <ContactInfo
                  icon={<Phone className="h-6 w-6 text-indigo-700" />}
                  title="Phone"
                  details="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={<Mail className="h-6 w-6 text-indigo-700" />}
                  title="Email"
                  details="info@moderncpa.com"
                />
                <ContactInfo
                  icon={<Clock className="h-6 w-6 text-indigo-700" />}
                  title="Business Hours"
                  details="Monday - Friday: 9:00 AM - 5:00 PM"
                />
              </div>
            </div>
            
            <div className="bg-indigo-900 p-8 rounded-lg shadow-md text-white">
              <h3 className="font-serif text-xl font-semibold mb-4">Schedule a Consultation</h3>
              <p className="mb-6">Ready to take the next step? Schedule a personalized consultation with one of our expert CPAs.</p>
              <button className="bg-white text-indigo-900 hover:bg-indigo-50 py-3 px-6 rounded-md transition-colors duration-300 shadow-sm hover:shadow-md">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;