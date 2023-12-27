import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/toggleNavSlice";


const store = configureStore({
    reducer: {
        nav: navReducer
    }
})
export default store