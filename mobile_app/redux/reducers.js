import {SET_USER_SEX, SET_USER_AGE, SET_PHONE_NUMBER} from "./actions";

const initialState = {
    sex: "female",
    age: "",
    phone_number: ""
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHONE_NUMBER:
            return {...state, phone_number: action.payload}
        case SET_USER_AGE:
            return {...state, age: action.payload}
        case SET_USER_SEX:
            return {...state, sex: action.payload}
        default:
            return state
    }
}

export default userReducer