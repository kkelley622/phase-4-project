import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = ({ book }) => {

  const navigate = useNavigate();  

  const rating = book.reviews.map(review => review.stars).reduce((a, b) => a + b, 0)/book.reviews.length

  console.log(rating)

  return (
    <figure>
      <div>
        <h1>{book.title}</h1>
        <h2>Author: {book.author}</h2>
        <h2>Average Rating: {rating ? rating : "No Reviews Yet"} </h2>
        <img src={book.image_url} alt="book-cover" width={100} height={150}/>
        <br></br>
        <button onClick={() => navigate(`/books/${book.id}/new-review`)}>Add Review</button>
      </div>
      </figure>
  )
}

export default BookCard