import axios from "axios"
import { firstPage, host, pageSize, phoneModel, port, sortDirection } from '../constant/Ulti'
import {
    getPhoneModelDataSuccess,
    addPhoneModelSuccess,
    getPhoneModelDetailSuccess,
    editPhoneModleSuccess,
    deletePhoneModelSuccess,
    getPhoneModelDataError,
    deletePhoneModelError,
    changeSearch,
    addPhoneModelError
} from "../constant/PhoneModelConstant"


export const getPhoneModelData = (pageNum, search) => {
    return async (dispatch) => {
        try {
            if (search === null || search === '') {
                const res = await axios.get(host + port + phoneModel + "/get/getPhoneModel?pageNum=" + (pageNum - 1) + "&pageSize=" + pageSize + "&sortBy=phone_price&sortDirection=" + sortDirection)
                const phoneModelData = res.data.content
                const pagingData = res.data
                return dispatch({ type: getPhoneModelDataSuccess, data: { modelData: phoneModelData, pagingData: pagingData } })
            } else {
                const res = await axios.get(host + port + phoneModel + "/get/searchPhoneModel?pageNum=" + (pageNum - 1) + "&pageSize=" + pageSize + "&search=" + search + "&sortBy=phone_price&sortDirection=" + sortDirection)
                const phoneModelData = res.data.content
                const pagingData = res.data
                return dispatch({ type: getPhoneModelDataSuccess, data: { modelData: phoneModelData, pagingData: pagingData } })
            }
        } catch (e) {
            return dispatch({ type: getPhoneModelDataError, data: e })
        }
    }
}

export const getPhoneModelInfo = (phoneModelId) => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:8080/phoneModel/get/getPhoneModelById/" + phoneModelId)
        const phoneModelInfo = res.data
        return dispatch({ type: getPhoneModelDetailSuccess, data: phoneModelInfo })
    }
}

export const addPhoneModel = (dataPhoneModel, lineId) => {
    return async (dispatch) => {
        try {
            await axios.post("http://localhost:8080/phoneModel/transaction/addPhoneModel?phoneLineId=" + lineId, dataPhoneModel, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("userToken")}`
                }
            })
            const res = await axios.get("http://localhost:8080/phoneModel/get/getPhoneModel?pageNum=" + firstPage + "&pageSize=" + pageSize + "&sortBy=phonePrice&sortDirection=" + sortDirection)
            const phoneModelData = res.data.content
            return dispatch({ type: addPhoneModelSuccess, data: phoneModelData })
        } catch (e) {
            return dispatch({ type: addPhoneModelError })
        }

    }
}

export const editPhoneModel = (phoneId, dataPhoneModel, newLineId) => {
    return async (dispatch) => {
        try {
            await axios({
                method: 'put',
                url: 'http://localhost:8080/phoneModel/transaction/editPhoneModel?phoneId=' + phoneId + '&newLineId=' + newLineId,
                data: dataPhoneModel,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("userToken")
                }
            });
            const res = await axios.get("http://localhost:8080/phoneModel/get/getPhoneModel?pageNum=" + firstPage + "&pageSize=" + pageSize + "&sortBy=phonePrice&sortDirection=" + sortDirection)
            const phoneModelData = res.data.content
            return dispatch({ type: editPhoneModleSuccess, data: phoneModelData })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deletePhoneModel = (phoneId) => {
    return async (dispatch) => {
        try {
            await axios({
                method: 'delete',
                url: 'http://localhost:8080/phoneModel/deletePhoneModel/' + phoneId,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("userToken")
                }
            });
            const res = await axios.get("http://localhost:8080/phoneModel/getPhoneModel?pageNum=" + firstPage + "&pageSize=" + pageSize + "&sortBy=phonePrice&sortDirection=" + sortDirection)
            const phoneModelData = res.data.content
            return dispatch({ type: deletePhoneModelSuccess, data: phoneModelData })
        } catch (e) {
            return dispatch({ type: deletePhoneModelError })
        }

    }
}

export const changeSearchWord = (search) => {
    return (dispatch) => {
        dispatch({ type: changeSearch, data: search })
    }
}