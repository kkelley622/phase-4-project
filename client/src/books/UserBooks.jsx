import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorsContext } from '../context/ErrorsContext';
import { UsersContext } from '../context/UsersContext';

const UserBooks = () => {
    const navigate = useNavigate();
    const{loggedIn} = useContext(UsersContext);
    const{loading, setErrors} = useContext(ErrorsContext);
    const {currentUser} = useContext(UsersContext);

    useEffect(() => {
        if(!loading && !loggedIn) {
          navigate("/login")
        }
        return () => {
          setErrors([])
        }
      }, [loading, loggedIn, navigate, setErrors]);

    const myBooksList = currentUser.books?.map(book => <li key={book.id}> {book.title} </li>)

  return (
    <>
        <h3>Books You Have Read</h3>
        <ul>
        { myBooksList ? myBooksList : "You Haven't Read Anything Yet"}
        </ul>
    </>
  )
}

export default UserBooks