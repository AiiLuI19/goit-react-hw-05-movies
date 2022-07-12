import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const backLink = useRef(
    location?.state?.from ? location.state?.from : '/movies'
  );

  const {
    original_title,
    genres,
    vote_average,
    overview,
    poster_path,
    release_date,
  } = movie;
  return (
    <>
      <div>
        <Link to={backLink.current}>&#171; Go back</Link>
        <div>
          <section>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
              alt={original_title}
            />
            <h2>
              {original_title} ({new Date(release_date).getFullYear()})
            </h2>
            <p>User Score: {vote_average}% </p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(({ name }) => name).join(', ')}</p>
          </section>
          <section>
            <h2>Additional information</h2>
            <Link to="cast" state={{ from: location.pathname }}>
              Cast
            </Link>
            <Link to="reviews">Reviews</Link>
          </section>
        </div>
        <Outlet />
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    genres: PropTypes.array,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
