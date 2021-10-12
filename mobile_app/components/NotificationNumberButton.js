import React from "react"
import {Button} from "react-native-paper";
import {COLORS} from "../styles/config";

const NotificationNumberButton = (props) => {


    const handlePress = () => {
        props.setActiveNumber(props.number)
    }


    return (
        <Button onPress={handlePress} mode={"contained"} color={props.number == props.activeNumber ? COLORS.warning : COLORS.secondary}>{props.number}</Button>
    )
}


export default NotificationNumberButton