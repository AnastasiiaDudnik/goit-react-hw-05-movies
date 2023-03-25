import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const URL = 'https://api.themoviedb.org/3/trending/movie/day';
        const KEY = '7113ba9605fd4f5593de8c8922948eb6';

        const response = await axios.get(`${URL}?api_key=${KEY}`);

        setMovieList(response.data.results);
      } catch (error) {
        setError(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <h1>Trending today</h1>
      <ul>
        {movieList.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
