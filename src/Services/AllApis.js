import axios from "axios";

const base_url="https://media-player-project.onrender.com"

export const addVideos = async (data) => {
    return await axios.post(`${base_url}/videos`, data);
};

export const getVideos = async () => {
    return await axios.get(`${base_url}/videos`)
}
export const deleteVideo = async (id) => {
    return await axios.delete(`${base_url}/videos/${id}`)
}
export const addCategory = async (data) => {
    return await axios.post(`${base_url}/category`, data)
}
export const getCategory = async () => {
    return await axios.get(`${base_url}/category`)
}
export const deletecategory = async (id) => {
    return await axios.delete(`${base_url}/category/${id}`)
}
export const addhistory = async (data) => {
    return await axios.post(`${base_url}/history`, data)
}
export const gethistory = async () => {
    return await axios.get(`${base_url}/history`)
}
export const deleteHistory = async (id) => {
    return await axios.delete(`${base_url}/history/${id}`)
}
export const updateCategory = async (id, data) => {
    return await axios.put(`${base_url}/category/${id}`, data)
}
export const checkEmailApi = async (email) => {
    return await axios.get(`${base_url}/users?email=${email}`);
}
export const registerApi = async (data) => {
    return await axios.post(`${base_url}/users`, data);
}
export const loginApi=async(email,password)=>{
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
    }
    
