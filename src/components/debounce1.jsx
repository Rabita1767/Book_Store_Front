import InputField from "./inputField";
import { useState } from "react";
import UseSearchHook from "../hooks/useSearchHook";
const Debounce1 = ({ onResults }) => {
    const [debounceValue, setDebounceValue] = useState("");
    const [debounceResult, setDebounceResult] = useState([]);
    const { debounceData } = UseSearchHook();
    const role = localStorage.getItem("role");
    const handleChange = (e) => {
        setDebounceValue(e.target.value);
        const fetchData = async () => {
            try {
                const response = await debounceData(e.target.value);
                console.log(response.data);
                setDebounceResult(response.data);
                onResults(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }
    console.log(debounceValue);
    return (
        <>
            <InputField
                name="search"
                onChange={handleChange}
            />
            <div>
                <div className="product-grid">
                    {debounceResult.data && debounceResult.data.map((item) => (
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
export default Debounce1;