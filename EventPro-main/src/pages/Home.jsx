import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import EventCard from '../components/EventCard';
import Testimonial from '../components/Testimonial';

const Home = () => {
  const events = [
    {
      title: 'Luxury Wedding',
      price: 'Rs.15,000',
      description: 'Create your dream wedding with our expert planning services.',
      image: '/images/wedding.jpg',
    },
    {
      title: 'Conference Package',
      price: 'Rs8,000',
      description: 'Professional setup for conferences, seminars, and team building.',
      image: '/images/conference.jpg',
    },
    {
      title: 'Birthday Celebration',
      price: 'Rs3,000',
      description: 'Themed birthday parties for up to 50 guests.',
      image: '/images/birthday.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Create Unforgettable Events</h1>
          <p>Transform your vision into reality with our expert event planning services.</p>
          <Link to="/booking"> {/* Use Link instead of button */}
            <button>Book Your Event</button>
          </Link>
        </div>
      </div>

      {/* Event Cards */}
      <div className="event-listing">
        <h2>Our Event Highlights</h2>
        <div className="events-container">
          {events.map((event, index) => (
            <EventCard key={index} {...event} onBook={() => alert(`Booking ${event.title}`)} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <Testimonial />
    </div>
  );
};

export default Home;