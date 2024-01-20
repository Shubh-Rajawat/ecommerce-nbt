import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/toggleNavSlice";
import userReducer from "./actions/userAuth";
import productReducer from "./actions/products";
import cartReducer from "./actions/cart";


const store = configureStore({
    reducer: {
        nav: navReducer,
        user: userReducer,
        product: productReducer,
        cart: cartReducer,
    }
})
export default store