import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Preview from '../components/Preview'
import { HiDocumentDownload } from "react-icons/hi";
import Edit from '../components/Edit'
import { IoDocumentText } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import { viewResumeAPI } from '../services/apiService';

function View() {

const [resume,setResume] = useState({})
const {id} = useParams()
console.log(resume);

   useEffect(()=>{
     getResumeDetails()},[])

const getResumeDetails = async ()=>{
  const response = await viewResumeAPI(id)
  if(response.status==200){
   setResume(response.data )
  }
}

return (
    <div className='container my-5'>
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        {/* navigation linka/icons */}
        <div className="d-flex justify-content-center align-items-center">
          {/* download */}
          <button style={{color:'#714a2f'}} className='btn  me-2'><HiDocumentDownload  className='fs-1'/>Download CV</button>
          {/* edit */}
          <Edit resumeDetails={resume} setResumeDetails={setResume}/>
          {/* all resumes */}
          {/* <Link to={'/all-resumes'} style={{color:'#714a2f'}} className='btn  me-2'><IoDocumentText className='fs-3 pe-1' />All resumes</Link>
          {/* download history */}
           {/* <Link to={'/downloads'} style={{color:'#714a2f'}} className='btn  me-2'><IoMdRefresh  className='fs-3 pe-1'/>Download History</Link> */} 
          {/* go back option */}
          <Link to={'/resume-details'} style={{color:'#714a2f'}} className='btn  me-2'><FaBackward className='fs-3 pe-2' />Home</Link>
        </div>
        {/* preview */}
        <div className="p-5">
          <Preview resumeDetails={resume}/>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  )
}

export default View
