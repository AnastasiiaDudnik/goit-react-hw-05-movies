import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies(id) {
      try {
        const URL = 'https://api.themoviedb.org/3/movie/';
        const KEY = '7113ba9605fd4f5593de8c8922948eb6';

        const response = await axios.get(
          `${URL}${id}//reviews?api_key=${KEY}&language=en-US`
        );

        setReview(response.data.results);
        console.log(response.data);
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
      {review.length === 0 && <p>We don't have any reviews for this movie.</p>}
      {review.length > 1 &&
        review.map(({ author, id, content }) => (
          <div key={id}>
            <h3> Author: {author}</h3>
            <p>{content}</p>
          </div>
        ))}
    </>
  );
};

export default Review;
