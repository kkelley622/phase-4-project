import { createContext, useState} from "react";

const ErrorsContext = createContext({});

const ErrorsProvider = ({ children  }) => {

    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);


    return(
        <ErrorsContext.Provider value={{errors, setErrors, loading, setLoading}}>{ children }</ErrorsContext.Provider>
    );
};

export {ErrorsContext, ErrorsProvider}