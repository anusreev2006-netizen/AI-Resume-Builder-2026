import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <>
    {/* landing */}
    <div style={{height:'100vh',backgroundImage:'url("/landing.png")',backgroundSize:'cover',backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'>
    <div style={{backgroundColor:'rgba(0,0,0,.4)'}} className='w-50 p-5 rounded text-light  text-center'>
      <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
        <Link to={'/resume'}><button style={{backgroundColor:'#755846'}} className='btn text-light'>Make your Resume with AI</button></Link>
    </div>
    </div>
    {/* about  sectiom */}
    <div className='container my-5'>
      <h1 className='text-center mb-5'>What's AI rBuilder</h1>
        <div className='row align items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.
            </p>

            <p style={{textAlign:'justify'}}>
            The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.
            </p>

            <p style={{textAlign:'justify'}}>
            The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.
            </p>

            <p style={{textAlign:'justify'}}>
            This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.
            </p>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="/resume.png" alt="resume" />
          </div>
        </div>

    </div>
    {/* banner */}
    <div style={{height:'80vh',backgroundImage:'url("/team.png")',backgroundSize:'cover',backgroundPosition:'center', backgroundAttachment:'fixed'}}></div>

    {/* testimony */}

     <div className='container my-5'>
      <h1 className='text-center mb-5'>Testimony</h1>
        <div className='row align itemAs-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <p style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>

            <p style={{textAlign:'justify'}}>
            
            In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p>

            <p style={{textAlign:'justify'}}>
            Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out
            </p>

           
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <div className='row'>
              <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBW8nMosRwP8PfY3FR8X6WWSW_rUhO5NXit0tMuCHiw&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWS9ytRM-3_fAbaUJgwe1M2MYDC_VMnCbli_BxVca3kg&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEGFU1RlKqIt9lA8LeLPR9llHVXbDQ4uhTdu41yu9cA&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuPbQewxfAWFFj4olNPkKxSXuCSj5Fj3MH7GN3G6KVQ&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvHBC0xJr3ALmnl_8PO_oDqhtqThxKEDSnQHBvkxG9w&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReW5gNHpY82949GbMwo7yR13LpYWhSZ-DSqu-yPpLT1Q&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOs829OqHEIyFxs3JtpYWMNQx1qipcEbw_F2FAzZq5w&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxkN8C0AKf9X4glRboB1u-mKhgfJy1IInuCCi7gQwQA&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJqaXy-0dZxDPurKiXJ0NBmtBYlvN2vtwq040QFkmMQ&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjk39SYfrN4IeneaSOuYd0dTuQLUtkjngct6_IcUg07w&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqYeAZ1mk_tvd8v2N7rbN23QK576KhK5jkapgJ-NxTA&s=10" alt="resume" />
            </div>
            <div className='col-md-3'>
            <img width={'100%'} height={'600px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k0D_KuckpRiy8Q611KHsvgHpP40ieqhbb1CfgAidjg&s=10" alt="resume" />
            </div>
          </div>
          </div>
        </div>

    </div>
    </>
  )
}

export default Home
