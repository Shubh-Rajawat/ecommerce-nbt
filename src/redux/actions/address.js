import { createSlice } from "@reduxjs/toolkit";
import { addNewAddress, deleteAddress, editAddress, getAddress } from "../apiData/address";


const initialState = {
    addressData: null,
    isLoading: false,
    isError: null,
    addAddressData: null,
    updateAddress: null,
    deleteAddressStatus: null,
    OpenAddAddresModal: false

};
const addressSlice = createSlice({
    name: "address",
    initialState: initialState,
    reducers: {
        setOpenAddAddresModal: (state) => {
            state.OpenAddAddresModal = !state.OpenAddAddresModal;
        }
    },
    extraReducers: (builder) => {
        // -----------------get address-------------------------
        builder.addCase(getAddress.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.addressData = action.payload;
        });
        builder.addCase(getAddress.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.addressData = null;
        });
        builder.addCase(getAddress.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        });
        // -----------------add new address-------------------------
        builder.addCase(addNewAddress.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.addAddressData = action.payload;
        });
        builder.addCase(addNewAddress.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.addAddressData = null;
        });
        builder.addCase(addNewAddress.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        });
        // -----------------edit address-------------------------
        builder.addCase(editAddress.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.updateAddress = action.payload;
        });
        builder.addCase(editAddress.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.updateAddress = null;
        });
        builder.addCase(editAddress.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        });
        // -----------------delete address-------------------------
        builder.addCase(deleteAddress.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.deleteAddressStatus = action.payload;
        });
        builder.addCase(deleteAddress.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.deleteAddressStatus = null;
        });
        builder.addCase(deleteAddress.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
            state.deleteAddressStatus = null;

        });


    },
});

export const addressActions = addressSlice.actions;
const addressReducer = addressSlice.reducer;
export default addressReducer;