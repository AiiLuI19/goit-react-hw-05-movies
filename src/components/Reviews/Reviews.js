import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../../services/fetchApi';
import ReviewsRender from '../ReviewsRender/ReviewsRender';

const Reviews = () => {
  const { fetchMoviesReviews } = fetchApi;
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMoviesReviews(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId, fetchMoviesReviews]);

  return (
    <ul>
      {reviews?.length ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <ReviewsRender author={author} content={content} />
            </li>
          );
        })
      ) : (
        <li>No reviews this film </li>
      )}
    </ul>
  );
};
export default Reviews;
