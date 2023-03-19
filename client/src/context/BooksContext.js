import { createContext, useContext, useEffect, useState } from "react"
import { UsersContext } from "./UsersContext";

const BooksContext = createContext(null);

const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const {loggedIn} = useContext(UsersContext);

    const loadBooks = () => {
      if(loggedIn) {
            fetch("/books")
            .then(response => response.json())
            .then(data => setBooks(data))
      }
        };

    useEffect(loadBooks, [loggedIn])

    const addBook = (bookObj) => {
      setBooks([...books, bookObj])
    }


    return(
        <BooksContext.Provider value={{ books, setBooks, addBook }}>{ children }</BooksContext.Provider>
    )
};


export {BooksContext, BooksProvider}