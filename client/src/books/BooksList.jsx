import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookCard from './BookCard'

const BooksList = ( {books, loggedIn, loading} ) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate("/login")
    }
  }, [loading, loggedIn])


  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)

  return (
    <div>{bookCards}</div>
  )
}

export default BooksList