import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getMovieSearch } from 'services/movieAPI';
// import toast from 'react-hot-toast';

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

    getMovieSearch(searchQuerry)
      .then(({ results }) => setMovie(results))
      .catch(error => setError(error));
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
