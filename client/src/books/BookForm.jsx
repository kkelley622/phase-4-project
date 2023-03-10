import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BooksContext } from '../context/BooksContext';

const BookForm = ( {setErrors, loading, loggedIn} ) => {

    const navigate = useNavigate();
    const {addBook} = useContext(BooksContext)

    useEffect(() => {
        if(!loading && !loggedIn) {
            navigate("/login")
        }
        return() => {
            setErrors([])
        }
    }, [loading, loggedIn, navigate, setErrors]);

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        image_url: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addBook(event, formData)
        setFormData({
            title: "",
            author: "",
            image_url: ""
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange} 
        />
        <label>Author:</label>
        <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
        />
        <label>Cover Image:</label>
        <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
        />
      
        <input type="submit" />
    </form>
  )
}

export default BookForm