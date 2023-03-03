import React from 'react'

const BookCard = ( {book} ) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>Author: {book.author}</h2>
      <img src={book.image_url} width={100} height={150}/>
    </div>
  )
}

export default BookCard