import axios from "axios";
import axiosInstance from "../util/AxiosInstance";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../redux/userSlice";
const UseAuthHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signInfo, setSignInfo] = useState("");
    const [logInfo, setLoginInfo] = useState("");
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
                dispatch(addUserInfo(resp.data));
                console.log(resp.data);
                console.log(resp.data.data.token);
                console.log(resp.data.data.result);
                localStorage.setItem("token", resp.data.data.token, resp.data);
                console.log(logInfo);
                // navigate("/addBook");
                if (resp.data.success) {
                    navigate("/addBook");
                }
            })
            .catch((err) => console.log(err));
    };
    return { signup, signInfo, setSignInfo, login, logInfo };
};
export default UseAuthHook;
