import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/ui/button";
import UseProductHook from "../../hooks/useProductHooks";
import "./product.css";
import Header from "../../components/Header/header";
const Product = () => {
    const navigate = useNavigate();
    const { setProduct, fetchData, product, getBookData, isbn, setIsbn, loading, deleteBook, delBook } = UseProductHook();
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        console.log(delBook)
    }, [product])
    const handleUpdate = (id, e) => {
        // getBookData(id);
        navigate(`/product/${id}`)

    }
    // const navigation = () => {
    //     navigate(`/product/${item.isbn}`)
    // }
    const handleDelete = (id) => {
        deleteBook(id);
    }
    return (
        <>
            <Header />
            <div className="product-grid">
                {product && product.map((item) => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Category: {item.category}</p>
                        <p>Price: ${item.price}</p>
                        <Button myFunc={() => handleUpdate(item._id)} text="Edit" />
                        {/* <button onClick={() => handleUpdate(item.isbn)}>Edit</button> */}
                        {/* <Button myFunc={() => navigate(`/product/${item.isbn}`)} text="Details" /> */}
                        {/* <button onClick={() => navigate(`/product/${item.isbn}`)}>Details</button> */}
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );


}
export default Product;