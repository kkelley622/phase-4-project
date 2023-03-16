import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';
import ReviewCard from './ReviewCard';

const UserReviews = () => {

    const navigate = useNavigate();
    const {user_id} = useParams();
    const [userReviews, setUserReviews] = useState([]);
    const {loggedIn, loading} = useContext(UsersContext);



    useEffect(() => {
        if(!loading && !loggedIn){
           navigate("/login")
           }
            fetch("/users/" + user_id + "/reviews")
            .then(response => response.json())
            .then(data => setUserReviews(data))
    }, [user_id, loggedIn, loading, navigate]);

    const reviewCards = userReviews.map(review => <ReviewCard key={review.id} review={review}/>);

  return (
    <div>{ reviewCards }</div>
  )
}

export default UserReviews