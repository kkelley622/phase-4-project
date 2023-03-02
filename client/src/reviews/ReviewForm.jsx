import React, { useState } from 'react'

const ReviewForm = ( {addReview} ) => {

    const [formData, setFormData] = useState({
        book_id: "",
        stars: "",
        summary: "",
        user_id: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addReview(event, formData)
        setFormData({
            book_id: "",
            stars: "",
            summary: "",
            user_id: ""
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
            required 
        />
        <label>Stars</label>
        <input
            type="text"
            name="stars"
            value={formData.stars}
            onChange={handleChange}
            required 
        />
        <label>Summary</label>
        <input
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required 
        />
        <label>User</label>
        <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
        />
        <input type="submit" />
    </form>
  )
}

export default ReviewForm