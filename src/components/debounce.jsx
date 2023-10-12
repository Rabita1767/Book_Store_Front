import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import UseProductHook from '../hooks/useProductHooks';
const Debounce = () => {
    const [search, setSearch] = useState("");
    const { searchFunc, setSearchData, searchData } = UseProductHook();
    // useEffect(() => {
    //     console.log("search: ", searchData);
    //     const timeOutFunc = setTimeout(() => {
    //         searchFunc(search);
    //     }, 3000);

    //     return () => clearTimeout(timeOutFunc);
    // }, [search]);
    return (
        <>
            <div className="input-group">
                <input type="text" onChange={(e) => setSearch(e.target.value)} class="form-control py-2" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text -3" id="basic-addon2"><FaSearch className="fs-6" /></span>
            </div>
            <div>
                {searchData && searchData.map((item) =>
                    <h1 key={item._id}>{item.name}</h1>
                )}
            </div>
        </>
    )

}
export default Debounce;