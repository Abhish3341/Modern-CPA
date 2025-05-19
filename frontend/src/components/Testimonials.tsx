import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company }) => (
  <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
    <div>
      <p className="font-serif font-semibold text-indigo-900">{author}</p>
      <p className="text-gray-500 text-sm">{position}, {company}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Modern CPA transformed our financial strategy. Their team's insight and attention to detail saved us thousands in taxes while positioning our business for sustainable growth.",
      author: "Robert Martinez",
      position: "CEO",
      company: "Elevation Builders"
    },
    {
      quote: "The personalized service we receive from Modern CPA is unmatched. They're not just our accountants; they're trusted advisors who genuinely care about our financial wellbeing.",
      author: "Jennifer Williams",
      position: "Founder",
      company: "Bright Path Ventures"
    },
    {
      quote: "Working with Modern CPA has given us the financial clarity and confidence we needed to expand our operations. Their proactive approach has been instrumental to our success.",
      author: "David Chang",
      position: "CFO",
      company: "Innovate Technologies"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600">Hear what our clients have to say about their experience working with Modern CPA.</p>
        </div>
        
        <div className="relative">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
          
          {/* Mobile Slider */}
          <div className="md:hidden">
            <Testimonial
              quote={testimonials[currentSlide].quote}
              author={testimonials[currentSlide].author}
              position={testimonials[currentSlide].position}
              company={testimonials[currentSlide].company}
            />
            
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-indigo-100 text-indigo-900 hover:bg-indigo-200 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-indigo-100 text-indigo-900 hover:bg-indigo-200 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;