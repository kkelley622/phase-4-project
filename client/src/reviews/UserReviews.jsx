import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';
import { ReviewsContext } from '../context/ReviewsContext';
import ReviewCard from './ReviewCard';
import { ErrorsContext } from '../context/ErrorsContext';

const UserReviews = () => {

    const navigate = useNavigate();
    const {user_id} = useParams();
    const {loggedIn, loading} = useContext(UsersContext);
    const {handleDeleteReview, reviews} = useContext(ReviewsContext);
    const {setErrors} = useContext(ErrorsContext);
    
    useEffect(() => {
        if(!loading && !loggedIn){
           navigate("/login")
           }
            setErrors([]);
    }, [ loggedIn, loading, navigate]);

    const currentReviews = reviews.filter((review) => review.user_id == user_id)

    const currentReviewCards = currentReviews?.map(review => <ReviewCard key={review.id} review={review} handleDeleteReview={handleDeleteReview}/>);

  return (
    <div>

      { currentReviewCards }
      </div>
  )
}

export default UserReviews