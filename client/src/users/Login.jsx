import React, { useState } from 'react'

const Login = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: '',
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  return (
    <form>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <label>Password</label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input type="submit" />
    </form>
  )
}

export default Login