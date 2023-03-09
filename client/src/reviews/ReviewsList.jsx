import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { useNavigate } from 'react-router-dom';

const ReviewsList = ( {reviews, handleDeleteReview, loggedIn, loading, currentUser} ) => {

  const navigate = useNavigate();


  useEffect(() => {

    if(!loading && !loggedIn) {
      navigate("/login")
    }
  }, [loading, loggedIn])

  const reviewCards = reviews.map(review => <ReviewCard key={review.id} review={review} handleDeleteReview={handleDeleteReview} currentUser={currentUser} />)

  return (
    <div>{reviewCards}</div>
  )
}

export default ReviewsList