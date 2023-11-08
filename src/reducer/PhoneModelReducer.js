import {
    addPhoneModelSuccess,
    getPhoneModelDataError,
    getPhoneModelDataSuccess,
    getPhoneModelDetailError,
    getPhoneModelDetailSuccess,
    editPhoneModleError,
    editPhoneModleSuccess,
    deletePhoneModelSuccess,
    deletePhoneModelError,
    changeSearch,
    addPhoneModelError
} from "../constant/PhoneModelConstant"
import { toast } from "react-toastify"

const initialState = {
    allPhoneModel: [],
    pagingData: {},
    phoneModelInfo: {},
    toPage: 0,
    errorLoadingData: false,
    search: ''
}

const phoneModelReducer = (state = initialState, action) => {
    switch (action.type) {
        case getPhoneModelDataSuccess:
            state.allPhoneModel = action.data.modelData
            state.pagingData = action.data.pagingData
            break
        case getPhoneModelDataError:
            state.errorLoadingData = true
            break
        case addPhoneModelSuccess:
            toast.success('Thêm thành công !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            state.allPhoneModel = action.data
            break
        case addPhoneModelError:
            toast.error("Lỗi lưu dữ liệu !!")
            break
        case getPhoneModelDetailSuccess:
            state.phoneModelInfo = action.data
            break
        case getPhoneModelDetailError:
            toast.error("Đã xảy ra lỗi !!!")
            break
        case editPhoneModleSuccess:
            toast.success('Sửa thành công !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "light",
            });
            state.allPhoneModel = action.data
            break
        case editPhoneModleError:
            toast.error("Đã xảy ra lỗi !!!")
            break
        case deletePhoneModelSuccess:
            toast.success('Xóa thành công !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "light",
            });
            state.allPhoneModel = action.data
            break
        case deletePhoneModelError:
            toast.error("Đã xảy ra lỗi !!!")
            break
        case changeSearch:
            state.search = action.data
            break
        default:
            break
    }
    return { ...state }
}

export default phoneModelReducer