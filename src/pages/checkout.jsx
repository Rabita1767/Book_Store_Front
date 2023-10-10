import { useEffect } from "react";
import Header from "../components/Header/header";
import UseProductHook from "../hooks/useProductHooks";
const Checkout = () => {
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
            <div>
                <h3>{checkout.message}</h3>
            </div>
        </>


    )

}
export default Checkout;