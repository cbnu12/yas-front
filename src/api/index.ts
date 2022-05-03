import axios from 'axios';

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