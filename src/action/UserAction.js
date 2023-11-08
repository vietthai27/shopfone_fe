import axios from "axios"
import { getUserNameByTokenError, getUserNameByTokenSuccess, loginError, loginSuccess, signupUserError, signupUserSuccess } from "../constant/UserConstant"

export const getUserNameByToken = (token) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("http://localhost:8080/getUsernameByToken?token=" + token)
            return dispatch({ type: getUserNameByTokenSuccess, data: res.data })
        } catch (e) {
            return dispatch({ type: getUserNameByTokenError, data: e })
        }
    }
}

export const signupUser = (userInput) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("http://localhost:8080/userSignup", userInput)
            return dispatch({ type: signupUserSuccess, data: res.data })
        } catch (e) {
            return dispatch({ type: signupUserError, data: e })
        }
    }
}

export const loginUser = (userInput) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("http://localhost:8080/login", userInput)
            localStorage.setItem("userToken", res.data)
            return dispatch({ type: loginSuccess, data: userInput.username })
        } catch (e) {
            return dispatch({ type: loginError, data: e.response.data.message })
        }
    }
}