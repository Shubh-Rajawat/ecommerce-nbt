import { createSlice } from "@reduxjs/toolkit";
import { allProducts, singleProductDetail } from "../apiData/products";

const initialState = { productData: null, isLoading: false, isError: null, singleProductData: null }
const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // -----------------fetch all products-------------------------
        builder.addCase(allProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.productData = action.payload;

        })
        builder.addCase(allProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.productData = null;
        })
        builder.addCase(allProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;

        })
        // -----------------get single produt-------------------------
        builder.addCase(singleProductDetail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.singleProductData = action.payload.data;

        })
        builder.addCase(singleProductDetail.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.singleProductData = null;
        })
        builder.addCase(singleProductDetail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;



        })

    }

})

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer
