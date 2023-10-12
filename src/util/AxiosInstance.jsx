// import axios from "axios";
// const token = localStorage.getItem("token");
// const axiosInstance = axios.create(
//     {
//         baseURL: "http://127.0.0.1:8000",
//         headers:
//         {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//         timeout: 100000,
//     }
// )
// export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosInstance;