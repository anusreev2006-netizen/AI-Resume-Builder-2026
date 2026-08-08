import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2>Downloaded Resume Detaild </h2>
        <Link to={'/resume-details'}><IoArrowBack />Back</Link>
      </div>
      <h6>Total Downloded resume from our site is <span>10</span></h6>
      <div className='row my-5'>
        {/* duplicate according to download resume count */}
        <div className='col-lg-4 mb-3'>
          <div style={{height:'400px'}} className='shadow p-3 rounded'>
           <h6>Review at : timestamp</h6>
           <div className='mt-3 tex-center'>
            <Link to={'/resumes/:id'}> <img className='w-100' height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBFw8HcYYHh6E1D7V9OKAkkKUp0VaEvG5LSsv_geuqA&s=10" alt="Doownload CV" /> </Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
