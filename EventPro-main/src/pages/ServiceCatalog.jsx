// src/pages/ServiceCatalog.jsx

import React from "react";
import "./ServiceCatalog.css"; // Create CSS for styling

const services = [
  {
    title: "Event Planning",
    description: "Complete event planning services from concept to execution including logistics, timeline management, and vendor coordination.",
    price: "Starting at ₹10,000",
    image: "/images/event-planning.jpg",
  },
  {
    title: "Venue Selection",
    description: "Get access to top venues based on your event size, type, and location preferences.",
    price: "Starting at ₹5,000",
    image: "/images/venue-selection.jpg",
  },
  {
    title: "Marketing Packages",
    description: "Social media, email campaigns, and offline promotions tailored to your event audience.",
    price: "Starting at ₹7,500",
    image: "/images/marketing.jpg",
  },
  // Add more services here
];

const ServiceCatalog = () => {
  return (
    <div className="catalog-container">
      <h1>Our Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <strong>{service.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCatalog;
