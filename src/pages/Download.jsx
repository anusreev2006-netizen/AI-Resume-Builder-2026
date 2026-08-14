import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
import { getAlldownloadAPI } from '../services/apiService';
import { resume } from 'react-dom/server';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const [downloadList,setdownloadList] = useState([])
  // used to store all job roles
  const [label,setLabel] = useState([])
  // used to store count of each job roles
  const [value, setValue] = useState([])
  const colorPallete = [ '#d5eb34','#34bdeb','#c634eb','#eb349e','#ebba34','#34eba1' ]
  const backgroundColor = label.map((value,index)=>colorPallete[index%colorPallete.length])
  // console.log(downloadList);

  const data = {
    labels:label,
    datasets:[{
      label:'Download Count',
      data:value,
      backgroundColor
     }
    ]
  }
  
  useEffect(()=>{
    getAllDownloads()
  },[])

  const getAllDownloads = async ()=>{
    const result = await getAlldownloadAPI()
    setdownloadList(result.data)
    const output = {}
    result.data.forEach(item=>{
      const currentJob = item.jpbRole 
      const currentCount = 1
      if(currentJob in output){
        output[currentJob] += 1
      }else{
        output[currentJob] = 1
      }
    })
      setLabel(Object.keys(output))
      setValue(Object.values(output))

  }

  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2> All Downloaded Resume Details </h2>
       <button onClick={handleOpen}  style={{backgroundColor:'#714a2f'}} className='btn text-light' >View In Chart</button>
      </div>
      {  downloadList?.length>0 &&
        <h6 className='my-3 fw-bolder'>Total Downloded resume from our site is : <span className='text-danger fs-4 '>{downloadList.length}</span></h6>
      }

      <div className='row my-5'>
        {/* duplicate according to download resume count */}
       {
        downloadList?.length>0 ?
        downloadList?.map(resume=>(
           <div key={resume?.id} className='col-lg-4 mb-3'>
          <div style={{height:'400px'}} className='shadow p-3 rounded'>
           <h6>Review at : {resume?.timestamp}</h6>
           <div className='mt-3 tex-center'>
            <Link to={`/resumes/${resume?.resumeId}`}> <img className='w-100' height={'300px'} src={resume?.resumeImg} alt="Doownload CV" /> </Link>
           </div>
          </div>
        </div>
        ))
        :
        <div className='text-center'>Candudate does not downloaded any resume yet!!!</div>
       }
      </div>
      {/* modal */}
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:'#5c494c',width:'100%',padding:'10px',color:'white',textAlign:'center'}}>
              CV Download Count By Job Role
            </Typography>
           <Box>
            <div className="text-center">
               <Pie data={data} />
            </div>

            <p>This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform.</p>
           </Box>
          </Box>
        </Modal>
    </div>
  )
}

export default Download
