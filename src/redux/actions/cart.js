import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteCartItem, getCart } from "../apiData/cart";


const initialState = { productData: null, isLoading: false, isError: null, cartData: null, deleteResp: null }
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // -----------------add to cart-------------------------
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.productData = action.payload;

        })
        builder.addCase(addToCart.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.productData = null;
        })
        builder.addCase(addToCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;

        })
        // ------------------------get cart details----------------------------
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cartData = action.payload;
            state.isError = null;
            state.isLoading = false;
        })
        builder.addCase(getCart.pending, (state, action) => {

            state.isLoading = true;
            state.isError = null;
        })
        builder.addCase(getCart.rejected, (state, action) => {
            state.cartData = null;
            state.isError = action.payload;
            state.isLoading = false;
        })
        // ------------------------delete cart item----------------------------
        builder.addCase(deleteCartItem.fulfilled, (state, action) => {
            state.cartData = action.payload;
            state.isError = null;
            state.isLoading = false;
        })
        builder.addCase(deleteCartItem.pending, (state, action) => {

            state.isLoading = true;
            state.isError = null;
        })
        builder.addCase(deleteCartItem.rejected, (state, action) => {
            state.cartData = null;
            state.isError = action.payload;
            state.isLoading = false;
        })


    }

})

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer
