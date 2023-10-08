import { useEffect, useState } from "react";
import axiosInstance from "../util/AxiosInstance";
const UseProductHook = () => {
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
    return { fetchData, setProduct, product, getBookData, setIsbn, isbn, searchFunc, setSearchData, searchData, setNameFilter, nameFilter, filterData, fetchProductById, setParam, param, addBookFunc, addBook, delBook, setDeleteBook, deleteBook, getBookInfo, upBook, getBookInfo, updatedBook, setUpdatedBookInfo, updatedBookInfo };

}
export default UseProductHook;