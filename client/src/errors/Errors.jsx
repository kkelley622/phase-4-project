import React from 'react'

const Errors = ( {errors} ) => {
    const errorsList = errors.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)
  return (
    <>
        {errorsList}
    </>
  )
}

export default Errors