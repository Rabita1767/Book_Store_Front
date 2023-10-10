import { useState } from "react";
import axiosInstance from "../util/AxiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UseUserHook = () => {
    const [balance, setBalance] = useState(null);
    const token = localStorage.getItem("token");
    const balanceAdd = (formData) => {
        axiosInstance.post("/user/addBalance", formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => {
                console.log(resp.data)
                setBalance(resp.data.data)
                if (resp.data.success) {
                    toast(resp.data.message)
                }
            })
            .catch(err => {
                console.log(err);
                toast(err.response.data.message);
            })
    }
    return { balanceAdd, balance, setBalance }
}
export default UseUserHook;