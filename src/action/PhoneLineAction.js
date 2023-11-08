import axios from "axios"
import { getPhoneLineSuccsess } from "../constant/PhoneLineConstant"

export const getPhoneLineData = () => {
    return async (dispatch) => {    
        const res = await axios.get("http://localhost:8080/phoneLine/getAllPhoneLine")
        const phoneLineData = res.data
        return dispatch({ type: getPhoneLineSuccsess, data:  phoneLineData })
    }
}