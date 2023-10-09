import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../util/AxiosInstance";
import "./user.scss"
const User = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([])
    axiosInstance.get(`/book/getAllUser`)
        .then(resp => {
            console.log(resp.data.data)
            setUserInfo(resp.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    const handleUpdate = (id) => {
        navigate(`/updateUser/${id}`)
    }
    return (
        <div className="user-container">
            <h1>User Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Balance</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.balance}</td>
                            <td>
                                <button onClick={() => handleUpdate(user._id)}>Update</button>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default User;