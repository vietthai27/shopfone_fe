import { toast } from "react-toastify"
import { getPhoneLineError, getPhoneLineSuccsess } from "../constant/PhoneLineConstant"


const initialState = {
    allPhoneLine: [],
}

const phoneLineReducer = (state = initialState, action) => {
    switch (action.type) {
        case getPhoneLineSuccsess:
            state.allPhoneLine = action.data
            break
        case getPhoneLineError:
            toast.error("Lỗi kết nối đến cơ sở dữ liệu !!!")
            break
        default:
            break
    }
    return { ...state }

}

export default phoneLineReducer