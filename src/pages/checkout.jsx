import { useEffect } from "react";
import Header from "../components/Header/header";
import UseProductHook from "../hooks/useProductHooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Checkout = () => {
    const navigate = useNavigate();
    const { checkout, setCheckOut, handleCheckout } = UseProductHook();
    useEffect(() => {
        handleCheckout();
    }, []);
    useEffect(() => {
        console.log(checkout)
    }, [checkout])

    return (
        <>
            <Header />

        </>


    )

}
export default Checkout;