import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookCard from './BookCard'

const BooksList = ( {books, loggedIn} ) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate("/login")
    }
  })

  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)

  return (
    <div>{bookCards}</div>
  )
}

export default BooksList