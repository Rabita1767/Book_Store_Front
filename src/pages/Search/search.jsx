import Header from "../../components/Header/header";
// import "./home.scss"
import { useState, useEffect } from "react";
import UseSearchHook from "../../hooks/useSearchHook";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";
import { FaSearch } from 'react-icons/fa';
const Search = () => {
    const [optionValue, setOptionValue] = useState("");
    const [debounceValue, setDebounceValue] = useState("");
    const [result, setResult] = useState([]);
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    const { dropDown, dropDownPrice, dropDownRating, debounceData } = UseSearchHook();
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
    const handleSortPrice = (e) => {
        setOptionValue(e.target.value);
        const fetchPriceSortedData = async () => {
            try {
                const response = await dropDownPrice(e.target.value);
                console.log(response.data);
                setResult(response.data);

            } catch (error) {
                console.log(error);

            }
        }
        fetchPriceSortedData();
    }
    const handleSortRating = (e) => {
        setOptionValue(e.target.value);
        const fetchRatingSortedData = async () => {
            try {
                const response = await dropDownRating(e.target.value);
                console.log(response.data);
                setResult(response.data);

            } catch (error) {
                console.log(error);

            }
        }
        fetchRatingSortedData();
    }
    console.log(result);
    const handleDebounceChange = (e) => {
        setDebounceValue(e.target.value);
        const fetchData = async () => {
            try {
                const response = await debounceData(e.target.value);
                console.log(response.data);
                setResult(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }



    return (
        <>
            <Header />
            <div className="flexDiv">
                <div>
                    <InputField
                        name="search"
                        onChange={handleDebounceChange}
                    />
                </div><FaSearch />
                <div>
                    <select value={optionValue} onChange={handleChange}>
                        <option value="" disabled>Category</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Classic Literature">Classic Literature</option>
                        <option value="Biography">Biography</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                    </select>
                </div>
                <div>
                    <select value={optionValue} onChange={handleSortPrice}>
                        <option value="" disabled>Sort By Price</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div>
                    <select value={optionValue} onChange={handleSortRating}>
                        <option value="" disabled>Rating</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>

            <div className="mid">
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
            </div>


        </>
    )
}
export default Search;