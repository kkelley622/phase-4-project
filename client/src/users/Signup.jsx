import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorsContext } from '../context/ErrorsContext';
import { UsersContext } from '../context/UsersContext';

const Signup = () => {

    const navigate = useNavigate();
    const {setErrors, loading} = useContext(ErrorsContext);
    const {loggedIn, loginUser, addUser} = useContext(UsersContext);


    useEffect(() => {
        if(!loading && loggedIn) {
            navigate("/")
        }

        return () => {
            setErrors([])
        }
    }, [loading, loggedIn, navigate, setErrors]);


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
        fetch("/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if(data.errors) {
                    setErrors(data.errors)
                } else {
                    addUser(data)
                    loginUser(data)
                    navigate("/")
                }
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
        <input type="submit" value="Create Account"/>
    </form>
  );
};

export default Signup