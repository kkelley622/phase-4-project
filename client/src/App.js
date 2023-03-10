import './App.css';
import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navigation/Navbar';
import BooksList from './books/BooksList';
import ReviewsList from './reviews/ReviewsList';
import Login from './users/Login';
import BookForm from './books/BookForm';
import ReviewForm from './reviews/ReviewForm';
import Signup from './users/Signup';
import Errors from './errors/Errors';
import ReviewEdit from './reviews/ReviewEdit';
import { BooksProvider } from './context/BooksContext';
import UsersList from './users/UsersList';
import Home from './Home';

function App() {

  // const [books, setBooks] = useState([]);
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
        if(!data.errors) {
          loginUser(data)
        }
        setLoading(false)
      })
    // fetch("/books")
    //   .then(response => response.json())
    //   .then(data => setBooks(data))
  }, []);

  useEffect(() => {
    if(loggedIn){
      fetch("/reviews")
        .then(response => response.json())
        .then(data => setReviews(data))
    }
  }, [loggedIn]);

  useEffect(() => {
      if(loggedIn){
        fetch("/users")
          .then(response => response.json())
          .then(data => setUsers(data))
      }
  }, [loggedIn]);

  const loginUser = (user) => {
    setCurrentUser(user);
    setLoggedIn(true);
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setLoggedIn(false);
  };

  console.log("current user", currentUser)

  // async function addBook(event, bookObj) {
  //   event.preventDefault()
  //   const response = await fetch("/books", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(bookObj),
  //   });
  //   const data = await (response).json();
  //   if(response.ok) {
  //     setBooks([data, ...books]);
  //     } else {
  //       setErrors(data.errors)
  //     }
  //   };

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
  };

  const editReview = (updatedReview) => {
    const updatedReviews = reviews.map(review => {
      if(updatedReview.id === review.id) {
        return updatedReview
      } else {
        return review;
      }
    })
    setReviews(updatedReviews)
  }

  return (
      <BrowserRouter>
      <BooksProvider setErrors={setErrors} loading={loading} loggedIn={loggedIn}>
        <Navbar loggedIn={loggedIn} logoutUser={logoutUser}/>
        <Errors errors={errors}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksList loggedIn={loggedIn} loading={loading}/>} />
          <Route path="/books/new" element={<BookForm setErrors={setErrors} loading={loading} loggedIn={loggedIn}/>} />
          <Route path="/reviews" element={<ReviewsList reviews={reviews} handleDeleteReview={handleDeleteReview} loggedIn={loggedIn} loading={loading} currentUser={currentUser} />}/>
          <Route path="/reviews/:id/edit" element={<ReviewEdit reviews={reviews} editReview={editReview} loading={loading} loggedIn={loggedIn} currentUser={currentUser} />}/>
          <Route path="/reviews/new" element={<ReviewForm addReview={addReview} setErrors={setErrors} loading={loading} loggedIn={loggedIn} />} />
          <Route path="/users" element={<UsersList users={users} loading={loading} loggedIn={loggedIn}/>}/>
          <Route path="/login" element={<Login loginUser={loginUser} setErrors={setErrors} loading={loading} loggedIn={loggedIn}/>} />
          <Route path="/signup" element={<Signup addUser={addUser} setErrors={setErrors} loading={loading} loggedIn={loggedIn} />} />
        </Routes>
        </BooksProvider>
      </BrowserRouter>    
  );
}

export default App;
