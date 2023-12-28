import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice( {
    name: "toggle nav",
    initialState: { showNav: false },
    reducers: {
        toggleNav: ( state ) => {
            console.log( state.showNav )
            state.showNav = !state.showNav
        }
    }
} )

export const navAction = navSlice.actions
const navReducer = navSlice.reducer
export default navReducer