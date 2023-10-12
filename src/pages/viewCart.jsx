import UseProductHook from "../hooks/useProductHooks"
import UseCartHook from "../hooks/useCartHook";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ViewCart = () => {
    const navigate = useNavigate();
    const [cnt, setCnt] = useState(0);
    const [cartData, setCartData] = useState("");
    const { addItemByIncrease, addItemByDecrease, viewCartItem } = UseCartHook();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await viewCartItem();
                console.log(data);
                setCartData(data.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    const navigateCheckOut = () => {
        navigate("/checkout")
    }
    const increaseQuantity = async (p_id) => {
        setCnt(cnt + 1);
        const data =
        {
            "products":
                [
                    {
                        "p_id": p_id,
                        "quantity": 1
                    }
                ]
        }
        const response = await addItemByIncrease(data)
        console.log(response);
        toast(response.message);
        if (response.success) {
            const viewResponse = await viewCartItem();
            console.log(viewResponse);
            setCartData(viewResponse.data);
            toast(viewResponse.message);
        }

    }
    console.log(cartData)

    const decreaseQuantity = async (p_id) => {
        setCnt(cnt + 1);
        const data =
        {
            "products":
                [
                    {
                        "p_id": p_id,
                        "quantity": 1
                    }
                ]
        }
        console.log(data)
        const response = await addItemByDecrease(data)
        console.log(response);
        toast(response.message);
        if (response.success) {
            const viewResponse = await viewCartItem();
            console.log(viewResponse.data);
            setCartData(viewResponse.data);
        }

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
                    {cartData.products &&
                        cartData.products.map((product) => (
                            <tr key={product.p_id}>
                                <td>{product.p_id}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button onClick={() => increaseQuantity(product.p_id)}>+</button>
                                    <button onClick={() => decreaseQuantity(product.p_id)}>-</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total Price:</td>
                        <td>{cartData.totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={navigateCheckOut}>Proceed to Checkout</button>
        </div>
    );

}
export default ViewCart
