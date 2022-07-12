import { Routes, Route } from 'react-router-dom';
import components from './components';
import pages from './pages';
const { Home, Movies, PagesNonFound } = pages;
const { MovieDetails, Navigator, Reviews, Cast } = components;

const App = () => {
  return (
    <>
      <Navigator />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PagesNonFound />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
