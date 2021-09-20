import {SET_USER_SEX, SET_USER_AGE} from "./actions";

const initialState = {
    sex: "female",
    age: "0",
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AGE:
            return {...state, age: action.payload}
        case SET_USER_SEX:
            return {...state, sex: action.payload}
        default:
            return state
    }
}

export default userReducer