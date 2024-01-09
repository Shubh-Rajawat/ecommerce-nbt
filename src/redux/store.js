import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/toggleNavSlice";
import userReducer from "./actions/userAuth";


const store = configureStore({
    reducer: {
        nav: navReducer,
        user: userReducer
    }
})
export default store