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
      <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </>
    )
  }

  return (
    <div className='navbar'>
      <nav>
        <h2 align="center">Bookspace</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          { loggedIn ? loggedInLinks() : loggedOutLinks() }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar