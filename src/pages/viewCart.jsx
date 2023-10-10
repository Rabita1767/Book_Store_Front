import UseProductHook from "../hooks/useProductHooks"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ViewCart = () => {
    const navigate = useNavigate();
    const { viewCartInfo, cartItem, setCartItem, myCartAdd, addCart, setAddCart, myCart } = UseProductHook();
    useEffect(() => {
        viewCartInfo();
    }, [])
    useEffect(() => {
        console.log(cartItem.products)
    }, [cartItem])
    const navigateCheckOut = () => {
        navigate("/checkout")
    }
    const increaseQuantity = (id) => {
        const data =
        {
            "products":
                [
                    {
                        "p_id": id,
                        "quantity": 1
                    }
                ]
        }
        console.log("clickeds")
        // myCartAdd(data);
        myCart(data);
        useEffect(() => {
            console.log(addCart);
        }, [addCart])
        useEffect(() => {
            viewCartInfo()
        }, [addCart])
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
                                <td>
                                    <button onClick={() => increaseQuantity(product.p_id)}>+</button>
                                    {/* <button onClick={() => decreaseQuantity(product.p_id)}>-</button> */}
                                </td>
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