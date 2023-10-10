import UseProductHook from "../hooks/useProductHooks"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ViewCart = () => {
    const navigate = useNavigate();
    const { viewCartInfo, cartItem, setCartItem } = UseProductHook();
    useEffect(() => {
        viewCartInfo();
    }, [])
    useEffect(() => {
        console.log(cartItem.products)
    }, [cartItem])
    const navigateCheckOut = () => {
        navigate("/checkout")
    }
    return (
        <div>
            <h2>Your Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItem.products &&
                        cartItem.products.map((product) => (
                            <tr key={product.p_id}>
                                <td>{product.p_id}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total Price:</td>
                        <td>{cartItem.totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={navigateCheckOut}>Proceed to Checkout</button>
        </div>
    );

}
export default ViewCart