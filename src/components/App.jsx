import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home';
import MovieSearch from 'pages/MovieSearch';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<div>Movie Review</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
