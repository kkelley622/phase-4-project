import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ( {setErrors, loginUser, loading, loggedIn} ) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loading && loggedIn) {
        navigate("/")
    }

    return () => {
        setErrors([])
    }
}, [loading, loggedIn])

  const [formData, setFormData] = useState({
    user_name: "",
    password: '',
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if(data.errors) {
      setErrors(data.errors);
    } else {
      loginUser(data)
      setErrors([])
      navigate("/books")
      }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login