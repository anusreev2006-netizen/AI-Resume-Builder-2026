import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'90vh'}} className='d-flex justify-contant-center align-items-center flex-column'>
      <img className='w-25 mt-5' src="https://repository-images.githubusercontent.com/257149984/91493280-82e0-11ea-9362-e3f575d58bf4" alt="page not found" />
      <h6 className='mt-5'>WE ARE SORRY, LOOK LIKE YOUR LOST</h6>
      <p>Page your looking for is not avilable!!!</p>
      <Link to={'/'} classNamebtn btn-dark>Back to Home</Link>

    </div>
  )
}

export default Pnf
