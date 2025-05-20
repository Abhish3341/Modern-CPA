import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, bio }) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex space-x-3 justify-center">
          <a href="#" className="bg-white p-2 rounded-full text-indigo-900 hover:text-indigo-700 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="bg-white p-2 rounded-full text-indigo-900 hover:text-indigo-700 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
    <h3 className="font-serif text-xl font-semibold text-indigo-900">{name}</h3>
    <p className="text-amber-600 mb-2">{role}</p>
    <p className="text-gray-600 text-sm">{bio}</p>
  </div>
);

const Team: React.FC = () => {
  const teamMembers = [
    {
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Sarah Johnson, CPA",
      role: "Founding Partner",
      bio: "With over 20 years of experience in tax strategy and business advisory, Sarah leads our firm with expertise and vision."
    },
    {
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Michael Chen, CPA",
      role: "Tax Director",
      bio: "Michael specializes in complex tax planning for high-net-worth individuals and growing businesses across multiple industries."
    },
    {
      image: "https://images.pexels.com/photos/7654096/pexels-photo-7654096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Ken Xu, MBA",
      role: "Advisory Services",
      bio: "Emily brings a wealth of knowledge in business strategy and financial analysis to help clients achieve their growth objectives."
    }
  ];

  return (
    <section id="team" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600">Meet our team of dedicated professionals who are committed to your financial success.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;