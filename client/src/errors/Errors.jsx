import React from 'react'

const Errors = ( {errors} ) => {
    const errorsList = errors.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)
  return (
    <ul>
        {errorsList}
    </ul>
  )
}

export default Errors