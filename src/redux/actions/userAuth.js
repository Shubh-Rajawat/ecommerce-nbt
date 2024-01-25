import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, sendOtp, userLogin, userSignup, userUpdate, verifyOtp } from "../apiData/user";

const initialState = { userData: null, isLoading: false, isError: null, empty: false, otpEmail: null, otpResp: false, profileData: null, isUserUpdated: null }
const userSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setFieldsEmpty: (state, action) => {
            state.empty = action.payload;
            state.isError = null;
        },
        setOtpEmail: (state, action) => {
            state.otpEmail = action.payload
        },
        removeCookie: (state, action) => {
            state.userData = null
        },


    },
    extraReducers: (builder) => {
        // -----------------user signup-------------------------
        builder.addCase(userSignup.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.userData = action.payload;
        })
        builder.addCase(userSignup.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
            state.userData = null;
        })
        builder.addCase(userSignup.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;

        })
        // ------------------user login ------------------------
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.userData = action.payload
            state.isLoading = false;
            state.isError = null;
        })
        builder.addCase(userLogin.pending, (state, action) => {
            // state.userData=action.payload
            state.isLoading = true;
            state.isError = null;
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            // state.userData=action.payload
            state.isLoading = false;
            state.isError = action.payload;
        })
        // ------------------send OTP ------------------------
        builder.addCase(sendOtp.fulfilled, (state, action) => {
            state.userData = action.payload
            state.isLoading = false;
            state.isError = null;
        })
        builder.addCase(sendOtp.pending, (state, action) => {
            // state.userData=action.payload
            state.isLoading = true;
            state.isError = null;
        })
        builder.addCase(sendOtp.rejected, (state, action) => {
            // state.userData=action.payload
            state.isLoading = false;
            state.isError = action.payload;
        })
        // ------------------verify OTP------------------------
        builder.addCase(verifyOtp.fulfilled, (state, action) => {
            state.otpResp = action.payload
            state.isLoading = false;
            state.isError = null;
            console.log("otp resp sukhi", action.payload);
        })
        builder.addCase(verifyOtp.pending, (state, action) => {
            state.otpResp = null
            state.isLoading = true;
            state.isError = null;
        })
        builder.addCase(verifyOtp.rejected, (state, action) => {
            state.otpResp = null
            state.isLoading = false;
            state.isError = action.payload;
        })
        // ------------------Fetch User ------------------------
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.profileData = action.payload.data
            state.isLoading = false;
            state.isError = null;
        })
        builder.addCase(fetchUser.pending, (state, action) => {
            state.profileData = null;
            state.isLoading = true;
            state.isError = null;

        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.profileData = null;
            state.isLoading = false;
            state.isError = action.payload;

        })
        // ------------------user update ------------------------
        builder.addCase(userUpdate.fulfilled, (state, action) => {
            state.isUserUpdated = action.payload
            state.isLoading = false;
            state.isError = null;
        })
        builder.addCase(userUpdate.pending, (state, action) => {
            // state.isUserUpdated=action.payload
            state.isLoading = true;
            state.isError = null;
        })
        builder.addCase(userUpdate.rejected, (state, action) => {
            // state.isUserUpdated=action.payload
            state.isLoading = false;
            state.isError = action.payload;
        })
    }

})

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer
