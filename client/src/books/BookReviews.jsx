import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorsContext } from '../context/ErrorsContext';
import { ReviewsContext } from '../context/ReviewsContext';
import { UsersContext } from '../context/UsersContext';
import ReviewCard from '../reviews/ReviewCard';

const BookReviews = () => {
    const navigate = useNavigate();
    const {book_id} = useParams();
    const {loading, loggedIn} = useContext(UsersContext);
    const {setErrors} = useContext(ErrorsContext);
    const {reviews, handleDeleteReview} = useContext(ReviewsContext);

    useEffect(() => {
        if(!loading && !loggedIn){
           navigate("/login")
           }
            setErrors([]);
    }, [ loggedIn, loading, navigate, setErrors]);

    const bookReviews = reviews.filter((review) => review.book_id === parseInt(book_id, 10))

    const bookReviewCards = bookReviews?.map(review => <ReviewCard key={review.id} review={review} handleDeleteReview={handleDeleteReview}/>);

return (
    <>
        {bookReviewCards.length > 0 ? bookReviewCards : "This Book Does Not Have Any Reviews"}
    </>
  )
}

export default BookReviews