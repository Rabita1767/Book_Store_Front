import { NavLink, Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UseProductHook from "../../hooks/useProductHooks";
import { useDispatch } from "react-redux";
import { clearUserInfo } from "../../redux/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./header.scss"
const Header = ({ value }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    // const role = useSelector((state) =>
    //     state.userInfo.role
    // )
    console.log(role);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.userInfo;

    }
    )
    console.log(data);
    const [search, setSearch] = useState("");
    const { searchFunc, setSearchData, searchData } = UseProductHook();
    useEffect(() => {
        console.log("search: ", searchData);
        const timeOutFunc = setTimeout(() => {
            searchFunc(search);
        }, 3000);

        return () => clearTimeout(timeOutFunc);
    }, [search]);
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("id")
        dispatch(clearUserInfo());
        navigate("/login");
    }
    const handleNavigate = () => {
        console.log("clicked navigation");
        // console.log(navigate)
        navigate("/not-exist", { replace: true })
    }


    return (
        <div className="header">
            <nav className="navbar">
                <ul>
                    <a href="#" className="logo"><FaBook />bookly</a>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/discount">Discounted Products</Link></li>
                    <li className={role == 1 ? "show" : "hidden"} ><Link to="/getAllUser">Users</Link></li>
                    <li className={role == 1 ? "show" : "hidden"}><Link to="/product">Books</Link></li>
                    <li className={role == 1 ? "show" : "hidden"}><Link to="/addBook">Add New Book</Link></li>
                    <li className={role == 1 ? "show" : "hidden"}><Link to="/addDiscount">Add Discount</Link></li>
                    <li className={role == 1 ? "show" : "hidden"}><Link to="/updateDiscount">Update Discount</Link></li>
                    <li className={role == 1 ? "hidden" : "show"}><Link to="/product">Available Books</Link></li>
                    <li className={role == 1 ? "hidden" : "show"}><Link to="/addBalanceUser">Add Balance</Link></li>
                    <li className={role == 1 ? "hidden" : "show"}><Link to="/viewTransaction">View Transaction</Link></li>
                    <li className={role == 1 ? "hidden" : "show"}><Link to="/dashboard">User Profile</Link></li>
                    <button className={token ? "hidden" : "show"} onClick={() => navigate("/login")}>Login</button>
                    <button className={token ? "hidden" : "show"} onClick={() => navigate("/signup")}>Signup</button>
                    {/* <button><Link className="text-white px-5" to="/signup">Signup</Link></button> */}
                    <button className={token ? "show" : "hidden"} onClick={() => handleLogout()}>Logout</button>
                    <button className={role == 1 ? "hidden" : "show"} onClick={() => navigate("/viewCart")}><FaShoppingCart style={{ color: '#e0a951', fontSize: '50px' }} />{value} </button>
                    {/* <button className={token ? "show" : "hidden"}><FaShoppingCart style={{ color: 'blue', fontSize: '50px' }} /></button> */}
                    <button onClick={() => { navigate('/search') }}><FaSearch style={{ color: '#e0a951', fontSize: '50px' }} /></button>
                </ul>
            </nav>
        </div>

    );


}
export default Header;