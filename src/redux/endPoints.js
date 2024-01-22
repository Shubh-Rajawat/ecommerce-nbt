// const baseUrl = "http://192.168.29.43:8080"
const baseUrl = "http://localhost:8080"

export const apiEndPoints = {
    SIGN_UP: `${baseUrl}/api/users/user-signup`,
    LOGIN: `${baseUrl}/api/users/user-login`,
    SEND_OTP: `${baseUrl}/api/users/send-otp`,
    VERIFY_OTP: `${baseUrl}/api/users/verify-otp`,
    GET_ALL_PRODUCTS: `${baseUrl}/api/products/get-all-product`,
    GET_SINGLE_PRODUCT: `${baseUrl}/api/products/get-singel-product`,
    ADD_TO_CART: `${baseUrl}/api/addtocart/add-to-cart`,
    GET_CART: `${baseUrl}/api/addtocart/get-all-cart`,
    DELETE_ITEM_FROM_CART: `${baseUrl}/api/addtocart/remove-to-cart`,
}