import React from 'react';
import { Briefcase, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.div 
              className="flex items-center mb-4 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase className="h-6 w-6 mr-2" />
              <span className="font-serif text-xl font-bold">Modern CPA</span>
            </motion.div>
            <p className="text-indigo-200 mb-6">
              A boutique CPA firm providing personalized financial strategies for discerning businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-white hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Tax Planning',
                'Financial Statements',
                'Business Advisory',
                'Audit & Assurance',
                'Estate Planning'
              ].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <a href="#services" className="text-indigo-200 hover:text-white transition-colors">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ['About Us', '#about'],
                ['Our Team', '#team'],
                ['Client Portal', '#'],
                ['Resources', '#'],
                ['Careers', '#']
              ].map(([text, href]) => (
                <motion.li key={text} whileHover={{ x: 5 }}>
                  <a href={href} className="text-indigo-200 hover:text-white transition-colors">
                    {text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-indigo-200 mb-4">Subscribe to our newsletter for tax updates and financial insights.</p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-indigo-800 text-white placeholder-indigo-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
                />
                <motion.button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-indigo-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Modern CPA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((text) => (
              <motion.a
                key={text}
                href="#"
                className="text-indigo-300 hover:text-white text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;