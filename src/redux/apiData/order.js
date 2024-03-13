import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { apiEndPoints } from "../endPoints";
import axios from "axios";


export const placeOrder = createAsyncThunk("place order", async (args, { rejectWithValue }) => {
    try {
        let token = Cookies.get('token')
        const response = await axios.post(`${apiEndPoints.PLACE_ORDER}?token=${token}`, args)

        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data)

    }
})