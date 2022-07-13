import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import s from './MovieSearchList.module.css';
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
    <div className={s.wrap}>
      {status === 'rejected' && <h1>{error}</h1>}
      <ul className={s.list}>
        {status === 'resolved' &&
          movies.map(movie => {
            const { id, title } = movie;

            return (
              <li key={id} className={s.item}>
                <span className={s.span}>
                  &#127902;
                  <Link
                    className={s.link}
                    to={`/movies/${id}`}
                    state={{ from: location }}
                  >
                    <h2>{title}</h2>
                  </Link>
                </span>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieSearchList;
