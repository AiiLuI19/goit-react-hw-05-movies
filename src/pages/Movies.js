import { useState } from 'react';
import MovieSearchList from '../components/MovieSearchList';
import SearchForm from '../components/SearchForm/SearchForm';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  console.log(movieName);
  const handleFormSubmit = movieName => {
    setMovieName(movieName);
  };
  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} />
      <MovieSearchList movieName={movieName} />
    </main>
  );
};
export default Movies;
