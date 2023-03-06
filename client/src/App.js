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
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/get-current-user")
      .then(response => response.json())
      .then(data => {
        if(!data.message) {
          loginUser(data)
        }
      })

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

  const loginUser = (user) => {
    setCurrentUser(user);
    setLoggedIn(true);
  }

  async function addBook(event, bookObj) {
    event.preventDefault()
    const response = await fetch("/books", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookObj),
    });
    const data = await (response).json();
    if(response.ok) {
      setBooks([data, ...books]);
      } else {
        setErrors(data.errors)
      }
    };

  async function addReview(event, reviewObj) {
    event.preventDefault()
    const response = await fetch("/reviews", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewObj),
    });
    const data = await (response).json();
    if(response.ok) {
      setReviews([data, ...reviews]);
      } else {
        setErrors(data.errors)
      }
    };

  async function addUser(event, userObj) {
    event.preventDefault()
    const response = await fetch("/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    });
    const data = await (response.json());
    console.log(data)
    if(response.ok) {
      setUsers([data, ...users])
      loginUser(data)
    } else {
      setErrors(data.errors)
    }
  };

  const handleDeleteReview = (deletedReview) => {
    const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id);
    setReviews(updatedReviews)
  }

  return (
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} />
        <Routes>
          <Route path="/books" element={<BooksList books={books} />} />
          <Route path="/books/new" element={<BookForm addBook={addBook} errors={errors} />} />
          <Route path="/reviews" element={<ReviewsList reviews={reviews} handleDeleteReview={handleDeleteReview}/>}/>
          <Route path="/reviews/new" element={<ReviewForm addReview={addReview} errors={errors} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup addUser={addUser} errors={errors} />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
