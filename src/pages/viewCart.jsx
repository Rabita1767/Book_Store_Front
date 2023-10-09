import { useEffect } from "react";
import UseProductHook from "../hooks/useProductHooks";
const ViewCart = () => {
    const { CartItem, viewCart, setViewCart } = UseProductHook()
    useEffect(() => {
        CartItem()
    }, [])
    useEffect(() => {
        console.log(viewCart)
    }, [viewCart])
    return (
        // <div>
        //     <h1>Rabita</h1>
        //     <div>
        //         {viewCart.data && viewCart.data.products ? (
        //             viewCart.data.products.map((item) => (
        //                 <h1>{item.p_id}</h1>
        //             ))
        //         ) : (
        //             <p>Loading...</p>
        //         )}
        //     </div>
        // </div>
        <>
            <h1>Cart Item</h1>
        </>
    )


}
export default ViewCart;