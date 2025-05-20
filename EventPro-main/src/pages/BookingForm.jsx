// BookingForm.jsx
import React, { useState } from 'react';

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server or API
    console.log({ name, email, phone, eventDate, eventType, message });
    alert('Booking request submitted!'); // Replace with actual submission logic
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setEventDate('');
    setEventType('');
    setMessage('');
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventType">Event Type:</label>
          <select
            id="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            required
          >
            <option value="">Select Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday Party</option>
            <option value="conference">Conference</option>
            <option value="corporate">Corporate Event</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;