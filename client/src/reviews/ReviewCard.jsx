import React from 'react'

const ReviewCard = ( {review, handleDeleteReview} ) => {

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
      <button>Edit</button>
      <button onClick={deleteReview}>Delete</button>
    </div>
  )
}

export default ReviewCard