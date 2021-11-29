import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://node-express-env.eba-um6sxmyi.us-east-2.elasticbeanstalk.com/api/v1/auth',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

export default authApi
