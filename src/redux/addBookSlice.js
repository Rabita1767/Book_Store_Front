import { createSlice } from "@reduxjs/toolkit";
const initialState =
{
    image: " ",
    isbn: " ",
    name: " ",
    price: " ",
    category: " ",
    stock: " ",
    author: " ",
    publisher: " ",
    discountPercentage: " ",
    discountStart: " ",
    discountEnd: " "
}
const bookSlice = createSlice({
    name: " addBook",
    initialState,
    reducers:
    {
        addBookInfo: (state, action) =>
        (
            state.image = action.payload.image,
            state.isbn = action.payload.isbn,
            state.name = action.payload.name,
            state.price = action.payload.price,
            state.category = action.payload.category,
            state.stock = action.payload.stock,
            state.author = action.payload.author,
            state.publisher = action.payload.publisher,
            state.discountPercentage = action.payload.discountPercentage,
            state.discountStart = action.payload.discountStart,
            state.discountEnd = action.payload.discountEnd
        )
    }
})
export const { addBookInfo } = bookSlice.actions
export default bookSlice.reducer