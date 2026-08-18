import React from 'react'
import "./Loading.css"
function Error({message}) {
  return (
    <div className='error'>
      <h1>Xatolik!</h1>
      <p>{message}</p>
    </div>
  )
}

export default Error