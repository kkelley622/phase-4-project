import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext';
import { UsersContext } from '../context/UsersContext';
import BookCard from './BookCard'

const BooksList = ({ loading }) => {

  const navigate = useNavigate();
  const { books } = useContext(BooksContext);
  const { loggedIn } = useContext(UsersContext);

  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate("/login")
    }
  }, [loading, loggedIn, navigate]);

  console.log("books", books)
  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)

  return (
    <div>{ bookCards }</div>
  )
}

export default BooksList