// ShowDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TicketForm from './Ticket';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setShow(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>{show.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
          <TicketForm showName={show.name} />
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;