import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ( {setErrors, loginUser, loading, loggedIn} ) => {

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
    user_name: "",
    password: '',
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch("/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await (response.json());
    if(response.ok) {
      loginUser(data)
      setErrors([])
    } else {
      setErrors(data.errors)
    }
    setFormData({
      user_name: "",
      password: ""
    })
    navigate("/books")
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