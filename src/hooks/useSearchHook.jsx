import axiosInstance from "../util/AxiosInstance";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UseSearchHook = () => {
    const dropDown = async (dropDownValue) => {
        try {
            if (dropDownValue == "") {
                const resp = await axiosInstance.get(`/auth/getAll`)
                return resp;
            }
            else {
                const resp = await axiosInstance.get(`/auth/getAll?category=${dropDownValue}`)
                return resp;
            }
        } catch (error) {
            console.log(error);
            toast(error.response.data.message)
        }
    }
    const dropDownPrice = async (sortValue) => {
        try {
            const resp = await axiosInstance.get(`/auth/getAll?sortParam=price&sortPrice=${sortValue}`)
            return resp;
        } catch (error) {
            console.log(error);
            toast(error.response.data.message)
        }

    }
    const dropDownRating = async (sortValue) => {
        try {
            const resp = await axiosInstance.get(`/auth/getAll?sortParam=rating&sortPrice=${sortValue}`)
            return resp;
        } catch (error) {
            console.log(error);
            toast(error.response.data.message)
        }

    }
    const debounceData = async (searchData) => {
        try {
            const resp = axiosInstance.get(`/auth/getAll?search=${searchData}`)
            return resp;
        } catch (error) {
            console.log(error)
            toast(error.response.data.message)
        }
    }
    return { dropDown, dropDownPrice, dropDownRating, debounceData };
}
export default UseSearchHook;