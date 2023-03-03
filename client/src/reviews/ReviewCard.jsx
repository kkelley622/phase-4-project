import React from 'react'

const ReviewCard = ( {review} ) => {
  return (
    <div>
      <img src={review.book.image_url} width={100} height={150} />
      <h2>{review.user.first_name} gives {review.book.title} {review.stars} ⭐</h2>
      <h3>Summary: {review.summary}</h3>
    </div>
  )
}

export default ReviewCard