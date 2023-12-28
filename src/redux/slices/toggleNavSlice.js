import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "toggle nav",
    initialState: { showNav: false, showLoginSignup: false },
    reducers: {
        toggleNav: (state) => {
            state.showNav = !state.showNav
        },
        toggleLoginSignup: (state) => {
            state.showLoginSignup = !state.showLoginSignup
        },
    }
})

export const navAction = navSlice.actions
const navReducer = navSlice.reducer
export default navReducer