import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://localhost:8081/api/v1/auth',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

export default authApi
