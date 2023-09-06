import axios from "axios";

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key: process.env.REACT_APP_YT_API_KEY,
    },
})

// request.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         console.error("AxiosError:", error);
//         return Promise.reject(error);
//     }
// );

export default request

