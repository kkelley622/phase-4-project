import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ReviewsContext } from '../context/ReviewsContext';
import { UsersContext } from '../context/UsersContext';

const ReviewEdit = ({ loading }) => {

    const navigate = useNavigate();
    const {reviews, editReview} = useContext(ReviewsContext);
    const {loggedIn, currentUser} = useContext(UsersContext);
    const {id} = useParams();

    const [formData, setFormData] = useState({
        book_title: "",
        book_id: "",
        stars: "",
        summary: ""
    });

    useEffect(() => {
        if(!loading && !loggedIn) {
            navigate("/login")
        }

        if(reviews.length > 0) {
            const review = reviews.find(review => review.id === parseInt(id, 10));
            if(!loading && currentUser.id !== review.user.id) {
                navigate("/")
            }
            setFormData({
                book_title: review.book.title,
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
                navigate(-1)
            })

    }

  return (
    <>
        <h3>Editing Your Review of {formData.book_title} </h3>
        <form onSubmit={handleSubmit}>
            <label>Stars (1-5)</label>
            <input
                type="text"
                name="stars"
                value={formData.stars}
                onChange={handleChange}
            />
            <label>Summary</label>
            <textarea
                type="text"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
            />
            <input type="submit" value="Update Review"/>
        </form>
    </>
  );
};

export default ReviewEdit