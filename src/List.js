import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './list.css';

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
    <div className="container">
      <h1 className="main-heading d-flex justify-content-center mt-5 mb-5">Movies</h1> {/* Main heading */}
      <div className="row">
        {shows.map(show => (
          <div className="col-md-4 mb-4" key={show.show.id}>
            <div className="card">
                {show.show.image ? (
                    <img src={show.show.image.medium} className="card-img-top" alt={show.show.name} />
                ) : (
                    <img src="https://via.placeholder.com/210x295" className="card-img-top" alt="Placeholder" />
                )}
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
