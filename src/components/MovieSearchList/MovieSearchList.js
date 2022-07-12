import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';

import fetchApi from '../../services/fetchApi';

const MovieSearchList = () => {
  const [params] = useSearchParams();
  const query = params.get('query');

  const { fetchSearchMovies } = fetchApi;
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');
    fetchSearchMovies(query)
      .then(({ results }) => {
        setStatus('resolved');
        setMovies(results);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [fetchSearchMovies, query]);

  return (
    <>
      {status === 'rejected' && <h1>{error}</h1>}
      <ul>
        {status === 'resolved' &&
          movies.map(movie => {
            const { id, title } = movie;

            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <h2>{title}</h2>
                </Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </>
  );
};
export default MovieSearchList;
