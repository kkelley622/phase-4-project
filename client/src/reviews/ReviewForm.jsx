import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ErrorsContext } from '../context/ErrorsContext';
import { ReviewsContext } from '../context/ReviewsContext';
import { UsersContext } from '../context/UsersContext';
import { BooksContext } from '../context/BooksContext'

const ReviewForm = ({ loading }) => {
    
    const navigate = useNavigate();
    const {addReview} = useContext(ReviewsContext);
    const {books} = useContext(BooksContext);
    const {loggedIn} = useContext(UsersContext);
    const {setErrors} = useContext(ErrorsContext);
    const {id} = useParams();

    const [formData, setFormData] = useState({
        book_id: "",
        stars: "",
        summary: "",
    });

    useEffect(() => {
        if(!loading && !loggedIn) {
            navigate("/login")
        }
        if(books.length > 0) {
            const book = books.find(book => book.id === parseInt(id, 10));
            setFormData({
                book_id: book.id,
                stars: "",
                summary: "",
            })
        }
    }, [ loading, loggedIn, navigate, id, setErrors, books ]);


    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors) {
                setErrors(data.errors)
            } else {
                addReview(data)
                navigate("/reviews")
            }
        })
        setFormData({
            book_id: "",
            stars: "",
            summary: "",
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <label>Book</label>
            <input
                type="text"
                name="book_id"
                value={formData.book_id}
                onChange={handleChange}
            /> */}
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