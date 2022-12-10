import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

instance.interceptors.request.use(function (config) {
    config.headers.Authorization = localStorage.getItem("seller");
    console.log(config.headers.Authorization);
    // console.log("intercepted");
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default instance;