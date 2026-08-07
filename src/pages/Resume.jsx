import React from 'react'
import { HiDocumentText } from "react-icons/hi2";
import { HiDocumentDownload } from "react-icons/hi";
import{Link} from 'react-router-dom'

function Resume() {
  return (
    <div style={{minHeight:'90vh'}} className='mt-5'>
      <h1 className='text-center'>Create an ATS Friendly Resume in Minutes with AI</h1>
      <div container mt-5>
        <div className='row'>
          <div className='col-md-1 '></div>
          <div className='col-md-4 rounded p-5 shadow text-center '>
            <HiDocumentText className='fs-1 text-primary mb-3' />
            <h4>Add Your Details  </h4>
            <p>Our AI will generate Skills & Summary</p>
            <h5>step 1</h5>
          </div>
          <div className='col-md-2'></div>
          <div className='col-md-4 rounded p-5 shadow text-center'>
            <HiDocumentDownload  className='fs-1 text-danger mb-3'/>
            <h4>Download your Resume  </h4>
            <p>Download PDF and start applying</p>
            <h5>step 2</h5>
          </div>
          <div className='col-md-1'></div>
        </div>
        <div className='mt-5 text-center'>
          <Link to={'/resume-details'} style={{backgroundColor:'#714a2f'}} className='btn text-light'>LET'S START</Link>
        </div>
      </div>
    </div>
  )
}

export default Resume
