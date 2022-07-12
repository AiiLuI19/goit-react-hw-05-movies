import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
    </>
  );
};
export default Navigator;
