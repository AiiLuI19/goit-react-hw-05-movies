import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchApi from '../../services/fetchApi';
const MovieSearchList = ({ movieName }) => {
  const { fetchSearchMovies } = fetchApi;
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieName) {
      return;
    }
    setStatus('pending');
    fetchSearchMovies(movieName)
      .then(({ results }) => {
        setStatus('resolved');
        setMovies(results);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [fetchSearchMovies, movieName]);
  console.log();

  return (
    <>
      {status === 'rejected' && <h1>{error}</h1>}
      <ul>
        {status === 'resolved' &&
          movies.map(movie => {
            const { id, title } = movie;

            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={movie}>
                  <h2>{title}</h2>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default MovieSearchList;
