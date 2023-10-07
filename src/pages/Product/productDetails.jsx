import { useParams } from "react-router-dom"
import UseProductHook from "../../hooks/useProductHooks";
const ProductDetails = () => {
    const { productId } = useParams();
    const { fetchProductById, setParam, param } = UseProductHook();
    fetchProductById(productId);
    return (
        <>
            <div className="product-grid">
                {param && param.map((item) => (
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
export default ProductDetails