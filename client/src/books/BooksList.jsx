import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext';
import { ErrorsContext } from '../context/ErrorsContext';
import { UsersContext } from '../context/UsersContext';
import BookCard from './BookCard'

const BooksList = ({ loading }) => {

  const navigate = useNavigate();
  const { books } = useContext(BooksContext);
  const { loggedIn } = useContext(UsersContext);
  const { setErrors } = useContext(ErrorsContext);

  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate("/login")
    }
    return () => {
      setErrors([])
    }
  }, [loading, loggedIn, navigate, setErrors]);

  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)

  return (
    <>
      <h3>Here's a List of All Our Books</h3>
      <div>{ bookCards }</div>
    </>
  )
}

export default BooksList