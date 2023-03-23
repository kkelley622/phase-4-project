import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewsContext } from '../context/ReviewsContext';
import { UsersContext } from '../context/UsersContext';
import ReviewCard from './ReviewCard';

const ReviewsList = ({ loading }) => {

  const navigate = useNavigate();
  const {reviews, handleDeleteReview} = useContext(ReviewsContext);
  const {loggedIn, currentUser} = useContext(UsersContext);

  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate("/login")
    }
  }, [loading, loggedIn, navigate])

  const reviewCards = reviews?.map((review, idx) => <ReviewCard key={ idx } review={ review } handleDeleteReview={handleDeleteReview} currentUser={currentUser} />)

  return (
    <>
    <h3>Here's a List of Everyone's Reviews</h3>
    <div>{ reviewCards }</div>
    </>
  );
};

export default ReviewsList