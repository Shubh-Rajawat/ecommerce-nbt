import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteCartItem, getCart, updateCartItemQty } from "../apiData/cart";

const initialState = {
    productData: null,
    isLoading: false,
    isError: null,
    cartData: null,
    deleteResp: null,
    updateQtyresp: null,
    isUpdateLoading: false,
    isUpdateError: null,
};
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        setDeleteResp: (state) => {
            state.deleteResp = null;
            state.updateQtyresp = null
        },
    },
    extraReducers: (builder) => {
        // -----------------add to cart-------------------------
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.productData = action.payload;
        });
        builder.addCase(addToCart.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.productData = null;
        });
        builder.addCase(addToCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        });
        // ------------------------get cart details----------------------------
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cartData = action.payload;
            state.isError = null;
            state.isLoading = false;
        });
        builder.addCase(getCart.pending, (state, action) => {
            state.cartData = null;
            state.isLoading = true;
            state.isError = null;
        });
        builder.addCase(getCart.rejected, (state, action) => {
            state.cartData = null;
            state.isError = action.payload;
            state.isLoading = false;
        });
        // ------------------------delete cart item----------------------------
        builder.addCase(deleteCartItem.fulfilled, (state, action) => {
            state.deleteResp = action.payload;
            state.isError = null;
            state.isLoading = false;
            // console.log("sukhi", action.payload)
        });
        builder.addCase(deleteCartItem.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
        });
        builder.addCase(deleteCartItem.rejected, (state, action) => {
            state.deleteResp = null;
            state.isError = action.payload;
            state.isLoading = false;
        });
        // ------------------------update cart item quantity----------------------------
        builder.addCase(updateCartItemQty.fulfilled, (state, action) => {
            state.updateQtyresp = action.payload;
            state.isUpdateError = null;
            state.isUpdateLoading = false;
            // console.log("sukhi", action.payload)
        });
        builder.addCase(updateCartItemQty.pending, (state, action) => {
            state.isUpdateLoading = true;
            state.isUpdateError = null;
        });
        builder.addCase(updateCartItemQty.rejected, (state, action) => {
            state.updateQtyresp = null;
            state.isUpdateError = action.payload;
            state.isUpdateLoading = false;
        });
    },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
