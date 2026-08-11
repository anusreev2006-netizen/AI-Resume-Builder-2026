import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { getAllResumesAPI } from '../services/apiService';
import { resume } from 'react-dom/server';


function Saved() {

   const [allResumes,setAllResumes] =useState([])

   console.log(allResumes);
   
   useEffect(()=>{
    getAllResumes()
   },[])

   const getAllResumes = async ()=>{
    const response = await getAllResumesAPI()
    if(response.status==200){
      setAllResumes(response.data)
    }
   }


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
         {
          allResumes?.length>0?
          allResumes?.map((resume,index)=>(
             <tr>
            <td>{index+1}</td>
            <td ><Link to={`/resumes/${resume?.id}`}>{resume?.fullName.toUpperCase()}</Link></td>
            <td>{resume?.job.toUpperCase()}</td>
            <td><button className='btn text-danger'><MdDelete className='fs-4'/></button></td>
          </tr>
          ))
          :
          <p className='text-center'>No Resumes Added yet!!! </p>
         }
        </tbody>
      </table>
    </div>
  )
}

export default Saved
