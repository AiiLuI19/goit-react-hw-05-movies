import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Navigator = lazy(() =>
  import('./components/Navigator' /* webpackChunkName: "navigator" */)
);
const Reviews = lazy(() =>
  import('./components/Reviews' /* webpackChunkName: "reviews" */)
);
const Cast = lazy(() =>
  import('./components/Cast' /* webpackChunkName: "cast" */)
);
const Home = lazy(() => import('./pages/Home' /* webpackChunkName: "home" */));
const Movies = lazy(() =>
  import('./pages/Movies' /* webpackChunkName: "movies" */)
);
const PagesNonFound = lazy(() =>
  import('./pages/PagesNonFound.js' /* webpackChunkName: "pages-non-found" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => {
  return (
    <main>
      <Navigator />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </main>
  );
};
export default App;
