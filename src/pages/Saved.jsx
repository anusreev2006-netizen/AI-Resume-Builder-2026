import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function Saved() {
  return (
    <div className='my-5 d-flex container justify-content-center align-items-center flex-column'>
      <h1>All Seved Resumes</h1>
      <table className='my-5 table table-hover table-stripped '>
        <thead>
          <tr className='table-dark'>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>1</td>
            <td ><Link to={'/resumes/id'}>NAME</Link></td>
            <td>JOB</td>
            <td><button className='btn text-danger'><MdDelete className='fs-4'/></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Saved
