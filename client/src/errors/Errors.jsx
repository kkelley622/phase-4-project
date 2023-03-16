import React, { useContext } from 'react'
import { ErrorsContext } from '../context/ErrorsContext'

const Errors = () => {

  const {errors} = useContext(ErrorsContext);
  
  const errorsList = errors?.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)

  return (
    <ul>
        {errorsList}
    </ul>
  )
}

export default Errors