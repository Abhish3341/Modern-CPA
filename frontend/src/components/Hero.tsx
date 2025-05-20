import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-20 pb-20 md:pt-32 md:pb-40 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-indigo-900 leading-tight mb-4">
              Modern Solutions for <br />
              <span className="text-amber-600">Today's Financial Challenges</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              A boutique CPA firm providing personalized financial strategies for discerning businesses and individuals.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.button 
                className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-3 rounded-md transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button 
                className="border border-indigo-900 text-indigo-900 hover:bg-indigo-50 px-6 py-3 rounded-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMore}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-sm text-gray-500 mb-4">Trusted by leading companies:</p>
              <div className="grid grid-cols-3 gap-6">
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                >
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="h-8 object-contain"
                  />
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                >
                  <img 
                    src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
                    alt="Microsoft"
                    className="h-8 object-contain"
                  />
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg"
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                    alt="Hewlett Packard Enterprise"
                    className="h-8 object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-10 md:mt-0 md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-amber-100 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -90, 0]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="relative z-10 border-8 border-white shadow-xl rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Professional accountant" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}></div>
    </div>
  );
};

export default Hero;