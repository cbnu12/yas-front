import axios from 'axios';
import { getAccessToken } from './token';

interface BaseResponse<T> {
    data: T,
    status: string,
    message: string;
}

const axiosInstance = axios.create({
    timeout: 10000,
})

// axiosInstance.defaults.headers = {
//     "Cache-Control": "no-cache, no-store",
// };

axiosInstance.interceptors.request.use(
    (req) => {        
        // if (isExpired(token)) {
        //     token = await getAccessToken();
        //     setToken(token);
        // }
        
        // Headers.Authorization = `Bearer ${token}`
        return req;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (res) => {

    },
    (error) => {
        
    }
)

export default axiosInstance;