import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Engineering Society</h1>
        <p className="text-xl text-gray-600 mb-8">Empowering future engineers through innovation and collaboration</p>
        <Link to="/events" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Explore Our Events
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Calendar className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
          <p className="text-gray-600">Join our workshops, seminars, and networking events.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-600">Connect with fellow engineering enthusiasts and professionals.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <BookOpen className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Resources</h3>
          <p className="text-gray-600">Access study materials, project ideas, and career guidance.</p>
        </div>
      </section>

      <section className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Event</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Annual Engineering Expo</h3>
          <p className="text-gray-600 mb-4">Join us for a showcase of innovative projects, networking opportunities, and inspiring talks from industry leaders.</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-semibold">Date: June 15, 2024</span>
            <Link to="/events" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;