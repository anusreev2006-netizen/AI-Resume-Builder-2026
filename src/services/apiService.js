import axiosServiece from "../api/axiosService";

// to save resume apii :called by resumeInput  component when finish button click

export const saveResumeAPI = async(resumeDetails)=>{
    return await axiosServiece("POST","/resumes",resumeDetails)
  }

// view resume api :called by component when page load in browser

export const viewResumeAPI = async (resumeId)=>{
   return await axiosServiece("GET", `/resumes/${resumeId}`,{})
}

//get all resume api :called by saved  component when page load in browser

export const getAllResumesAPI = async ()=>{
   return await axiosServiece("GET", `/resumes`,{})
}

//remove resume api :called by saved  component when delete button clicked

export const deleteResumeAPI = async (resumeId)=>{
   return await axiosServiece("DELETE", `/resumes/${resumeId}`,{})
}

