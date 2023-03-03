import React, { useState } from 'react'

const Signup = ( {addUser, errors} ) => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        user_name: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        addUser(event, formData)
        setFormData({
            first_name: "",
            last_name: "",
            user_name: "",
            password: ""
        });
    };

  return (
    <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
        />
        <label>Last Name</label>
        <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange} 
        />
        <label>Username</label>
        <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
        />
        <label>Password</label>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        {errors.length > 0 && (
            <ul style={{ color: "red" }}>
                {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
        )}
        <input type="submit" />
    </form>
  )
}

export default Signup