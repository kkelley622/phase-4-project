import { createContext, useState, useEffect, useContext } from "react";
import { ErrorsContext } from "./ErrorsContext";

const UsersContext = createContext({});

const UsersProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const {setLoading} =useContext(ErrorsContext);
    
    useEffect(() => {
      fetch("/get-current-user")
      .then(response => response.json())
      .then(data => {
        if(!data.errors) {
          loginUser(data)
        }
      })
    }, [setLoading])
    
    useEffect(() => {
      fetch("/users")
      .then(response => response.json())
      .then(data => {
        if(!data.errors) {
          setUsers(data)
        }
        setLoading(false)
      })
    }, [loggedIn, setLoading])
    
    
    const loginUser = (user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      };
    
    const logoutUser = () => {
      setCurrentUser({});
      setLoggedIn(false);
    };

    const addUser = (user) => {
      setUsers([...users, user])
    };

    const updateUserReviews = (updatedReview) => {
      console.log(updatedReview)
      const userToUpdate = users?.find(user => user.id === updatedReview.user_id)
      console.log(userToUpdate)
      const updatedUserReviews = userToUpdate.reviews?.map(review => {
        if(review.id === updatedReview.id) {
          return updatedReview;
        } else {
          return review;
        }
      })
      console.log(userToUpdate)
      console.log(updatedUserReviews)
      const updatedUser = {
        ...userToUpdate,
        reviews: updatedUserReviews
      }
      const updatedUsersState = users.map(user => {
        if(user.id === updatedUser.id) {
          return updatedUser
        } else {
          return user
        }
      })
      setUsers(updatedUsersState)
    }

    // const updateResource = (collection, updatedItem) => {
    //   return collection.map(item => {
    //     if(item.id === updatedItem.id) {
    //       return updatedItem
    //     } else {
    //       return item
    //     }
    //   })
    // }
    // const userToUpdate = users.find(user => user.id === data.user_id)
    // const updatedReviews = updateResource(userToUpdate.reviews, data)
    // const updatedUser = {
    //   ...userToUpdate,
    //   reviews: updatedReviews
    // }

    // const updatedUsersState = updateResource(users, updatedUser)
    // setUsers(updatedUsersState)

    return(
        <UsersContext.Provider value={{ users, currentUser, loggedIn, loginUser, logoutUser, addUser, updateUserReviews }}>{ children }</UsersContext.Provider>
    )

}



export { UsersContext, UsersProvider }