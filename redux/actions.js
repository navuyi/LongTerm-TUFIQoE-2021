export const SET_USER_SEX = 'SET_USER_SEX'
export const SET_USER_AGE = "SET_USER_AGE"


export const setSex = (sex) => dispatch => {
    dispatch({
        type: SET_USER_SEX,
        payload: sex
    })
}

export const setAge = (age) => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age
    })
}

