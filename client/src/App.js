import './App.css';
import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navigation/Navbar';
import Home from './Home';
import BooksList from './books/BooksList';
import ReviewsList from './reviews/ReviewsList';
import Login from './users/Login';
import BookForm from './books/BookForm';
import ReviewForm from './reviews/ReviewForm';
import Signup from './users/Signup';
import Errors from './errors/Errors';
import ReviewEdit from './reviews/ReviewEdit';
import UsersList from './users/UsersList';
import { BooksProvider } from './context/BooksContext';
import { ReviewsProvider } from './context/ReviewsContext';
import { UsersProvider } from './context/UsersContext';
import { ErrorsProvider } from './context/ErrorsContext';

function App() {
  const [loading, setLoading] = useState(true);

  return (
      <BrowserRouter>
        <ErrorsProvider>
        <UsersProvider setLoading={setLoading}>
        <BooksProvider loading={loading}>
        <ReviewsProvider loading={loading}>
         <Navbar />
         <Errors />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/books" element={<BooksList loading={loading}/>} />
           <Route path="/books/new" element={<BookForm loading={loading} />} />
           <Route path="/reviews" element={<ReviewsList loading={loading} />}/>
           <Route path="/reviews/:id/edit" element={<ReviewEdit loading={loading} />}/>
           <Route path="/reviews/new" element={<ReviewForm loading={loading} />} />
           <Route path="/users" element={<UsersList loading={loading}/>}/>
           <Route path="/login" element={<Login loading={loading} />} />
           <Route path="/signup" element={<Signup loading={loading} />} />
         </Routes>
        </ReviewsProvider>
        </BooksProvider>
        </UsersProvider>
        </ErrorsProvider>
      </BrowserRouter>     
  );
}

export default App;
