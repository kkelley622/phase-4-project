import React, { useState } from 'react'

const ReviewForm = () => {

    const [formData, setFormData] = useState({
        book_id: "",
        stars: "",
        summary: "",
        user_id: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        
    }


  return (
    <form>
        <label>Book</label>
        <input
            type="text"
            name="book"
            value={formData.book}
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
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
        />
    </form>
  )
}

export default ReviewForm