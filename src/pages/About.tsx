import React from 'react';
import { Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About the Engineering Society</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a community of passionate engineers and innovators dedicated to advancing technology and fostering collaboration among students, professionals, and industry leaders.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Our Community</h3>
          <p className="text-gray-600">A diverse network of engineering enthusiasts from various disciplines and backgrounds.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Lightbulb className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-600">Fostering creativity and cutting-edge solutions to real-world engineering challenges.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Award className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Excellence</h3>
          <p className="text-gray-600">Promoting high standards in engineering education, research, and professional practice.</p>
        </div>
      </section>

      <section className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
          To empower the next generation of engineers by providing opportunities for learning, networking, and professional development, while fostering a culture of innovation and collaboration.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Jane Doe', role: 'President', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' },
            { name: 'John Smith', role: 'Vice President', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' },
            { name: 'Emily Brown', role: 'Secretary', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' },
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;