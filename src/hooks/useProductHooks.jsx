import { useEffect, useState } from "react";
import axiosInstance from "../util/AxiosInstance";
const UseProductHook = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [nameFilter, setNameFilter] = useState([]);
    const [isbn, setIsbn] = useState("");
    const [param, setParam] = useState([]);
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
    return { fetchData, setProduct, product, getBookData, setIsbn, isbn, searchFunc, setSearchData, searchData, setNameFilter, nameFilter, filterData, fetchProductById, setParam, param };

}
export default UseProductHook;