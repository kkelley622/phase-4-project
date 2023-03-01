import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>  
          <Link to="/reviews">Reviews</Link>
          <Link to="/login">Login</Link>
      </nav>
    </div>
  )
}

export default Navbar