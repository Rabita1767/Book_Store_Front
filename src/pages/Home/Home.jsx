import Header from "../../components/Header/header";
import "./home.scss"
import { useState, useEffect } from "react";
import UseSearchHook from "../../hooks/useSearchHook";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const [optionValue, setOptionValue] = useState("");
    const [result, setResult] = useState([]);
    const role = localStorage.getItem("role");
    const { dropDown } = UseSearchHook();
    const handleChange = (e) => {
        setOptionValue(e.target.value);
        const fetchData = async () => {
            try {
                const response = await dropDown(e.target.value);
                console.log(response.data);
                if (!response.data || response.data.data.length === 0) {
                    toast('No data found');
                } else {
                    setResult(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }
    console.log(result);

    return (
        <>
            <Header />
            <select value={optionValue} onChange={handleChange}>
                <option value="Fiction">Fiction</option>
                <option value="Classic Literature">Classic Literature</option>
                <option value="Biography">Biography</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
            </select>

            <div className="product-grid">
                {result.data && result.data.map((item) => (
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

        </>
    )
}
export default Home;