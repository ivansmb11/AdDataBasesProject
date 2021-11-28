import axios from 'axios'

const loansApi = axios.create({
    baseURL: 'http://localhost:8081/api/v1/loans',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

export default loansApi
