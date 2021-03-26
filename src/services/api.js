import axios from "axios";

const api = axios.create({
    baseURL:"https://todo-jf-server.herokuapp.com/"
    
    //baseURL:"http://localhost:8000"
})

export default api;