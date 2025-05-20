import React from 'react';

const EventCard = ({ title, price, description, image, onBook }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <button onClick={onBook}>Book This Package</button>
    </div>
  );
};

export default EventCard;