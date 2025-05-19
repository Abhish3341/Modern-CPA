import React from 'react';
import { Calculator, FileText, TrendingUp, Shield, Landmark, Users } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="inline-flex items-center justify-center bg-indigo-50 p-3 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Calculator className="h-6 w-6 text-indigo-700" />,
      title: "Tax Planning & Preparation",
      description: "Strategic tax planning and expert preparation for individuals and businesses to minimize liabilities and ensure compliance."
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-700" />,
      title: "Financial Statement Preparation",
      description: "Comprehensive financial statement preparation, providing clear insights into your financial position and performance."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-indigo-700" />,
      title: "Business Advisory",
      description: "Expert guidance for strategic decision-making, growth planning, and operational efficiency to maximize profitability."
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-700" />,
      title: "Audit & Assurance",
      description: "Thorough audit and assurance services to verify financial accuracy, identify risks, and ensure regulatory compliance."
    },
    {
      icon: <Landmark className="h-6 w-6 text-indigo-700" />,
      title: "Estate & Trust Planning",
      description: "Comprehensive estate and trust planning to protect assets, minimize taxes, and ensure your legacy is preserved."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-700" />,
      title: "Wealth Management",
      description: "Personalized wealth management strategies tailored to your financial goals, risk tolerance, and timeline."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600">We offer a comprehensive suite of financial services designed to help you navigate complex financial landscapes with confidence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;