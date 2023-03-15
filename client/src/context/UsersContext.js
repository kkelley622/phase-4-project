import { createContext, useState, useEffect } from "react";

const UsersContext = createContext({});

const UsersProvider = ( { children, setErrors, setLoading } ) => {
  
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const loadUsers = () => {
      if(loggedIn){
        fetch("/users")
          .then(response => response.json())
          .then(data => setUsers(data))
      }
    };

   const getCurrentUser = () => {
        fetch("/get-current-user")
        .then(response => response.json())
        .then(data => {
          if(!data.errors) {
            loginUser(data)
          }
          
          setLoading(false)
        })
    }

    useEffect(getCurrentUser, [setLoading])
    useEffect(loadUsers, [loggedIn])

    const loginUser = (user) => {
        setCurrentUser(user);
        setLoggedIn(true);
    };

    const logoutUser = () => {
        setCurrentUser(null);
        setLoggedIn(false);
      };

    async function addUser(event, userObj) {
        event.preventDefault()
        const response = await fetch("/signup", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userObj)
        });
        const data = await (response.json());
        if(response.ok) {
          setUsers([data, ...users])
          loginUser(data)
        } else {
          setErrors(data.errors)
        }
    };

    return(
        <UsersContext.Provider value={{ users, currentUser, loggedIn, loginUser, logoutUser, addUser }}>{ children }</UsersContext.Provider>
    )

}



export { UsersContext, UsersProvider }