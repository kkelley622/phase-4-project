import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ErrorsContext } from '../context/ErrorsContext';
import { ReviewsContext } from '../context/ReviewsContext';
import { UsersContext } from '../context/UsersContext';

const UserBooks = () => {
    const navigate = useNavigate();
    const {loggedIn} = useContext(UsersContext);
    const {loading, setErrors} = useContext(ErrorsContext);
    const {currentUser} = useContext(UsersContext);
    const {reviews} = useContext(ReviewsContext);

    useEffect(() => {
        if(!loading && !loggedIn) {
          navigate("/login")
        }
        return () => {
          setErrors([])
        }
      }, [loading, loggedIn, navigate, setErrors]);

      const myReviews = reviews.filter((review) => review.user_id === parseInt(currentUser.id, 10));

      const myBooksList = myReviews?.map(review => <li key={review.book.id}><Link to={`/books/${review.book.id}`}>{review.book.title}</Link></li> )

  return (
    <>
        <h3>Books You Have Read</h3>
        <ul>
        { myBooksList?.length > 0 ? myBooksList : "You Haven't Read Anything Yet"}
        </ul>
    </>
  )
}

export default UserBooks