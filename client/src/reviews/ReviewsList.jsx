import React from 'react';
import ReviewCard from './ReviewCard'

const ReviewsList = ( {reviews, handleDeleteReview} ) => {
  const reviewCards = reviews.map(review => <ReviewCard key={review.id} review={review} handleDeleteReview={handleDeleteReview} />)

  return (
    <div>{reviewCards}</div>
  )
}

export default ReviewsList