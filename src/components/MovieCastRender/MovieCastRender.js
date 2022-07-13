import PropTypes from 'prop-types';
import s from './MovieCastRender.module.css';
function MovieCastRender({ name, character, profile }) {
  return (
    <div className={s.wrap}>
      {!profile ? (
        <img src={require('../../imeges/Z2000128425.jpg')} alt="404" />
      ) : (
        <img
          src={`https://www.themoviedb.org/t/p/w185/${profile}`}
          alt={name}
        />
      )}
      <h2>{name}</h2>
      <p>Character: {character}</p>
    </div>
  );
}

MovieCastRender.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile: PropTypes.string,
};
export default MovieCastRender;
