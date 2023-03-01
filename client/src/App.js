import './App.css';
import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navigation/Navbar';
import BooksList from './books/BooksList';
import ReviewsList from './reviews/ReviewsList'
import Login from './users/Login';

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

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path= "/books" element={<BooksList books={books}/>} />
          <Route path= "/reviews" element={<ReviewsList reviews={reviews} />}/>
          <Route path= "/login" element={<Login />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
