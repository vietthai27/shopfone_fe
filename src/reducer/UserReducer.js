import { toast } from "react-toastify"
import { getUserNameByTokenError, getUserNameByTokenSuccess, loginError, loginSuccess, signupUserError, signupUserSuccess } from "../constant/UserConstant"

const initialState = {
    tokenState: false,
    username: "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {       
        case getUserNameByTokenSuccess:
            state.tokenState = true
            state.username = action.data
            break
        case getUserNameByTokenError:
            state.tokenState = false
            break
        case signupUserSuccess:
            toast(action.data)
            break
        case signupUserError:
            toast.error(signupUserError)
            break
        case loginSuccess:            
            toast.success("Đăng nhập thành công")
            state.tokenState = true
            state.username = action.data
            break
        case loginError:
            toast.error(action.data)    
            break   
        default:
            break
    }
    return { ...state }

}

export default userReducer