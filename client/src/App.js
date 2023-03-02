import './App.css';
import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navigation/Navbar';
import BooksList from './books/BooksList';
import ReviewsList from './reviews/ReviewsList'
import Login from './users/Login';
import BookForm from './books/BookForm';
import ReviewForm from './reviews/ReviewForm';

function App() {

  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("/books")
    .then(response => response.json())
    .then(data => setBooks(data))
  }, [])

  useEffect(() => {
    fetch("/reviews")
    .then(response => response.json())
    .then(data => setReviews(data))
  }, [])

  const addBook = (event, bookObj) => {
    event.preventDefault()
    fetch("/books", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    })
    .then(response => response.json())
    .then(data => setBooks([data, ...books]))
  }

  const addReview = (event, reviewObj) => {
    event.preventDefault()
    fetch("/reviews", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewObj)
    })
    .then(response => response.json())
    .then(data => setReviews([data, ...reviews]))
  }

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/books" element={<BooksList books={books}/>} />
          <Route path="/books/new" element={<BookForm addBook={addBook} />} />
          <Route path="/reviews" element={<ReviewsList reviews={reviews} />}/>
          <Route path="/reviews/new" element={<ReviewForm addReview={addReview}/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
