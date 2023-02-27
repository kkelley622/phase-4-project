import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
          <NavLink to="/" className='a'>Home</NavLink>
          <NavLink to="/books" className='a'>Books</NavLink>  
          <NavLink to="/reviews" className='a'>Reviews</NavLink>
      </nav>
    </div>
  )
}

export default Navbar