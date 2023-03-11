import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UsersList = ({ users, loading, loggedIn }) => {

    const navigate = useNavigate();

    useEffect(() => {

        if(!loading && !loggedIn) {
          navigate("/login")
        }
      }, [loading, loggedIn, navigate])
    
    const usersList = users.map(user => <li key={user.id}>{user.first_name}</li>)


  return (
    <ul>{usersList}</ul>
  )
}

export default UsersList