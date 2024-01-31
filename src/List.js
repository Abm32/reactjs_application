// ShowList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ShowList() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setShows(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {shows.map(show => (
        <div key={show.show.id}>
          <h2>{show.show.name}</h2>
          <Link to={`/show/${show.show.id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ShowList;
