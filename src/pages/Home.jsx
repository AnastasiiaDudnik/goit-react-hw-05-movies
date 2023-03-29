import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieList } from 'services/movieAPI';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieList()
      .then(({ results }) => setMovieList(results))
      .catch(error => setError(error));
  }, []);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <h1>Trending today</h1>
      <ul>
        {movieList.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
