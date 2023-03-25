import { Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortController = new AbortController();
    async function fetchMovies(id) {
      try {
        const URL = 'https://api.themoviedb.org/3/movie/';
        const KEY = '7113ba9605fd4f5593de8c8922948eb6';

        const response = await axios.get(`${URL}${id}?api_key=${KEY}`, {
          //   signal: abortController.signal,
        });

        setMovie(response.data);
      } catch (error) {
        setError(error);
      }
    }

    fetchMovies(movieId);

    // return () => {
    //   abortController.abort();
    // };
  }, [movieId]);

  const { title, release_date, poster_path, overview, genres, vote_average } =
    movie;

  //   const userScore = Number.parseInt((vote_average / vote_count) * 100);
  const userScore = Number.parseInt(vote_average * 10);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {movie && (
        <div>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(({ name, id }) => (
            <p key={id}>{name}</p>
          ))}
        </div>
      )}

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
