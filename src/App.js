import { Routes, Route } from 'react-router-dom';
import components from './components';
import pages from './pages';
const { Home, Movies, PagesNonFound, MovieDetailsPage } = pages;
const { Navigator, Reviews, Cast } = components;

const App = () => {
  return (
    <main>
      <Navigator />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PagesNonFound />} />
        </Routes>
      </div>
    </main>
  );
};
export default App;
