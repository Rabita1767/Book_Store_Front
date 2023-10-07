import axios from "axios";
import axiosInstance from "../util/AxiosInstance";
import { useState, useEffect } from "react";
const UseAuthHook = () => {
    const [signInfo, setSignInfo] = useState("")
    const [logInfo, setLoginInfo] = useState("")
    const signup = (formData) => {
        axios.post("http://127.0.0.1:8000/auth/signup", formData)
            .then(resp => { setSignInfo(resp) })
            .catch(err => { console.log(err) })
    }
    // const login = (formData) => {
    //     axios.post("http://127.0.0.1:8000/auth/login", formData)
    //         .then(resp => {
    //             console.log(resp);
    //             setLoginInfo(resp)
    //             localStorage.setItem('token', resp.data.token, resp.data);
    //         })
    //         .catch(err => { console.log(err) })

    // }
    const login = (formData) => {
        axiosInstance.post("/auth/login", formData)
            .then(resp => {
                setLoginInfo(resp.data);
                console.log(resp.data)
                console.log(logInfo)
            })
            .catch(err => console.log(err))
    }
    // useEffect(() => {
    //     console.log(logInfo);
    // }, [logInfo]);
    return { signup, signInfo, setSignInfo, login, logInfo };

}
export default UseAuthHook;