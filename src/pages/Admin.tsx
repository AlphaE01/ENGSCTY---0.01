import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

interface EventFormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const Admin: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EventFormData>();

  useEffect(() => {
    fetchEvents();
  }, []);

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

  const onSubmit = async (data: EventFormData) => {
    try {
      // Replace with your actual API endpoint
      await axios.post('https://api.example.com/events', data);
      alert('Event added successfully!');
      reset();
      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event. Please try again.');
    }
  };

  const deleteEvent = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        // Replace with your actual API endpoint
        await axios.delete(`https://api.example.com/events/${id}`);
        alert('Event deleted successfully!');
        fetchEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('Failed to delete event. Please try again.');
      }
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              id="title"
              {...register('title', { required: 'Title is required' })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <label htmlFor="date" className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              id="date"
              {...register('date', { required: 'Date is required' })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
          </div>
          <div>
            <label htmlFor="time" className="block mb-1 font-medium">Time</label>
            <input
              type="time"
              id="time"
              {...register('time', { required: 'Time is required' })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
          </div>
          <div>
            <label htmlFor="location" className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              id="location"
              {...register('location', { required: 'Location is required' })}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">Description</label>
            <textarea
              id="description"
              {...register('description', { required: 'Description is required' })}
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Add Event
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Manage Events</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">
                {format(new Date(event.date), 'MMMM d, yyyy')} at {event.time}
              </p>
              <p className="text-gray-600 mb-2">{event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button
                onClick={() => deleteEvent(event.id)}
                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Admin;