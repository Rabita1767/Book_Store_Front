import { NavLink, Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UseProductHook from "../../hooks/useProductHooks";
import Debounce from "../debounce";
import { useDispatch } from "react-redux";
import { clearUserInfo } from "../../redux/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import store from "../../redux/userStore";
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


    // return (
    //     <>
    //         <header className="header-top-strip py-3">
    //             <div className="container-xxl">
    //                 <div className="row">
    //                     <div className="col-6">
    //                         <p className="text-white mb-0">Free Shipping Over 500BDT & Free Returns</p>
    //                     </div>
    //                     <div className="col-6">
    //                         <p className="text-end text-white mb-0">Hotline:<a href="tel:+8801765456378">+8801676345645</a></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </header>
    //         <header className="header-upper py-3">
    //             <div className="container-xxl">
    //                 <div className="row align-items-center">
    //                     <div className="col-2">
    //                         <h1>
    //                             <Link className="text-white"></Link>
    //                         </h1>
    //                     </div>
    //                     <div className="col-5">
    //                         <Debounce />
    //                         {/* <div className="input-group">
    //                             <input type="text" onChange={(e) => setSearch(e.target.value)} class="form-control py-2" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
    //                             <span className="input-group-text -3" id="basic-addon2"><FaSearch className="fs-6" /></span>
    //                         </div> */}
    //                     </div>
    //                     <div className="col-5">
    //                         <div className="header-upper-links d-flex align-items-center justify-content-between">
    //                             <div>
    //                                 <Link>
    //                                     <p className="mb-0">
    //                                         {/* <button>Login</button>
    //                                         <button>Registration</button> */}
    //                                     </p>
    //                                 </Link>
    //                             </div>
    //                             <div>
    //                                 <Link>
    //                                     <p className="mb-0">
    //                                         <button className={token ? "hidden" : "show"}><NavLink className="text-white px-5" to="/login">Login</NavLink></button>
    //                                         <button><NavLink className="text-white px-5" to="/signup">Signup</NavLink></button>
    //                                         <button className={token ? "show" : "hidden"} onClick={() => handleLogout()}>Logout</button>
    //                                         {/* <button onClick={() => { handleNavigate() }}>Cart{value} </button> */}
    //                                         <Link to={"/viewCart"} >Cart {value}</Link>
    //                                     </p>
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </header>
    //         <header className="header-bottom py-3">
    //             <div className="container-xxl">
    //                 <div className="row">
    //                     <div className="col-12">
    //                         <div className="menu-bottom d-flex align-items-center">
    //                             <div className="menu-links">
    //                                 <div className="navbar">
    //                                     <NavLink className={role == 1 ? "show" : "hidden"} to="/">Home</NavLink>
    //                                     <NavLink className="nav" to="/about">About</NavLink>
    //                                     <NavLink className="nav" to="/product">Products</NavLink>
    //                                     <NavLink className="nav" to="/filter">Filter</NavLink>
    //                                     <NavLink className="nav" to="/getAllUser">User List</NavLink>
    //                                     <NavLink className="nav" to="/addDiscount">Add Discount</NavLink>
    //                                     {/* <NavLink className="text-white px-5" to="/updateUser">Update User</NavLink> */}
    //                                 </div>
    //                             </div>

    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </header>
    //         <header>
    //             {/* {searchData && searchData.map((item) => {
    //                 <h1>{item.name}</h1>
    //             })} */}
    //         </header>
    //     </>
    // )
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li className={role == 1 ? "show" : "hidden"} ><Link to="/getAllUser">Users</Link></li>
                <li className={role == 1 ? "show" : "hidden"}><Link to="/product">Books</Link></li>
                <li className={role == 1 ? "show" : "hidden"}><Link to="/addBook">Add New Book</Link></li>
                <li className={role == 1 ? "show" : "hidden"}><Link to="/addDiscount">Add Discount</Link></li>
                <li className={role == 1 ? "show" : "hidden"}><Link to="/updateDiscount">Update Discount</Link></li>
                <li className={role == 1 ? "hidden" : "show"}><Link to="/product">Available Books</Link></li>
                <li className={role == 1 ? "hidden" : "show"}><Link to="/addBalanceUser">Add Balance</Link></li>
                <li className={role == 1 ? "hidden" : "show"}><Link to="/viewTransaction">View Transaction</Link></li>
                <button className={token ? "hidden" : "show"} onClick={() => navigate("/login")}>Login</button>
                <button><Link className="text-white px-5" to="/signup">Signup</Link></button>
                <button className={token ? "show" : "hidden"} onClick={() => handleLogout()}>Logout</button>
                <button className={role == 1 ? "hidden" : "show"} onClick={() => navigate("/viewCart")}>Cart{value} </button>
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
export default Header;