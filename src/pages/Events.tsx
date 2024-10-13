import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('https://api.example.com/events');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center">Loading events...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="mr-2" size={18} />
                <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="mr-2" size={18} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="mr-2" size={18} />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;