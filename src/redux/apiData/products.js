import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoints } from "../endPoints";

export const allProducts = createAsyncThunk("get all products", async (args, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${apiEndPoints.GET_ALL_PRODUCTS}`, args);
        // console.log("response.data", response?.data)
        return response?.data
    } catch (error) {
        return rejectWithValue(error.respons.data)
    }
})
export const singleProductDetail = createAsyncThunk("get single product", async (args, { rejectWithValue }) => {
    try {
        // console.log("argusss", args)
        const response = await axios.post(`${apiEndPoints.GET_SINGLE_PRODUCT}`, args);
        // console.log("response.data", response?.data)
        return response?.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})