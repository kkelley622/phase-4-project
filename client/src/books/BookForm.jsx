import React, { useState } from 'react'

const BookForm = ( {addBook} ) => {
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
            required 
        />
        <label>Author:</label>
        <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required 
        />
        <label>Cover Image:</label>
        <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            required 
        />
        <input type="submit" />
    </form>
  )
}

export default BookForm