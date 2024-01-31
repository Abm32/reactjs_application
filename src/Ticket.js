
// TicketForm.js
import React, { useState } from 'react';

function TicketForm({ showName }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Here you would typically send the data to your server
    console.log(`Booking ticket for ${showName} by ${name} (${email})`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center">Book a ticket for {showName}</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary btn-block">Book Ticket</button>
    </form>
  );
}

export default TicketForm;