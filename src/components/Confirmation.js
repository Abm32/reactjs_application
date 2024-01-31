// TicketConfirmation.js
import React from 'react';

function TicketConfirmation({ showName, bookingStatus, onClose }) {
  return (
    <div className="ticket-confirmation">
      <h2>Ticket Booking Confirmation</h2>
      <p>Movie: {showName}</p>
      <p>Status: {bookingStatus}</p>
      <button onClick={onClose}>Back to Home</button>
    </div>
  );
}

export default TicketConfirmation;
