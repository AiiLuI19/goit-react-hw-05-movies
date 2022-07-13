import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchApi from '../../services/fetchApi';
import s from './MovieList.module.css';
const MovieList = () => {
  const location = useLocation();

  const { fetchTrending } = fetchApi;

  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(({ results }) => setTrendMovies(results));
  }, [fetchTrending]);

  return (
    <ul className={s.list}>
      {trendMovies &&
        trendMovies.map(trendMovie => {
          const { id, title } = trendMovie;

          return (
            <li key={id}>
              <span className={s.span}>
                &#127909;
                <Link
                  className={s.li}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  <h2 className={s.title}>{title}</h2>
                </Link>
              </span>
            </li>
          );
        })}
    </ul>
  );
};
export default MovieList;
