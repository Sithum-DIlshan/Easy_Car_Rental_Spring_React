import axios from "axios";

//base_url
const instance = axios.create({
    //baseURL
    baseURL: 'http://localhost:8080/Back_End_war/app/v1/'
    // Header
    // timeout
})
export default instance;