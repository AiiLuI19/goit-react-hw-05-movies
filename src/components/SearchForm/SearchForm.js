import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleNameChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (movieName.trim() === '') {
      return toast.info('Add name img');
    }
    onSubmit(movieName);
    setMovieName('');
  };
  return (
    <div className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          value={movieName}
          onChange={handleNameChange}
          autoFocus
          name="movieName"
          placeholder="Search movies"
          className={s.input}
        />
        <button type="submit" className={s.button} aria-label="search button">
          Search
        </button>
      </form>
    </div>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
