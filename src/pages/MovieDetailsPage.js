import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import fetchApi from '../services/fetchApi';

const MovieDetailsPage = () => {
  const { fetchMoviesInfo } = fetchApi;
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesInfo(movieId).then(results => {
      setMovie(results);
    });
  }, [movieId, fetchMoviesInfo]);

  return <section>{movie && <MovieDetails movie={movie} />}</section>;
};
export default MovieDetailsPage;
