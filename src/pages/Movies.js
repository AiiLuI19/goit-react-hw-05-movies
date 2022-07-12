import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieSearchList from '../components/MovieSearchList';
import SearchForm from '../components/SearchForm/SearchForm';

const Movies = () => {
  const navigate = useNavigate();
  const handleFormSubmit = movieName => {
    navigate({ search: `query=${movieName}` });
  };
  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} />
      <MovieSearchList />
    </main>
  );
};
export default Movies;
