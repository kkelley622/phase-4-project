import React, { useContext, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { useNavigate } from 'react-router-dom';
import { ReviewsContext } from '../context/ReviewsContext';

const ReviewsList = ( {loggedIn, loading, currentUser} ) => {
  const { reviews, handleDeleteReview } = useContext(ReviewsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate("/login")
    }
  }, [loading, loggedIn])

  const reviewCards = reviews.map((review, idx) => <ReviewCard key={ idx } review={ review } handleDeleteReview={handleDeleteReview} currentUser={currentUser} />)

  return (
    <div>{ reviewCards }</div>
  )
}

export default ReviewsList