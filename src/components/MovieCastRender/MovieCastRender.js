import PropTypes from 'prop-types';
function MovieCastRender({ name, character, profile }) {
  return (
    <>
      {!profile ? (
        <img
          src={require('../../imeges/Z2000128425.jpg')}
          alt="404"
          width="185px"
          height="278px"
        />
      ) : (
        <img
          src={`https://www.themoviedb.org/t/p/w185/${profile}`}
          alt={name}
        />
      )}
      <h2>{name}</h2>
      <p>Character: {character}</p>
    </>
  );
}

MovieCastRender.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile: PropTypes.string,
};
export default MovieCastRender;
