import { useState } from "react";
import axiosInstance from "../util/AxiosInstance";
const UseCartHook = () => {
    const token = localStorage.getItem("token");
    // const addItemByIncrease = (formData) => {
    //     axiosInstance.post("/cart/addToCart", formData,
    //         {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         .then(resp => {
    //             console.log(resp.data)
    //             return resp.data;
    //         })
    //         .catch(err => { console.log(err) })
    // }
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
        }
    }
    const addItemByDecrease = async (formData) => {
        try {
            const resp = await axiosInstance.delete("/cart/removeFromCart", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(resp.data);
            return resp.data;
        } catch (err) {
            console.log(err);
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
        }
    }
    return { addItemByIncrease, addItemByDecrease, viewCartItem }

}
export default UseCartHook;