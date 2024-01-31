// ShowDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  if (!show) return null;

  return (
    <div>
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
    </div>
  );
}

export default Details;
