import { useState } from "react";
import axiosInstance from "../util/AxiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UseCartHook = () => {
    const token = localStorage.getItem("token");
    const addItemByIncrease = async (formData) => {
        try {
            const resp = await axiosInstance.post("/cart/addToCart", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(resp.data);
            return resp.data;
        } catch (err) {
            console.log(err);
            toast(err.response.data.message);
        }
    }
    const addItemByDecrease = async (formData) => {
        try {
            console.log(formData)
            const resp = await axiosInstance.post("/cart/removeFromCart", formData);
            console.log(resp.data);
            return resp.data;
        } catch (err) {
            console.log(err);
            toast(err.response.data.message);
        }
    }
    const viewCartItem = async () => {
        try {
            const resp = await axiosInstance.get("/cart/viewCart",
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            console.log(resp.data)
            return resp.data;
        } catch (error) {
            console.log(err);
            toast(err.response.data.message);
        }
    }
    return { addItemByIncrease, addItemByDecrease, viewCartItem }

}
export default UseCartHook;