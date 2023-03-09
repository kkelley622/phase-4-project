import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewCard = ( {review, handleDeleteReview} ) => {

  const navigate = useNavigate();

  async function deleteReview() {
    const response = await fetch(`/reviews/${review.id}`, {
      method: 'DELETE'
    });
    const data = await ((response).json());
    handleDeleteReview(data)
  }


  return (
    <div>
      <img src={review.book.image_url} width={100} height={150} />
      <h2>{review.user.first_name} gives {review.book.title} {review.stars} ⭐</h2>
      <h3>Summary: {review.summary}</h3>
      <button onClick={() => navigate(`/reviews/${review.id}/edit`)}>Edit</button>
      <button onClick={deleteReview}>Delete</button>
    </div>
  )
}

export default ReviewCard