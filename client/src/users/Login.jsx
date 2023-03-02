import React from 'react'

const Login = () => {
  return (
    <form>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        required
      />
      <label>Password</label>
      <input
        type="text"
        name="password"
        value={formData.password}
        required
      />
      <input type="submit" />
    </form>
  )
}

export default Login