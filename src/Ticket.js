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
      <h2>Book a ticket for {showName}</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <button type="submit">Book Ticket</button>
    </form>
  );
}

export default TicketForm;
