import MovieList from '../components/MovieList/MovieList';
import s from './pages.module.css';
const Home = () => {
  return (
    <main>
      <h1 className={s.hero}>Today trend movies</h1>

      <MovieList />
    </main>
  );
};
export default Home;
