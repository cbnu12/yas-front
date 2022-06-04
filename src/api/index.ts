import axios from 'axios';
import { config } from 'process';
import { isExpired, setToken, getToken } from '../utils/token';
import { getAccessToken } from './token';

interface BaseResponse<T> {
    data: T,
    status: string,
    message: string;
}

const axiosInstance = axios.create({
    timeout: 10000,
})

axiosInstance.defaults.headers.common['Authorization'] = getToken();

axiosInstance.interceptors.request.use(
    async (req) => {  
        let token;
        if (isExpired(token)) {
            token = await getAccessToken({refreshToken: ""});
            setToken(token);
        }
        
        req.headers.Authorization = getToken();
        return req;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;