import React, { useState } from 'react'

const Signup = ( {addUser} ) => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        user_name: "",
        password: "",
        showPassword: false 
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
            required 
        />
        <label>Last Name</label>
        <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required 
        />
        <label>Username</label>
        <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required 
        />
        <label>Password</label>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required 
        />
        <input type="submit" />
    </form>
  )
}

export default Signup