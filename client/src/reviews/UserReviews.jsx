import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';
import { ReviewsContext } from '../context/ReviewsContext';
import ReviewCard from './ReviewCard';
import { ErrorsContext } from '../context/ErrorsContext';

const UserReviews = () => {

    const navigate = useNavigate();
    const {user_id} = useParams();
    const {loggedIn, loading, users} = useContext(UsersContext);
    const {handleDeleteReview, reviews} = useContext(ReviewsContext);
    const {setErrors} = useContext(ErrorsContext);
    
    useEffect(() => {
        if(!loading && !loggedIn){
           navigate("/login")
           }
            setErrors([]);
    }, [ loggedIn, loading, navigate, setErrors]);


    const user = users.find((u) => u.id === parseInt(user_id, 10))


    const currentReviewCards = user.reviews?.map(review => <ReviewCard key={review.id} review={review} book={review.book} handleDeleteReview={handleDeleteReview}/>);

  return (
    <div>

      { currentReviewCards.length > 0 ? currentReviewCards : "This User Doesn't Have Any Reviews"}
      </div>
  )
}

export default UserReviews