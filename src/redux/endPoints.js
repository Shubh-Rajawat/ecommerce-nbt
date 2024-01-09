const baseUrl = "http://192.168.29.43:8080"

export const apiEndPoints = {
    SIGN_UP: `${baseUrl}/api/users/user-signup`,
    LOGIN: `${baseUrl}/api/users/user-login`,
    SEND_OTP: `${baseUrl}/api/users/send-otp`,
    VERIFY_OTP: `${baseUrl}/api/users/verify-otp`,
}