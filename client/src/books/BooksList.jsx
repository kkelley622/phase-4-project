import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext';
import BookCard from './BookCard'

const BooksList = ( {loggedIn, loading} ) => {

  const navigate = useNavigate();
  const {books} = useContext(BooksContext);

  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate("/login")
    }
  }, [loading, loggedIn, navigate])


  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)

  return (
    <div>{bookCards}</div>
  )
}

export default BooksList