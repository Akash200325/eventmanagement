import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Corporate Client',
      comment: 'The best event planning experience I’ve ever had!',
    },
    {
      id: 2,
      name: 'Michael Smith',
      role: 'Wedding Client',
      comment: 'Absolutely flawless execution. Highly recommend EventPro!',
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Birthday Party Client',
      comment: 'They made my birthday unforgettable. Thank you!',
    },
  ];

  return (
    <div className="testimonial-section">
      <h2>Client Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="comment">"{testimonial.comment}"</p>
            <p className="name">{testimonial.name}</p>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;