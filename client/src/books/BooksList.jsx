import React from 'react'
import BookCard from './BookCard'

const BooksList = ( {books} ) => {
  const bookCards = books.map(book => <BookCard key={book.id} book={book}/>)

  return (
    <div>{bookCards}</div>
  )
}

export default BooksList