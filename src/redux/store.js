import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/toggleNavSlice";
import userReducer from "./actions/userAuth";
import productReducer from "./actions/products";
import cartReducer from "./actions/cart";
import orderReducer from "./actions/order";
import addressReducer from "./actions/address";


const store = configureStore({
    reducer: {
        nav: navReducer,
        user: userReducer,
        product: productReducer,
        cart: cartReducer,
        order: orderReducer,
        address: addressReducer
    }
})
export default store