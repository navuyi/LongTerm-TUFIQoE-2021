import React, {useState} from "react"
import {TextInput} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {setNotificationsConfig} from "../redux/actions";
import userReducer from "../redux/reducers";

const NotificationHourInput = (props) => {
    const {notifications_config} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const handleChange = (text) =>{
        // Check for number
        if(isNaN(text) === true){
            return
        }
        // Check if hour is valid
        if(parseInt(text) > 24 || parseInt(text) < 1){
            return
        }
        const arr = notifications_config.hours
        arr[props.index] = text
        const update = {
            ...notifications_config,
            hours: arr
        }
        dispatch(setNotificationsConfig(update))
    }
    return(
        <TextInput
            mode={"outlined"}
            outlineColor={"#222222"}
            dense={true}
            style={{
                width: 50,
                textAlign: "center"
            }}
            value={notifications_config.hours[props.index].toString()}
            onChangeText={handleChange}
        />
    )
}


export default NotificationHourInput