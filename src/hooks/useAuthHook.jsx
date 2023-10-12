import axios from "axios";
import axiosInstance from "../util/AxiosInstance";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../redux/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                if (resp.data.success) {
                    toast(resp.data.message)
                    navigate("/login");
                }

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
                localStorage.setItem("role", resp.data.data.role)
                localStorage.setItem("id", resp.data.data.result._id)
                console.log(logInfo);
                // navigate("/addBook");
                if (resp.data.success) {
                    toast(resp.data.message)
                    navigate("/product");
                }

            })
            .catch((err) => {
                console.log(err);
                toast(err.response.data.message);
            });
    };

    return { signup, signInfo, setSignInfo, login, logInfo };
};
export default UseAuthHook;
