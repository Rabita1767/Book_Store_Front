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
    const [allReview, setAllReview] = useState([])
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
                    // navigate("/")
                }
            })
            .catch(err => {
                console.log(err);
                toast(err.response.data.message);
            })

    }
    const getAllTransaction = () => {
        axiosInstance.get("/user/viewTransaction",
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => {
                console.log(resp.data.data)
                setTransaction(resp.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const findProductReview = (productId) => {
        axiosInstance.get(`/user/getProductReview?bookId=${productId}`)
            .then(resp => {
                console.log(resp.data.data);
                setAllReview(resp.data.data)
            })
            .catch(err => { console.log(err) })

    }
    const fetchProductReviewById = (formData, productId) => {
        axiosInstance.patch(`/user/updateReview`, formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => { console.log(resp.data) })
            .catch(err => { console.log(err) })
    }
    return { balanceAdd, balance, setBalance, addReview, reviewInfo, setReviewInfo, getAllTransaction, setTransaction, transaction, findProductReview, setAllReview, allReview, fetchProductReviewById }
}
export default UseUserHook;