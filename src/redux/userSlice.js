// import { createSlice } from "@reduxjs/toolkit";
// import store from "./userStore";
// const initialState =
// {
//     userName: "",
//     email: "",
//     token: "",
//     role: ""
// }
// const userSlice = createSlice(
//     {
//         name: "userInfo",
//         initialState,
//         reducers:
//         {
//             addUserInfo: (state, action) => {
//                 state.userName = action.payload.name,
//                     state.email = action.payload.email,
//                     state.token = action.payload.token,
//                     state.role = action.payload.role
//             }
//         }
//     }
// )
// export const { addUserInfo } = userSlice.actions;
// export default userSlice.reducer;
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
            state.userName = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.role = action.payload.role;
        }
    }
});

export const { addUserInfo } = userSlice.actions;
export default userSlice.reducer;
