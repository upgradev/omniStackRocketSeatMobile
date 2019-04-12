import axios from 'axios'

const api = axios.create({
    baseURL: "https://omnistack-backendcurso.herokuapp.com"
})

export default api;