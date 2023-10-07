import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/ui/button";
import UseProductHook from "../../hooks/useProductHooks";
import "./product.css";
const Product = () => {
    const navigate = useNavigate();
    const { setProduct, fetchData, product, getBookData, isbn, setIsbn, loading } = UseProductHook();
    useEffect(() => {
        fetchData();
    }, [])
    const handleUpdate = (isbn, e) => {
        e.preventDefault();
        getBookData(isbn);

    }
    // const navigation = () => {
    //     navigate(`/product/${item.isbn}`)
    // }
    return (
        <>
            <div className="product-grid">
                {product && product.map((item) => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Category: {item.category}</p>
                        <p>Price: ${item.price}</p>
                        <Button myFunc={() => handleUpdate(item.isbn)} text="Edit" />
                        {/* <button onClick={() => handleUpdate(item.isbn)}>Edit</button> */}
                        <Button myFunc={() => navigate(`/product/${item.isbn}`)} text="Details" />
                        {/* <button onClick={() => navigate(`/product/${item.isbn}`)}>Details</button> */}
                    </div>
                ))}
            </div>
        </>
    );


}
export default Product;