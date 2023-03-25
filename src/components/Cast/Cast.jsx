import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies(id) {
      try {
        const URL = 'https://api.themoviedb.org/3/movie/';
        const KEY = '7113ba9605fd4f5593de8c8922948eb6';

        const response = await axios.get(
          `${URL}${id}/credits?api_key=${KEY}&language=en-US`
        );

        setCast(response.data.cast);
      } catch (error) {
        setError(error);
      }
    }

    fetchMovies(movieId);
  }, [movieId]);

  // const {name, character, profile_path} = cast

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ul>
        {cast &&
          cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width={100}
                height={150}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
