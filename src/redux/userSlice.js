import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    email: "",
    token: "",
    role: ""
}

const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        addUserInfo: (state, action) => {
            state.userName = action.payload.data.result.name;
            state.email = action.payload.data.result.email;
            state.token = action.payload.data.token;
            state.role = action.payload.data.role;
        },
        clearUserInfo: (state) => {
            // Reset the state to its initial values
            state.userName = "";
            state.email = "";
            state.token = "";
            state.role = "";
        }
    }
});

export const { addUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
