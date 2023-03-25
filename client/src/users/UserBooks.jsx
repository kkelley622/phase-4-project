import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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

    const myBooksList = currentUser.books?.map(book => <li key={book.id}><Link to={`/books/${book.id}`}>{book.title}</Link></li> )

  return (
    <>
        <h3>Books You Have Read</h3>
        <ul>
        { myBooksList?.length > 0 ? myBooksList : "You Haven't Read Anything Yet"}
        </ul>
    </>
  )
}

export default UserBooks