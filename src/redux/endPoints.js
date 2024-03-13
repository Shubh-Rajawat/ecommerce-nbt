// export const baseUrl = "http://192.168.1.23:8080"
// export const baseUrl = "http://localhost:8080"
export const baseUrl = "https://93af-2401-4900-1c7b-ff2b-4bb-94bc-ca6f-89b1.ngrok-free.app"

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
    UPDATE_CART_ITEM_QTY: `${baseUrl}/api/addtocart/quantity-update`,
    FETCH_USER: `${baseUrl}/api/users/get-singel-user`,
    UPDATE_USER: `${baseUrl}/api/users/user-update`,
    PLACE_ORDER: `${baseUrl}/api/orders/order-now`,
    ADD_NEW_ADDRESS: `${baseUrl}/api/users/create-address`,
    GET_ALL_ADDRESS: `${baseUrl}/api/users/get-address`,
    EDIT_ADDRESS: `${baseUrl}/api/users/update-address`,
    DELTE_ADDRESS: `${baseUrl}/api/users/delete-address`,

}   