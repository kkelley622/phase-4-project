import { createContext, useContext, useEffect, useState } from "react"
import { UsersContext } from "./UsersContext";

const BooksContext = createContext(null);

const BooksProvider = ( {children, setErrors} ) => {

    const [books, setBooks] = useState([]);
    const { loggedIn } = useContext(UsersContext);

    const loadBooks = () => {
      if(loggedIn) {
            fetch("/books")
            .then(response => response.json())
            .then(data => setBooks(data))
      }
        };

    useEffect(loadBooks, [loggedIn])

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
        if(data.ok) {
          setBooks([data, ...books]);
          } else {
            setErrors(data.errors)
          }
        };


    return(
        <BooksContext.Provider value={{books, setBooks, addBook}}>{ children }</BooksContext.Provider>
    )
};


export {BooksContext, BooksProvider}