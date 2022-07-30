import axios from "axios";

const api = axios.create({
    baseURL:'https://api.quotable.io/'
})

export default api;