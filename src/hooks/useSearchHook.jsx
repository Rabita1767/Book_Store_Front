import axiosInstance from "../util/AxiosInstance";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UseSearchHook = () => {
    const dropDown = async (dropDownValue) => {
        try {
            const resp = await axiosInstance.get(`/auth/getAll?category=${dropDownValue}`)
            return resp;
        } catch (error) {
            console.log(error);
            toast(error.response.data.message)
        }
    }
    return { dropDown };
}
export default UseSearchHook;