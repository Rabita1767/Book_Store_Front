import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/ui/button";
import UseProductHook from "../../hooks/useProductHooks";
import "./product.css";
import Header from "../../components/Header/header";
const Product = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const { setProduct, fetchData, product, getBookData, isbn, setIsbn, loading, deleteBook, delBook, myCart, setAddCart, addCart } = UseProductHook();
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
        console.log("clicked")
        myCart(data);
    }
    return (
        <>
            <Header value={count} />
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
                        <button onClick={() => handleCart(item._id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    );


}
export default Product;