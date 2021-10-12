import React from "react"
import {Button} from "react-native-paper";
import {COLORS} from "../styles/config";
import {useDispatch, useSelector} from "react-redux";
import userReducer from "../redux/reducers";
import {setNotificationsConfig} from "../redux/actions";

const NotificationNumberButton = (props) => {
    const {notifications_config} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const handlePress = () => {
        const update = {...notifications_config, notificationsPerDay: props.number}
        dispatch(setNotificationsConfig(update))
    }


    return (
        <Button onPress={handlePress} mode={"contained"} color={notifications_config.notificationsPerDay == props.number ? COLORS.warning : COLORS.secondary}>{props.number}</Button>
    )
}


export default NotificationNumberButton