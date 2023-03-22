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
    const [book, setBook] = useState("");

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
            setBook(books.find(book => book.id === parseInt(id, 10)));
            console.log(book)
            setFormData({
                book_id: book.id,
                stars: "",
                summary: "",
            })
        }
    }, [ loading, loggedIn, navigate, id, setErrors, books, book ]);

    console.log(book)

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
                setErrors([]);
            }
        })
    };

    return (
        <>
            <h3>Add a Review for {book.title}</h3>
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
                <input type="submit" />
            </form>
        </>
    );
};

export default ReviewForm