import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ( {addUser, setErrors, loading, loggedIn} ) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!loading && loggedIn) {
            navigate("/books")
        }

        return () => {
            setErrors([])
        }
    }, [loading, loggedIn])

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
        navigate("/reviews")
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
        <input type="submit" value="Create Account"/>
    </form>
  )
}

export default Signup