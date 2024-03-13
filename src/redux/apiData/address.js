import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoints } from "../endPoints";
import Cookies from "js-cookie";


export const getAddress = createAsyncThunk("all address ", async (args, { rejectWithValue }) => {
    try {
        let token = Cookies.get('token')
        const response = await axios.post(`${apiEndPoints.GET_ALL_ADDRESS}?token=${token}`)
        console.log("address data", response)

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const addNewAddress = createAsyncThunk("add address ", async (args, { rejectWithValue }) => {
    try {
        let token = Cookies.get('token')
        // console.log("yes", args)
        const response = await axios.post(`${apiEndPoints.ADD_NEW_ADDRESS}?token=${token}`, args)

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const editAddress = createAsyncThunk("edit address ", async (args, { rejectWithValue }) => {
    try {
        let token = Cookies.get('token')
        // console.log("yes", args)
        const response = await axios.post(`${apiEndPoints.EDIT_ADDRESS}?token=${token}`, args)

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const deleteAddress = createAsyncThunk("delete address ", async (args, { rejectWithValue }) => {
    try {
        let token = Cookies.get('token')
        // console.log("yes", args)
        const response = await axios.post(`${apiEndPoints.DELTE_ADDRESS}?token=${token}`, args)

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})