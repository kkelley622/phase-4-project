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
    const {reviews} = useContext(ReviewsContext);
    const {setErrors} = useContext(ErrorsContext);

    // Alternate solution to issue of UserReviews not updating with state change:
    // const [userReviews, setUserReviews] = useState([])
    // useEffect(() => {
    //   fetch("/users/" + user_id + "/reviews")
    //   .then(response => response.json())
    //   .then(data => setUserReviews(data))
    // }, [user_id])
    // const currentReviewCards = userReviews?.map(review => <ReviewCard key={review.id} review={review} />);

     useEffect(() => {
        if(!loading && !loggedIn){
           navigate("/login")
           }
            setErrors([]);
    }, [ loggedIn, loading, navigate, setErrors]);

    // const currentReviews = reviews?.filter((review) => review.user_id === parseInt(user_id, 10));

    const userToDisplay = users.find((user) => user.id === parseInt(user_id, 10))

    const currentReviewCards = userToDisplay.reviews?.map(review => <ReviewCard key={review.id} review={review} />);

  return (
    <div>

      { currentReviewCards.length > 0 ? currentReviewCards : "This User Doesn't Have Any Reviews"}
      </div>
  )
}

export default UserReviews