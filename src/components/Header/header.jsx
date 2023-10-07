import { NavLink, Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from "react";
import UseProductHook from "../../hooks/useProductHooks";
import Debounce from "../debounce";
const Header = () => {
    const [search, setSearch] = useState("");
    const { searchFunc, setSearchData, searchData } = UseProductHook();
    useEffect(() => {
        console.log("search: ", searchData);
        const timeOutFunc = setTimeout(() => {
            searchFunc(search);
        }, 3000);

        return () => clearTimeout(timeOutFunc);
    }, [search]);
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">Free Shipping Over 500BDT & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">Hotline:<a href="tel:+8801765456378">+8801676345645</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h1>
                                <Link className="text-white"></Link>
                            </h1>
                        </div>
                        <div className="col-5">
                            <Debounce />
                            {/* <div className="input-group">
                                <input type="text" onChange={(e) => setSearch(e.target.value)} class="form-control py-2" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text -3" id="basic-addon2"><FaSearch className="fs-6" /></span>
                            </div> */}
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link>
                                        <p className="mb-0">
                                            {/* <button>Login</button>
                                            <button>Registration</button> */}
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link>
                                        <p className="mb-0">
                                            <button><NavLink className="text-white px-5" to="/login">Login</NavLink></button>
                                            <button><NavLink className="text-white px-5" to="/signup">Signup</NavLink></button>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center">
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-35">
                                        <NavLink className="text-white px-5" to="/">Home</NavLink>
                                        <NavLink className="text-white px-5" to="/about">About</NavLink>
                                        <NavLink className="text-white px-5" to="/product">Products</NavLink>
                                        <NavLink className="text-white px-5" to="/filter">Filter</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <header>
                {/* {searchData && searchData.map((item) => {
                    <h1>{item.name}</h1>
                })} */}
            </header>
        </>
    )

}
export default Header;