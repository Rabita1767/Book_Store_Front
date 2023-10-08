import { useEffect } from "react";
import UseProductHook from "../hooks/useProductHooks";
const ViewCart = () => {
    const token = localStorage.getItem("token");
    const { setAddCart, addCart } = UseProductHook();
    useEffect(() => {
        console.log(addCart)
    }, [addCart])

}
export default ViewCart;