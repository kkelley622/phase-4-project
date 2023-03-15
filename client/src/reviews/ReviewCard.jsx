import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewsContext } from '../context/ReviewsContext';
import { UsersContext } from '../context/UsersContext';

const ReviewCard = ({ review }) => {
  const {currentUser} = useContext(UsersContext);
  const navigate = useNavigate();
  const {handleDeleteReview} = useContext(ReviewsContext);

  async function deleteReview() {
    const response = await fetch(`/reviews/${review.id}`, {
      method: 'DELETE'
    });
    const data = await ((response).json());
    handleDeleteReview(data)
  }


  return (
    <div>
      <figure>
        <img src={review.book.image_url} alt="book_cover" width={100} height={150} />
        <h2>{review.stars}/5 Stars</h2>
        <p>{review.summary} -{review.user.first_name}</p>
        {currentUser && currentUser.id === review.user.id ? <>
          <button onClick={() => navigate(`/reviews/${review.id}/edit`)}>Edit</button>
          <button onClick={deleteReview}>Delete</button> 
        </> : null}
        </figure>
    </div>
  )
}

export default ReviewCard