import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = ( {book} ) => {

  const navigate = useNavigate();


  return (
    <div>
      <h1>{book.title}</h1>
      <h2>Author: {book.author}</h2>
      <img src={book.image_url} width={100} height={150}/>
      <button onClick={() => navigate("/reviews/new")}>Add Review</button>
    </div>
  )
}

export default BookCard