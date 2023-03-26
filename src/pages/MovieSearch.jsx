import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import toast from 'react-hot-toast';
import axios from 'axios';

const MovieSearch = () => {
  const [movie, setMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuerry = searchParams.get('searchQuerry') ?? '';
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuerry) {
      return;
    }
    async function fetchMovies(query) {
      try {
        const URL = 'https://api.themoviedb.org/3/search/movie';
        const KEY = '7113ba9605fd4f5593de8c8922948eb6';

        const response = await axios.get(
          `${URL}?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );

        setMovie(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        setError(error);
      }
    }

    fetchMovies(searchQuerry);
  }, [searchQuerry]);

  const updateQueryString = e => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ searchQuerry: searchValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ searchQuerry: form.elements.searchQuerry.value });

    form.reset();
  };

  return (
    <>
      <Toaster />

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          name="searchQuerry"
          value={searchQuerry}
          onChange={updateQueryString}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {error && <h1>{error.message}</h1>}
      <ul>
        {movie &&
          movie.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default MovieSearch;
