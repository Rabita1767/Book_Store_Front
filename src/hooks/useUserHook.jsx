import { useState } from "react";
import axiosInstance from "../util/AxiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const UseUserHook = () => {
    const navigate = useNavigate();
    const [balance, setBalance] = useState(null);
    const [reviewInfo, setReviewInfo] = useState("");
    const [transaction, setTransaction] = useState("");
    // const [allReview, setAllReview] = useState([]);
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
                    navigate("/")
                }
            })
            .catch(err => {
                console.log(err);
                toast(err.response.data.message);
            })
    }
    const addReview = (formData, id) => {
        axiosInstance.post("/user/addReview", formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => {
                console.log(resp.data);
                setReviewInfo(resp.data)
                if (resp.data.success) {
                    toast(resp.data.message)
                    navigate("/")
                }
            })
            .catch(err => {
                console.log(err);
                toast(err.response.data.message);
            })

    }
    const getAllTransaction = async () => {
        try {
            const resp = await axiosInstance.get("/user/viewTransaction")
            console.log(resp);
            return resp;

        } catch (error) {
            console.log(error);
            toast(error.response.data.message);
        }
    }
    // const findProductReview = (productId) => {
    //     axiosInstance.get(`/user/getProductReview?bookId=${productId}`)
    //         .then(resp => {
    //             console.log(resp.data.data);
    //             setAllReview(resp.data.data)
    //         })
    //         .catch(err => { console.log(err) })

    // }
    const fetchProductReviewById = (formData, productId) => {
        axiosInstance.patch(`/user/updateReview`, formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => {
                console.log(resp.data)
                if (resp.data.success) {
                    toast(resp.data.message)
                    navigate("/")
                }
            })
            .catch(err => { console.log(err) })
    }
    const userProfile = async () => {
        try {
            const resp = await axiosInstance.get("/user/viewProfile")
            console.log(resp.data);
            return resp;

        } catch (error) {
            console.log(error);
            toast(error.response.data.message);
        }
    }
    const fetchReview = async (productId) => {
        try {
            const resp = await axiosInstance.get(`user/getProductReview?bookId=${productId}`)
            console.log(resp);
            return resp;

        } catch (error) {
            console.log(error);
            toast(error.response.data.message);
        }

    }
    const getBookById = async (productId) => {
        try {
            const resp = await axiosInstance.get(`/book/getBookById?id=${productId}`)
            console.log(resp);
            return resp;

        } catch (error) {
            console.log(error);
            toast(error.response.data.message);
        }
    }
    const addRev = async (formData) => {
        try {
            const resp = axiosInstance.post("/user/addReview", formData)
            console.log(resp);
            return resp;

        } catch (error) {
            console.log(error);
            toast(error.response.data.message);
        }
    }
    const updateRev = async (formData) => {
        try {
            const resp = axiosInstance.patch("/user/updateReview", formData)
            console.log(resp);
            return resp;

        } catch (error) {
            console.log(error);
            toast(error.response.data.message);
        }
    }
    return { balanceAdd, balance, setBalance, addReview, reviewInfo, setReviewInfo, getAllTransaction, setTransaction, transaction, fetchProductReviewById, userProfile, fetchReview, getBookById, addRev, updateRev }
}
export default UseUserHook;