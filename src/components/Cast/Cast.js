import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../../services/fetchApi';
import MovieCastRender from '../MovieCastRender/MovieCastRender';
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
    <ul>
      {cast &&
        cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
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
