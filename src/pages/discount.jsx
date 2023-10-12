import { useState, useEffect } from "react";
import UseProductHook from "../hooks/useProductHooks";
import axiosInstance from "../util/AxiosInstance";
import Header from "../components/Header/header";
const Discount = () => {
    const { discountBook, fetchAllBook } = UseProductHook();
    const [discount, setDiscount] = useState("");
    const [book, setBook] = useState("")
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await discountBook();
                console.log(response.data);
                setDiscount(response.data.data);

            } catch (error) {
                console.log(error)

            }
        }
        fetchBook();
    }, [])
    console.log(discount)
    useEffect(() => {
        const allBook = async () => {
            try {
                const response = await fetchAllBook();
                console.log(response.data.data);
                setBook(response.data.data)

            } catch (error) {
                console.log(error)
            }
        }
        allBook();

    }, [])
    return (
        <>
            <Header />
            <div>
                <h3>Discounted Products</h3>
                <div className="product-grid">
                    {discount && discount.map((item) => (
                        <div key={item.id} className="product-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Category: {item.category}</p>
                            <p>Price: ${item.price}</p>
                            <p>Discount Percentage: {item.discountPercentage} %</p>

                        </div>
                    ))}
                </div>
            </div>
            {/* <div>
                <h3>Regular Products</h3>
                <div className="product-grid">
                    {array && array.map((item) => (
                        <div key={item.id} className="product-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Category: {item.category}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    )



}
export default Discount;