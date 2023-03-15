import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';


const Navbar = () => {

  const {loggedIn, logoutUser} = useContext(UsersContext);

  const handleClick = () => {
    fetch('/logout', { method: 'DELETE' })
    .then(() => logoutUser());
  };


  
  const loggedInLinks = () => {
    return(
      <>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/books/new">Add Book</Link></li>  
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="#" onClick={handleClick}>Logout</Link></li>
      </>
    )
  }

  const loggedOutLinks = () => {
    return(
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    )
  }

  return (
    <div className='navbar'>
      <nav>
          <li><Link to="/">Home</Link></li>
          { loggedIn ? loggedInLinks() : loggedOutLinks() }
      </nav>
    </div>
  )
}

export default Navbar