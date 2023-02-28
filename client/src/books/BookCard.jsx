import React from 'react'

const BookCard = ( {book} ) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>Author: {book.author}</h2>
      <img src={book.image_url} />
    </div>
  )
}

export default BookCard