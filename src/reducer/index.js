import { combineReducers } from 'redux'
import phoneModelReducer from './PhoneModelReducer'
import phoneLineReducer from './PhoneLineReducer'
import userReducer from './UserReducer'

const rootReducer = combineReducers({
    phoneModelReducer,phoneLineReducer,userReducer
})

export default rootReducer