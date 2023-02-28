import React from 'react';
import ReviewCard from './ReviewCard'

const ReviewsList = ( {reviews} ) => {
  const reviewCards = reviews.map(review => <ReviewCard key={review.id} review={review}/>)

  return (
    <div>{reviewCards}</div>
  )
}

export default ReviewsList