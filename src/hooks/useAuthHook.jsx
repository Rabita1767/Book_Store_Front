// import axios from "axios";
// import axiosInstance from "../util/AxiosInstance";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// const UseAuthHook = () => {
//     const navigate = useNavigate();
//     const [signInfo, setSignInfo] = useState("")
//     const [logInfo, setLoginInfo] = useState("")
//     const signup = (formData) => {
//         axiosInstance.post("/auth/signup", formData)
//             .then(resp => {
//                 setSignInfo(resp.data);
//                 console.log(resp.data);
//             })
//             .catch(err => { console.log(err) })
//     }
//     useEffect(() => {
//         console.log(signInfo.success);
//         if (signInfo.success) {
//             console.log("ok")
//             navigate("/login");
//         }
//         else {
//             console.log("not ok");
//             navigate("/signup");
//         }
//     }, [signInfo]);
//     // const login = (formData) => {
//     //     axios.post("http://127.0.0.1:8000/auth/login", formData)
//     //         .then(resp => {
//     //             console.log(resp);
//     //             setLoginInfo(resp)
//     //             localStorage.setItem('token', resp.data.token, resp.data);
//     //         })
//     //         .catch(err => { console.log(err) })

//     // }
//     const login = (formData) => {
//         axiosInstance.post("/auth/login", formData)
//             .then(resp => {
//                 setLoginInfo(resp.data);
//                 console.log(resp.data);
//                 console.log(resp.data.data.token);
//                 console.log(resp.data.data.result)
//                 localStorage.setItem('token', resp.data.data.token, resp.data);
//                 console.log(logInfo)
//             })
//             .catch(err => console.log(err))
//     }
//     useEffect(() => {
//         console.log(logInfo.success);
//         if (logInfo.success) {
//             console.log("ok")
//             navigate("/addBook");
//         }
//         else {
//             console.log("not ok");
//             navigate("/login");
//         }
//     }, [logInfo]);
//     return { signup, signInfo, setSignInfo, login, logInfo };

// }
// export default UseAuthHook;
import axios from "axios";
import axiosInstance from "../util/AxiosInstance";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UseAuthHook = () => {
    const navigate = useNavigate();
    const [signInfo, setSignInfo] = useState("");
    const [logInfo, setLoginInfo] = useState("");

    // useEffect(() => {
    //     console.log(signInfo.success);
    //     if (signInfo.success) {
    //         console.log("ok");
    //         navigate("/login");
    //     } else {
    //         console.log("not ok");
    //         navigate("/signup");
    //     }
    // }, [signInfo]);

    // useEffect(() => {
    //     console.log(logInfo.success);
    //     if (logInfo.success) {
    //         console.log("ok");
    //         // navigate("/addBook");
    //     }
    //     console.log("not ok");
    //     // navigate("/login");
    // }, [logInfo]);

    // const login = (formData) => {
    //     axios.post("http://127.0.0.1:8000/auth/login", formData)
    //         .then(resp => {
    //             console.log(resp);
    //             setLoginInfo(resp)
    //             localStorage.setItem('token', resp.data.token, resp.data);
    //         })
    //         .catch(err => { console.log(err) })

    // }

    const signup = (formData) => {
        axiosInstance
            .post("/auth/signup", formData)
            .then((resp) => {
                setSignInfo(resp.data);
                console.log(resp.data);
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const login = (formData) => {
        console.log(formData);
        axiosInstance
            .post("/auth/login", formData)
            .then((resp) => {
                setLoginInfo(resp.data);
                console.log(resp.data);
                console.log(resp.data.data.token);
                console.log(resp.data.data.result);
                localStorage.setItem("token", resp.data.data.token, resp.data);
                console.log(logInfo);
                // navigate("/addBook");
                if (logInfo.success) {
                    navigate("/addBook");
                }
            })
            .catch((err) => console.log(err));
    };
    return { signup, signInfo, setSignInfo, login, logInfo };
};
export default UseAuthHook;
