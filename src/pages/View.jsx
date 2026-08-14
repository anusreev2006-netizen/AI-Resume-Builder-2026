import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Preview from '../components/Preview'
import { HiDocumentDownload } from "react-icons/hi";
import Edit from '../components/Edit'
import { IoDocumentText } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import { downloadResumeAPI, viewResumeAPI } from '../services/apiService';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


function View() {

const previewRef =useRef()
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

const downloadCV = async ()=>{
 
   const previewTag =previewRef.current  
  const canvas =await html2canvas(previewTag)
  canvas.toBlob( async (imgFile)=>{
      // have to create formData from file via api
      const formData = new FormData()
      formData.append("file",imgFile)
      formData.append("upload_preset","resumes")
       // generate resume img from cloudinary - api call
       const result =await fetch("https://api.cloudinary.com/v1_1/qp4k6y5h/image/upload",{
        method:"POST",
        body:formData
      })
      const serverData = await result.json()
      const url = serverData.secure_url 
      // console.log(url);
      generatePDF(url)
  })
}

const generatePDF = async (resumeImg)=>{
  const pdf=new jsPDF()
  const imageWidth = pdf.internal.pageSize.getWidth()
  const imageHeight =pdf.internal.pageSize.getHeight()
  pdf.addImage(resumeImg,"PNG",0,0,imageWidth,imageHeight)
  // api call to save download resume details in json 
  const today = new Date()
  const timestamp = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`
  const result = await downloadResumeAPI({timestamp,resumeImg,resumeId:resume.id,jpbRole:resume.job})
  if(result.status==201){
   pdf.save(`${resume.fullName}-CV.pdf`)

  }
}

return (
    <div className='container my-5'>
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        {/* navigation linka/icons */}
        <div className="d-flex justify-content-center align-items-center">
          {/* download */}
          <button onClick={downloadCV} style={{color:'#714a2f'}} className='btn  me-2'><HiDocumentDownload  className='fs-1'/>Download CV</button>
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
        <div ref={previewRef} className="p-5">
          <Preview  resumeDetails={resume}/>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  )
}

export default View
