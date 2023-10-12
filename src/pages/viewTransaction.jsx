import styles from './viewTransaction.scss';
import { useEffect, useState } from "react";
import UseUserHook from "../hooks/useUserHook";
import Header from '../components/Header/header';
const ViewTransaction = () => {
    const [transaction, setTransaction] = useState("");
    const { getAllTransaction } = UseUserHook();
    useEffect(() => {
        const fetchTrasaction = async () => {
            try {
                const response = await getAllTransaction();
                console.log(response.data.data);
                setTransaction(response.data.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchTrasaction();

    }, [])
    return (
        <div>
            <Header />
            <div className="tbl">
                <table border="2px">
                    <thead className="t1">
                        <tr>
                            <th>Book Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody className="t1">
                        {transaction && transaction.products && transaction.products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.p_id.name}</td>
                                <td>{product.p_id.price}</td>
                                <td>{product.p_id.author}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        ))}
                        <tr className='tPrice'>Total Price: {transaction && transaction.totalPrice}</tr>
                    </tbody>
                </table>
            </div>
        </div>
    );


}
export default ViewTransaction;