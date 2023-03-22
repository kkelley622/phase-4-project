import React, { useContext } from 'react'
import { UsersContext } from './context/UsersContext'

const Home = () => {
  const {loggedIn} = useContext(UsersContext);

  return (
    <div className='home'>{ loggedIn ? <h3>Welcome to Bookspace. Discover books you might be interested in reading. And review books you have already read.</h3> : <h3>Login or Signup To Get Started!</h3>}</div>
  )
}

export default Home