import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./UsersContext";

const BooksContext = createContext(null);

const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const {loggedIn} = useContext(UsersContext);
    const navigate = useNavigate();

    const loadBooks = () => {
      if(loggedIn) {
            fetch("/books")
            .then(response => response.json())
            .then(data => setBooks(data))
      }
        };

    useEffect(loadBooks, [loggedIn, navigate])

    const addBook = (bookObj) => {
      setBooks([...books, bookObj])
    }

  
    return(
        <BooksContext.Provider value={{ books, setBooks, addBook }}>{ children }</BooksContext.Provider>
    )
};


export {BooksContext, BooksProvider}