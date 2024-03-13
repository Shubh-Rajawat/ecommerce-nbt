import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoints } from "../endPoints";
import Cookies from "js-cookie";

export const userSignup = createAsyncThunk("signup", async (args, { rejectWithValue }) => {
    try {
        // console.log("asas", args)
        const response = await axios.post(`${apiEndPoints.SIGN_UP}`, args)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const userLogin = createAsyncThunk("login", async (args, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${apiEndPoints.LOGIN}`, args)
        // console.log("args", response.data.token)
        Cookies.set('token', response.data.token)

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const sendOtp = createAsyncThunk("send otp", async (args, { rejectWithValue }) => {
    // console.log("args", args)
    try {
        const response = await axios.post(`${apiEndPoints.SEND_OTP}`, { email: args })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const verifyOtp = createAsyncThunk("verify otp", async (args, { rejectWithValue }) => {
    // console.log("args", args)
    try {
        const response = await axios.post(`${apiEndPoints.VERIFY_OTP}`, args)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// updating user profile-----
export const userUpdate = createAsyncThunk("update", async (args, { rejectWithValue }) => {
    try {
        let cook = Cookies.get('token')
        const response = await axios.post(`${apiEndPoints.UPDATE_USER}?token=${cook}`, args)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
// fetching user profile-----
export const fetchUser = createAsyncThunk("fetch", async (args, { rejectWithValue }) => {
    try {
        let cook = Cookies.get('token')

        const response = await axios.post(`${apiEndPoints.FETCH_USER}?token=${cook}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})