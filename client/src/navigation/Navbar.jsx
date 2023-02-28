import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
          <Link to="/" className='a'>Home</Link>
          <Link to="/books" className='a'>Books</Link>  
          <Link to="/reviews" className='a'>Reviews</Link>
      </nav>
    </div>
  )
}

export default Navbar