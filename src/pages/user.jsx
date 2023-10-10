import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../util/AxiosInstance";
import Header from "../components/Header/header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./user.scss"
const User = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([])
    const [deleteUser, setDeleteUser] = useState("")
    useEffect(() => {
        axiosInstance.get(`/book/getAllUser`)
            .then(resp => {
                console.log(resp.data.data)
                setUserInfo(resp.data.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    const handleUpdate = (id) => {
        navigate(`/updateUser/${id}`)
    }
    const handleDelete = (id) => {
        axiosInstance.delete(`book/deleteUser?id=${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => {
                console.log(resp.data)
                setDeleteUser(resp.data)
                setUserInfo(prevUser => prevUser.filter(user => user._id !== id));
                toast("User has been deleted")
            })
            .catch(err => {
                console.log(err);
                toast("Request Unsuccessful!")
            })

    }
    return (
        <>
            <Header />
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
            <ToastContainer />
        </>
    );
}
export default User;