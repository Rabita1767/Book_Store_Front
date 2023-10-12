import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/ui/button";
import UseProductHook from "../../hooks/useProductHooks";

import "./product.css";
import Header from "../../components/Header/header";
const Product = () => {
    const [count, setCount] = useState(0);
    const [prev, setPrev] = useState(0);
    const [next, setNext] = useState(1)
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    const { setProduct, fetchData, product, getBookData, isbn, setIsbn, loading, deleteBook, delBook, myCart, fetchNext, setAddCart, addCart, nextPagination, setNextPagination } = UseProductHook();

    useEffect(() => {
        fetchNext(next)
    }, [])
    useEffect(() => {
        console.log(nextPagination)
    }, [nextPagination])
    useEffect(() => {
        console.log(delBook)
    }, [product])
    const handleUpdate = (id, e) => {
        navigate(`/update/${id}`)

    }
    const handleDelete = (id) => {
        deleteBook(id);
    }

    useEffect(() => {
        console.log(addCart)
    }, [addCart])
    const handleCart = (id) => {
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
        setCount(count + 1);
        console.log("clickeds")
        myCart(data);
    }
    const handleNext = () => {
        setNext(next + 1)
        setPrev(next + 1)
        fetchNext(next + 1)
    }
    const handlePrev = () => {
        setPrev(prev - 1)
        setNext(prev - 1)
        fetchNext(prev - 1);
    }

    return (
        <>
            <Header value={count} />
            <div className="product-grid">
                {nextPagination && nextPagination.map((item) => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Category: {item.category}</p>
                        <p>Price: ${item.price}</p>
                        <div className="button-container">
                            {/* <Button className={role == 1 ? "show" : "hidden"} myFunc={() => handleUpdate(item._id)} text="Edit" /> */}
                            <button className={role == 1 ? "show" : "hidden"} onClick={() => handleUpdate(item._id)}>Edit</button>
                            {/* <Button myFunc={() => navigate(`/product/${item.isbn}`)} text="Details" /> */}
                            <button onClick={() => navigate(`/product/${item._id}`)}>Details</button>
                            <button className={role == 1 ? "show" : "hidden"} onClick={() => handleDelete(item._id)}>Delete</button>
                            <button className={role == 1 ? "hidden" : "show"} onClick={() => handleCart(item._id)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {/* <button onClick={() => handlePrev()}>Prev</button> */}
                <button disabled={prev <= 0 ? true : false} onClick={() => handlePrev()} className={prev <= 0 ? "active" : "disabled"}>Prev</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
        </>
    );


}
export default Product;