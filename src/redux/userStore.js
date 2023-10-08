import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import bookReducer from "./addBookSlice"
const store = configureStore({
    reducer:
    {
        userInfo: userReducer,
        addBook: bookReducer,
    }
})
export default store;