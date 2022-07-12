import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchApi from '../../services/fetchApi';
const MovieList = () => {
  const { fetchTrending } = fetchApi;

  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(({ results }) => setTrendMovies(results));
  }, [fetchTrending]);

  return (
    <ul>
      {trendMovies &&
        trendMovies.map(trendMovie => {
          const { id, title } = trendMovie;

          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={trendMovie}>
                <h2>{title}</h2>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
export default MovieList;
