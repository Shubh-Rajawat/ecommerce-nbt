import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "toggle nav",
    initialState: { showNav: false, showLoginSignup: false, userComp: "login", otpTab: false, forgotPasswordTab: false },
    reducers: {
        toggleNav: (state) => {
            // console.log(state.showNav)
            state.showNav = !state.showNav
        },
        toggleLoginSignup: (state) => {
            state.showLoginSignup = !state.showLoginSignup
        },
        setShowUserTab: (state, action) => {
            state.otpTab = false
            state.forgotPasswordTab = false

            state.userComp = action.payload
        },
        setShowOtpTab: (state) => {
            state.userComp = false
            state.forgotPasswordTab = false
            state.otpTab = !state.otpTab
        },
        setShowForgotPasswordTab: (state) => {
            state.otpTab = false
            state.userComp = false
            state.forgotPasswordTab = !state.forgotPasswordTab
        },
    }
})
export const navAction = navSlice.actions
const navReducer = navSlice.reducer
export default navReducer