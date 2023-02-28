import React from 'react'

const ReviewCard = ( {review} ) => {
  return (
    <div>
      <h1>Stars: {review.stars}</h1>
      <h2>Summary: {review.summary}</h2>
    </div>
  )
}

export default ReviewCard