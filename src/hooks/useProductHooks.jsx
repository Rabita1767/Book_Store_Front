import { useEffect, useState } from "react";
import axiosInstance from "../util/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const UseProductHook = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [nameFilter, setNameFilter] = useState([]);
    const [isbn, setIsbn] = useState("");
    const [param, setParam] = useState([]);
    const [addBook, setAddBook] = useState("");
    const [delBook, setDeleteBook] = useState("");
    const [upBook, setUpBook] = useState("");
    const [updatedBookInfo, setUpdatedBookInfo] = useState("");
    const [addCart, setAddCart] = useState("")
    const [viewCart, setViewCart] = useState([])
    const [nextPagination, setNextPagination] = useState([])
    const [upUser, setUpUser] = useState("")
    const fetchData = () => {
        axiosInstance.get("/auth/getAll")
            .then(resp => {
                console.log(resp.data.data);
                setProduct(resp.data.data)
                // setLoading(false);
            })
            .catch(err => { console.log(err) })

    }
    const getBookData = (isbn) => {
        axiosInstance.get(`/auth/getAll?isbn=${isbn}`)
            .then(resp => {
                console.log(resp.data.data);
                setIsbn(resp.data.data)
            })
            .catch(err => { console.log(err) })

    }
    const searchFunc = (search) => {
        axiosInstance.get(`/auth/getAll?search=${search}`)
            .then(resp => {
                console.log(resp.data.data);
                setSearchData(resp.data.data)
            })
            .catch(err => { console.log(err) })

    }
    const filterData = (name) => {
        axiosInstance.get(`/auth/getAll?name=${name}`)
            .then(resp => {
                console.log(resp.data.data);
                setNameFilter(resp.data.data)
            })
            .catch(err => { console.log(err) })
    }
    const fetchProductById = (productId) => {
        axiosInstance.get(`/auth/getAll?isbn=${productId}`)
            .then(resp => {
                console.log(resp.data.data);
                setParam(resp.data.data)
            })
            .catch(err => { console.log(err) })

    }
    const addBookFunc = (formData) => {
        axiosInstance.post("/book/addBook", formData)
            .then(resp => {
                console.log(resp.data);
                setAddBook(resp.data);
            })
            .catch(err => { console.log(err) })
    }
    useEffect(() => {
        console.log(addBook);
    }, [addBook])
    const deleteBook = (id) => {
        axiosInstance.delete(`/book/deleteBook/${id}`)
            .then(resp => {
                console.log(resp.data);
                setDeleteBook(resp.data);
                setProduct(prevProduct => prevProduct.filter(item => item._id !== id));
            })
            .catch(err => {
                console.log(err);
            })
    }
    const getBookInfo = (id) => {
        axiosInstance.get(`/auth/getAll?id=${id}`)
            .then(resp => {
                console.log(resp.data)
                setUpBook(resp.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const updatedBook = (formData, id) => {
        axiosInstance.patch(`/book/updateBook?id=${id}`, formData)
            .then(resp => {
                console.log(resp.data)
                setUpdatedBookInfo(resp.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const myCart = (formData) => {
        axiosInstance.post("/cart/addToCart", formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => {
                console.log(resp.data);
                setAddCart(resp.data);
                // navigate("/viewCart");
            })
            .catch(err => {
                console.log(err);
            })
    }
    const CartItem = () => {
        axiosInstance.get("/cart/viewCart",
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => {
                console.log(resp.data)
                setViewCart(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const fetchNext = (pCount) => {
        axiosInstance.get(`/auth/getAll?page=${pCount}&limit=${5}`)
            .then(resp => {
                console.log(resp.data.data)
                setNextPagination(resp.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const updateUser = (formData) => {
        axiosInstance.patch("/book/updateUser", formData)
            .then(resp => {
                console.log(resp.data)
                setUpUser(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return { fetchData, setProduct, product, getBookData, setIsbn, isbn, searchFunc, setSearchData, searchData, setNameFilter, nameFilter, filterData, fetchProductById, setParam, param, addBookFunc, addBook, delBook, setDeleteBook, deleteBook, getBookInfo, upBook, getBookInfo, updatedBook, setUpdatedBookInfo, updatedBookInfo, myCart, setAddCart, addCart, CartItem, viewCart, setViewCart, fetchNext, nextPagination, setNextPagination, updateUser, setUpUser, upUser };

}
export default UseProductHook;