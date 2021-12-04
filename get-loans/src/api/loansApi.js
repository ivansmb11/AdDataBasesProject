import axios from 'axios'

const loansApi = axios.create({
    baseURL: 'http://node-express-env.eba-um6sxmyi.us-east-2.elasticbeanstalk.com/api/v1/loans',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

export default loansApi
