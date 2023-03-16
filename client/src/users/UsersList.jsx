import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UsersContext } from '../context/UsersContext';

const UsersList = ({ loading }) => {
    
    const navigate = useNavigate();
    const {users, loggedIn} = useContext(UsersContext);

    useEffect(() => {

        if(!loading && !loggedIn) {
          navigate("/login")
        }
      }, [loading, loggedIn, navigate])
    
  const usersList = users.map(user => <li key={user.id}><Link to={`/users/${ user.id }/reviews`}>{user.first_name}</Link></li>)


  return (
    <ul>{ usersList }</ul>
  );
};

export default UsersList