import React, {useState} from "react"
import {Button} from "react-native-paper";
import {COLORS} from "../styles/config";
import {TextInput} from "react-native-paper";

const NotificationHourInput = (props) => {
    const [input, setInput] = useState("")


    const handleChange = (text) =>{
        // Check for number
        if(isNaN(text) === true){
            return
        }
        // Check if hour is valid
        if(parseInt(text) > 24 || parseInt(text) < 1){
            return
        }
        const arr = props.schedule.hours
        arr[props.index] = text
        const update = {
            ...props.schedule,
            hours: arr
        }
        setInput(text)
        props.setSchedule(update)
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
            value={props.schedule.hours[props.index].toString()}
            onChangeText={handleChange}
        />
    )
}


export default NotificationHourInput