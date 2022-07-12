import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';


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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        value={movieName}
        onChange={handleNameChange}
        autoFocus
        name="movieName"
        placeholder="Search movies and photos"
      />
      <button type="submit" aria-label="search button">
        Search
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
