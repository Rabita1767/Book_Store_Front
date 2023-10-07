import { useState } from "react";
import UseProductHook from "../../hooks/useProductHooks";
import Button from "../../components/ui/button";
import "../Product/product.css"
const Filter = () => {
    const { filterData, setNameFilter, nameFilter } = UseProductHook();
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        filterData(name);
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" label="name" onChange={(e) => setName(e.target.value)}></input>
                    {/* <button type="submit">Filter</button> */}
                    <Button type="submit" text="Filter" />
                </form>
            </div>
            <div className="product-grid">
                {nameFilter.length > 0 && nameFilter.map((item) => (
                    <div key={item.id} className="product-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Category: {item.category}</p>
                        <p>Price: ${item.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Filter;