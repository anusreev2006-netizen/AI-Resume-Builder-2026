import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import {Link} from 'react-router-dom'

function Header() {
  const aboutUserContent="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF"
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*app icon */}
          
          <img width={"40px"}className='rounded' src="https://img.magnific.com/free-vector/woman-resume-with-magnifier-table-cv-resume-concept-finding-worker-apply-job-business-opportunity-cv-profile_613284-42.jpg?semt=ais_hybrid&w=740&q=80" alt="" />

          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
         <Link to={'/'} className='text-light text-decoration-none'> AI rBuilder</Link>
          </Typography>
           <Link to={'/all-resumes'}  className='text-light text-decoration-none fs-5'>ALL RESUMES</Link>
           <Link to={'/downloads'}  className='text-light text-decoration-none mx-5 fs-5'>ALL DOWNLOADS</Link>
          <Tooltip title={aboutUserContent}><Button color="inherit" className='fs-5 sx={{ font-family: "Poppins"}}'>ABOUT US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
