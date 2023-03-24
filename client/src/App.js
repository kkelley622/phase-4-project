import './App.css';
import React from 'react';
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
import UserReviews from './reviews/UserReviews';
import UserBooks from './books/UserBooks';
import BookReviews from './books/BookReviews';

function App() {
  // const [loading, setLoading] = useState(true);

  return (
      <BrowserRouter>
        <ErrorsProvider>
        <UsersProvider >
        <ReviewsProvider >
        <BooksProvider >
         <Navbar />
         <Errors />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/books" element={<BooksList />} />
           <Route path="/books/:book_id" element={<BookReviews />} />
           <Route path="/books/new" element={<BookForm />} />
           <Route path="/mybooks" element={<UserBooks />} />
           <Route path="/reviews" element={<ReviewsList />}/>
           <Route path="/reviews/:id/edit" element={<ReviewEdit />}/>
           <Route path="/books/:id/new-review" element={<ReviewForm  />} />
           <Route path="/users" element={<UsersList/>}/>
           <Route path="/users/:user_id/reviews" element={<UserReviews />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
         </Routes>
        </BooksProvider>
        </ReviewsProvider>
        </UsersProvider>
        </ErrorsProvider>
      </BrowserRouter>     
  );
}

export default App;
