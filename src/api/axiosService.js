import axiosInstance from "./axiosInstance";

const axiosServiece =async (httpMethod,url,reqBody)=>{
 try{
    const response = await axiosInstance({
        method:httpMethod,
        url,
        data:reqBody
    })
    return  response
} catch(error){
    throw err
}
}

export default axiosServiece