import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../../services/fetchApi';
import MovieCastRender from '../MovieCastRender/MovieCastRender';
import s from '../MovieCastRender/MovieCastRender.module.css';
const Cast = () => {
  const { fetchMoviesCredits } = fetchApi;
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesCredits(movieId).then(results => {
      setCast(results.cast);
    });
  }, [movieId, fetchMoviesCredits]);

  return (
    <ul className={s.list}>
      {cast &&
        cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id} className={s.li}>
              <MovieCastRender
                name={name}
                character={character}
                profile={profile_path}
              />
            </li>
          );
        })}
    </ul>
  );
};
export default Cast;
