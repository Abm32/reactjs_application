// ShowList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function List() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

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

export default List;
