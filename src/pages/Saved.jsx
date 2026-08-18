import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { deleteResumeAPI, getAllResumesAPI } from '../services/apiService';
import { resume } from 'react-dom/server';
import { IoSearch } from "react-icons/io5";
import { FaBackward, FaForward } from 'react-icons/fa';



function Saved() {

  
   const [allResumes,setAllResumes] = useState([])
   const [searchKey,setSearchKey] = useState("")
   const [dummyAllResume,setDummyAllResumes] = useState([])
   const [currentPage,setCurrentPage] = useState(1)
   console.log(searchKey);
   const rowPerPage = 4
   const lastIndexOfCurrentPage = currentPage * rowPerPage
   const firstIndexOfCurrentPage = lastIndexOfCurrentPage - rowPerPage
   const currentRresumes = allResumes.slice(firstIndexOfCurrentPage,lastIndexOfCurrentPage)
   const totalPages = Math.ceil(allResumes.length/rowPerPage)

   console.log(allResumes);
   
   useEffect(()=>{
    getAllResumes()
   },[])

   const searchOutput = useMemo(()=>{
    setAllResumes (dummyAllResume.filter(item=>item.job.toLowerCase().includes (searchKey.toLowerCase())))
   },[searchKey])
   

   const getAllResumes = async ()=>{
    const response = await getAllResumesAPI()
    if(response.status==200){
      setAllResumes(response.data)
      setDummyAllResumes(response.data)
    }
   }
  

   const removeRsume = async(id)=>{
   if( confirm("Are you sure,Do you want to delete the resume")){
    const response = await deleteResumeAPI(id)
    if(response.status==200){
      getAllResumes()
    }
   }
  }

  return (
    <div className='my-5 d-flex container justify-content-center align-items-center flex-column'>
      <h1>All Seved Resumes</h1>
      <p style={{textAlign:'justify'}} className='my-5'>All resumes submitted to the platform in one place, allowing administrators or recruiters to efficiently view, search, filter, and manage candidate profiles. It provides a quick overview of available candidates and their key details, making the recruitment and candidate-selection process more organized and efficient.</p>
      <div className='d-flex justify-content-center align-items-center w-50'>
        <input onChange={(e)=>{setSearchKey(e.target.value);setCurrentPage(1);}} type="text" placeholder='Search Candidate by their Job Roles' className='form-control' />
        <IoSearch style={{marginLeft:'-30'}} />
      </div>
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
          currentRresumes?.length>0?
          currentRresumes?.map((resume,index)=>(
             <tr>
            <td>{index+1}</td>
            <td ><Link to={`/resumes/${resume?.id}`}>{resume?.fullName.toUpperCase()}</Link></td>
            <td>{resume?.job.toUpperCase()}</td>
            <td><button onClick={()=>removeRsume(resume?.id)} className='btn text-danger'><MdDelete className='fs-4'/></button></td>
          </tr>
          ))
          :
          <p className='text-center' >No Resumes Added yet!!! </p>
         }
        </tbody>
      </table>
      <div className='d-flex align-items-center'>
        <button className='btn'onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1}>
          <FaBackward/>
        </button >
         {currentPage} of {totalPages}
        <button className='btn' onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage==totalPages || totalPages==0}>
         <FaForward/>
        </button>
      </div>
    </div>
  )
}

export default Saved
