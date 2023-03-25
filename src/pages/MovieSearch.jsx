import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
// import axios from 'axios';

const MovieSearch = () => {
  const [searchQuerry, setSearchQuerry] = useState('');
  //   const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuerry) {
      return;
    }
    // async function fetchMovies(query) {
    //   try {
    //     const URL = 'https://api.themoviedb.org/3/search/movie';
    //     const KEY = '7113ba9605fd4f5593de8c8922948eb6';

    //     const response = await axios.get(
    //       `${URL}?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    //     );

    //     setSearchQuerry(response.data.results);
    //     console.log(response);
    //   } catch (error) {
    //     setError(error);
    //   }
    // }
  }, [searchQuerry]);

  const handleChange = evt => {
    setSearchQuerry(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuerry.trim() === '') {
      return toast.error('Please, enter a word');
    }

    // onSubmit(searchQuerry);
    // setSearchQuerry(evt.currentTarget.value.toLowerCase());

    // setSearchQuerry('');
  };

  return (
    <>
      <Toaster />

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          name="searchQuerry"
          value={searchQuerry}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
};
export default MovieSearch;
