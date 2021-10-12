import {SET_USER_SEX, SET_USER_AGE, SET_PHONE_NUMBER, SET_USER_NAME} from "./actions";
import {SET_NOTIFICATIONS_CONFIG} from "./actions";

const initialState = {
    sex: "female",
    age: "",
    phone_number: "",
    notifications_config: {
        notificationsPerDay: 1,
        hours: [12]
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHONE_NUMBER:
            return {...state, phone_number: action.payload}
        case SET_USER_AGE:
            return {...state, age: action.payload}
        case SET_USER_SEX:
            return {...state, sex: action.payload}
        case SET_USER_NAME:
            return {...state, user_name: action.payload}
        case SET_NOTIFICATIONS_CONFIG:
            return {...state, notifications_config: action.payload}
        default:
            return state
    }
}

export default userReducer