import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = ( {loggedIn} ) => {

  const loggedInLinks = () => {
    return(
      <>
        <li><Link to="/books">Books</Link></li>  
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="#">Logout</Link></li>
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
          <li><Link to="/">Home</Link></li>
          { loggedIn ? loggedInLinks() : loggedOutLinks() }
      </nav>
    </div>
  )
}

export default Navbar