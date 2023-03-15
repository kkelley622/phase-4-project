import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsersContext } from '../context/UsersContext';

const UsersList = ( {loading} ) => {
    const {users, loggedIn} = useContext(UsersContext);
    const navigate = useNavigate();

    useEffect(() => {

        if(!loading && !loggedIn) {
          navigate("/login")
        }
      }, [loading, loggedIn, navigate])
    
    const usersList = users?.map(user => <li key={user.id}>{user.first_name}</li>)


  return (
    <ul>{usersList}</ul>
  )
}

export default UsersList