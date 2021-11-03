import React from "react"
import {Button} from "react-native-elements";
import {useDispatch, useSelector} from "react-redux";
import {COLORS} from "../styles/config";

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {setSex} from "../redux/actions";


const SexButton = props => {
    const {sex} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    function handleSexChange(){
        dispatch(setSex(props.type))
    }

    return(
        <Button mode={"flat"} buttonStyle={{
                backgroundColor: props.type === sex ? COLORS.info : "#929292",
            }}
            containerStyle={{
                width: "48%"
            }}
            iconPosition={"top"}
            onPress={handleSexChange}
            icon={<Icon name={props.type === "male" ? "gender-male" : "gender-female"} size={40} color={"white"}/>}
                title={props.children}
        >
            {props.children}
        </Button>
    )
}

export default SexButton