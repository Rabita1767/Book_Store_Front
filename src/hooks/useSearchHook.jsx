import axiosInstance from "../util/AxiosInstance";
const UseSearchHook = () => {
    const dropDown = async (dropDownValue) => {
        try {
            const resp = await axiosInstance.get(`/auth/getAll?category=${dropDownValue}`)
            return resp;
        } catch (error) {
            console.log(error);
        }
    }
    return { dropDown };
}
export default UseSearchHook;