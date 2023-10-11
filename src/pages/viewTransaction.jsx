import styles from './viewTransaction.scss';
import { useEffect } from "react";
import UseUserHook from "../hooks/useUserHook";
import Header from '../components/Header/header';
const ViewTransaction = () => {
    const { getAllTransaction, setTransaction, transaction } = UseUserHook();
    useEffect(() => {
        getAllTransaction();
    }, [])
    useEffect(() => {
        console.log(transaction)
    }, [transaction])
    // return (
    //     <>
    //         <div className="product-grid">
    //             {transaction.products && transaction.products.map((item) => (
    //                 <div key={item.id} className="product-item">
    //                     <h3>{item.p_id.name}</h3>
    //                     <p>Price: {item.p_id.price}</p>
    //                     {/* <p>Price: ${item.price}</p> */}
    //                 </div>
    //             ))}
    //             <h3>{transaction.totalPrice}</h3>
    //         </div>
    //     </>
    // )
    return (
        <div>
            <Header />
            <table>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction && transaction.products && transaction.products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.p_id.name}</td>
                            <td>{product.p_id.price}</td>
                            <td>{product.p_id.author}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Price: {transaction && transaction.totalPrice}</p>
        </div>
    );


}
export default ViewTransaction;