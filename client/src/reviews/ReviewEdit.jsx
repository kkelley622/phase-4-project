import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ReviewsContext } from '../context/ReviewsContext';

const ReviewEdit = ( { loading, loggedIn, currentUser } ) => {
    const { reviews, editReview } = useContext(ReviewsContext);

    const [formData, setFormData] = useState({
        book_id: "",
        stars: "",
        summary: ""
    });

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!loading && !loggedIn) {
            navigate("/login")
        }

        if(reviews.length > 0) {
            const review = reviews.find(review => review.id === parseInt(id, 10));
            console.log(review)
            if(!loading && currentUser.id !== review.user.id) {
                navigate("/")
            }
            console.log(review)
            setFormData({
                book_id: review.book_id,
                stars: review.stars,
                summary: review.summary
            })
        }
    }, [reviews, loading, loggedIn, currentUser, navigate, id]);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                editReview(data)
                navigate("/reviews")
            })

    }

  return (
    <form onSubmit={handleSubmit}>
    <label>Book</label>
    <input
        type="text"
        name="book_id"
        value={formData.book_id}
        onChange={handleChange}
    />
    <label>Stars</label>
    <input
        type="text"
        name="stars"
        value={formData.stars}
        onChange={handleChange}
    />
    <label>Summary</label>
    <input
        type="text"
        name="summary"
        value={formData.summary}
        onChange={handleChange}
    />
    <input type="submit" value="Update Review"/>
</form>
  )
}

export default ReviewEdit