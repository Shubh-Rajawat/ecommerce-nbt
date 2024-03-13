import { createSlice } from "@reduxjs/toolkit";
import { placeOrder } from "../apiData/order";

const initialState = {
    orderData: null,
    isLoading: false,
    isError: null,

};
const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        HandleOrderDetails: (state, action) => {
            state.orderData = action.payload;
        }
    },
    extraReducers: (builder) => {
        // -----------------place order-------------------------
        builder.addCase(placeOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.orderData = action.payload;
        });
        builder.addCase(placeOrder.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.orderData = null;
        });
        builder.addCase(placeOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        });


    },
});

export const orderActions = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;