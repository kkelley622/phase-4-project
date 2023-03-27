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
        setLoading(false)
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

    return(
        <UsersContext.Provider value={{ users, currentUser, loggedIn, loginUser, logoutUser, addUser }}>{ children }</UsersContext.Provider>
    )

}



export { UsersContext, UsersProvider }