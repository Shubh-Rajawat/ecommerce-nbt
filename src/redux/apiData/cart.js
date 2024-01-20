import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoints } from "../endPoints";
import Cookies from "js-cookie";


export const addToCart = createAsyncThunk("add to cart", async (args, { rejectWithValue }) => {
    try {
        let token = Cookies.get('token')

        const response = await axios.post(`${apiEndPoints.ADD_TO_CART}?token=${token}`, args)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getCart = createAsyncThunk("get cart", async (args, { rejectWithValue }) => {
    try {
        let token = Cookies.get('token')

        const response = await axios.post(`${apiEndPoints.GET_CART}?token=${token}`, args)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const deleteCartItem = createAsyncThunk("delete cart item", async (args, { rejectWithValue }) => {
    try {
        let token = Cookies.get('token')
        const response = await axios.post(`${apiEndPoints.DELETE_ITEM_FROM_CART}?token=${token}`, args)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})