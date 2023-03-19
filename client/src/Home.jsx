import React, { useContext } from 'react'
import { UsersContext } from './context/UsersContext'

const Home = () => {
  const {loggedIn} = useContext(UsersContext);

  return (
    <div className='message'>{ loggedIn ? "Welcome to Bookspace. Discover books you might be interested in reading." : "Login or Signup to get started!"}</div>
  )
}

export default Home