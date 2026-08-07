import React from 'react'
import { MdOutlineMailOutline, } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div style={{height:'350px',backgroundColor:'black'}} className='container-fluid p-5 text-white'>
      <div className='row'>
        <div className='col-lg-4'>
          <h4 className='mb-3'>AI rBuilder</h4>
          <p style={{textAlign:'justify'}}>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional</p>
        </div>
        <div className='col-lg-4'></div>
        <div className='col-lg-4'>
          <h4 className='mb-3'>Contact Us</h4>
          <p><MdOutlineMailOutline className='me-2' />resumebuilder@gmail.com</p>
          <p><FaPhoneAlt className='me-2' />2314253646</p>
          <h5 className='my-3'>Contact with us</h5>
          <IoLogoInstagram />
          <FaFacebook className='mx-2' />
          <FaWhatsapp />
        </div>
      </div>
      <h6 className='text-center my-2'>Designed & built with ❤️ using react</h6>
    </div>
  )
}

export default Footer
