import './App.css';
import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navigation/Navbar';
import BooksList from './books/BooksList';
import ReviewsList from './reviews/ReviewsList'
import Login from './users/Login';
import BookForm from './books/BookForm';
import ReviewForm from './reviews/ReviewForm';
import Signup from './users/Signup';

function App() {

  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/books")
    .then(response => response.json())
    .then(data => setBooks(data))
  }, []);

  useEffect(() => {
    fetch("/reviews")
    .then(response => response.json())
    .then(data => setReviews(data))
  }, []);

  useEffect(() => {
    fetch("/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, []);

  const addBook = (event, bookObj) => {
    event.preventDefault()
    fetch("/books", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    })
    .then((response) => {
      if(response.ok) {
        response.json().then((data) => setBooks([data, ...books]));
      } else {
        response.json().then((errorData) => setErrors(errorData.errors))
      }
    })
  };

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
  };

  const addUser = (event, userObj) => {
    event.preventDefault()
    fetch("/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(response => response.json())
    .then(data => setUsers([data, ...users]))
  }

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/books" element={<BooksList books={books} />} />
          <Route path="/books/new" element={<BookForm addBook={addBook} errors={errors} />} />
          <Route path="/reviews" element={<ReviewsList reviews={reviews} />}/>
          <Route path="/reviews/new" element={<ReviewForm addReview={addReview} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup addUser={addUser} />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
