import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Shield } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="inline-flex items-center justify-center bg-indigo-50 p-3 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6 text-indigo-700" />,
      title: "Excellence",
      description: "We maintain the highest standards of professional excellence in everything we do."
    },
    {
      icon: <Target className="h-6 w-6 text-indigo-700" />,
      title: "Precision",
      description: "Our attention to detail ensures accuracy and compliance in all financial matters."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-700" />,
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming trusted financial advisors."
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-700" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards and maintain complete transparency."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-indigo-900 mb-4">About Modern CPA</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Since 2010, Modern CPA has been providing exceptional accounting and financial advisory services to businesses and individuals. Our approach combines traditional accounting expertise with modern technology and innovative solutions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-semibold text-indigo-900 mb-2">15+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-semibold text-indigo-900 mb-2">500+</h3>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
          </motion.div>

          <motion.h3 
            className="font-serif text-2xl font-semibold text-indigo-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;