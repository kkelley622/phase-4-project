import './App.css';
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navigation/Navbar';
import BooksList from './books/BooksList';
import ReviewsList from './reviews/ReviewsList'

function App() {

  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/books")
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path= "/">
          </Route>
          <Route exact path= "/books" element={<BooksList />}/>
          <Route exact path= "/reviews" element={<ReviewsList />}/>
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
