import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUserInfo } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import "./headerAdmin.scss"
function HeaderAdmin() {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(clearUserInfo());
        navigate("/");
    }

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li className={role === 1 ? "showNav" : "hiddenNav"} ><Link to="/user">Users</Link></li>
                <li className={role === 1 ? "display" : "hidden"}><Link to="/book">Books</Link></li>
                <li className={role === 1 ? "display" : "hidden"}><Link to="/addBook">Add New Book</Link></li>
                <li className={role === 1 ? "display" : "hidden"}><Link to="/addDiscount">Add Discount</Link></li>
                <li className={role === 1 ? "display" : "hidden"}><Link to="/updateDiscount">Update Discount</Link></li>
                <button className={token ? "hidden" : "show"} onClick={() => navigate("/login")}>Login</button>
                <button><Link className="text-white px-5" to="/signup">Signup</Link></button>
                <button className={token ? "show" : "hidden"} onClick={() => handleLogout()}>Logout</button>
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Search"

                />
                <button onClick={() => alert(`Search for: ${searchTerm}`)}>Search</button>
            </div>
        </nav>
    );
}

export default HeaderAdmin;
