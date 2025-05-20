import React from 'react';

const ServiceListing = () => {
  const services = [
    {
      title: 'Luxury Wedding',
      price: 'Rs15,000',
      description: 'Ralf-day conference setup with AV equipment for up to 300 attendees',
    },
    {
      title: 'Conference Package',
      price: 'Rs8,000',
      description: 'Ralf-day conference setup with AV equipment for up to 300 attendees',
    },
    {
      title: 'Birthday Celebration',
      price: 'Rs3,000',
      description: 'Themed birthday party planning for up to 50 guests',
    },
    {
      title: 'Intimate Wedding',
      price: 'Rs8,000',
      description: 'Intimate wedding planning for up to 50 guests',
    },
    {
      title: 'Product Launch',
      price: 'Rs12,000',
      description: 'Product launch events with marketing and support',
    },
    {
      title: 'Anniversary Party',
      price: 'Rs5,000',
      description: 'Anniversary celebration planning for up to 100 guests',
    },
  ];

  return (
    <div className="service-listing">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p className="price">{service.price}</p>
            <p className="description">{service.description}</p>
            <button onClick={() => alert(`Booking ${service.title}`)}>Book This Package</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceListing;