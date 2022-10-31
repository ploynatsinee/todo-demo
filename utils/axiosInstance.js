import axios from "axios";

const API_URL = "http://127.0.0.1:8090/api";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

export { 
    API_URL,
    axiosInstance
 };