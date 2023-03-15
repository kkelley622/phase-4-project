import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReviewsContext } from '../context/ReviewsContext';
import { UsersContext } from '../context/UsersContext';

const ReviewForm = ({ setErrors, loading }) => {
    
    const navigate = useNavigate();
    const {addReview} = useContext(ReviewsContext);
    const {loggedIn} = useContext(UsersContext);

    useEffect(() => {
        if(!loading && !loggedIn) {
            navigate("/login")
        }
        return() => {
            setErrors([])
        }
    }, [loading, loggedIn, navigate, setErrors]);

    const [formData, setFormData] = useState({
        book_id: "",
        stars: "",
        summary: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        addReview(event, formData)
        setFormData({
            book_id: "",
            stars: "",
            summary: "",
        })
    };

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
            <input type="submit" />
        </form>
    );
};

export default ReviewForm