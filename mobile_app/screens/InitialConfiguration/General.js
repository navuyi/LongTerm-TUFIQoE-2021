import React, {useEffect, useRef, useState} from "react"
import {Text, View} from "react-native"
import {useDispatch, useSelector} from "react-redux";
import {Picker} from "@react-native-picker/picker";
import styles from "../../styles/GeneralStyle"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Button, TextInput} from "react-native-paper";
import {setAge, setPhoneNumber, setSex, setUserName} from "../../redux/actions";
import {COLORS} from "../../styles/config";
import {removeWhitespaces} from "../../utils/string_utils";
import {isBlankString} from "../../utils/string_utils";
import * as Crypto from "expo-crypto"
import AsyncStorage from "@react-native-async-storage/async-storage";

const General = ({navigation}) => {
    const dispatch = useDispatch()
    const {sex, age, phone_number, user_name} = useSelector(state => state.userReducer)
    const [ready, setReady] = useState(false)

    const handleSexChange = (value, index) => {
        dispatch(setSex(value))
    }

    useEffect(() => {
        if(isBlankString(sex) === false && isBlankString(phone_number) === false && phone_number.length>=9 && isBlankString(age) === false && isBlankString(user_name) === false){
            setReady(true)
        }
        else{
            setReady(false)
        }
    }, [sex, phone_number, age, user_name])

    const handlePhoneInput = (text) => {
        if (isNaN(text) === false) {
            dispatch(setPhoneNumber(removeWhitespaces(text)))
        }
    }
    const handleAgeInput = (text) => {
        if (isNaN(text) === false) {
            if(parseInt(text) !== 0){
                dispatch(setAge(removeWhitespaces(text)))
            }
        }
    }

    const handleNameInput = (text) => {
        dispatch(setUserName(text))
    }

    const handleSubmit = async () => {
        const access_token = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            user_name+phone_number
        )
        const data = {
            age: age,
            sex: sex,
            phone_number: phone_number,
            name: user_name,
            access_token: access_token
        }
        //TODO Axios request to the server HERE
        // if OK save values above in AsyncStorage access_token in particular ! ! ! THEN redirect to setup page --> There download videos etc.
        // if not ok, display error message, check data, try again etc.
        await AsyncStorage.multiSet([
            ["age", age],
            ["sex", sex],
            ["phone_number", phone_number],
            ["name", user_name],
            ["access_token", access_token]
        ])

        // Redirect to notifications configuration screen
        navigation.push("NotificationsInitial")
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={{width: "100%"}}>
                <View style={styles.box}>
                    <Text style={styles.label}> Imię </Text>
                    <TextInput
                        onChangeText={handleNameInput}
                        value={user_name}
                        mode={"outlined"}
                        outlineColor={"#222222"}
                        dense={true}
                        style={{
                            width: "100%",
                            textAlign: "center"
                        }}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}> Numer telefonu </Text>
                    <TextInput
                        onChangeText={handlePhoneInput}
                        value={phone_number}
                        mode={"outlined"}
                        outlineColor={"#222222"}
                        dense={true}
                        style={{
                            width: "100%",
                            textAlign: "center"
                        }}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}> Wiek </Text>
                    <TextInput
                        onChangeText={handleAgeInput}
                        value={age}
                        mode={"outlined"}
                        outlineColor={"#222222"}
                        dense={true}
                        style={{
                            width: "100%",
                            textAlign: "center"
                        }}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}> Płeć </Text>
                    <Picker
                        selectedValue={sex}
                        prompt={"Płeć"}
                        style={{
                            width: "100%",
                            height: 100
                        }}
                        itemStyle={{
                            height: 130
                        }}
                        onValueChange={handleSexChange}
                    >
                        <Picker.Item label={"Kobieta"} value={"female"}/>
                        <Picker.Item label={"Mężczyzna"} value={"male"}/>
                    </Picker>
                </View>
            </View>
            {
                !ready ? null :
                    <Button style={{marginTop: 50}} uppercase={true} mode={"contained"} color={COLORS.info}
                            icon={"check-bold"} onPress={handleSubmit}>
                        Gotowe
                    </Button>
            }
        </KeyboardAwareScrollView>
    )

}



export default General


/*
<View style={styles.box_check}>
                <Text style={styles.label}> Płeć </Text>
                <CheckBox
                    size={25}
                    title={"Kobieta"}
                    containerStyle={styles.checkboxContainerStyle}
                    checked={checked.female}
                    onPress={() => {
                        console.log("ASd")
                        //const prev = checked.female
                        //setChecked({...checked, female: !prev})
                    }}
                />
                <CheckBox
                    size={25}
                    title={"Mężczyzna"}
                    containerStyle={styles.checkboxContainerStyle}
                    checked={checked.male}
                    onPress={() => {
                        console.log("ASasdadd")

                        //const prev = checked.male
                        //setChecked({...checked, female: !prev})
                    }}
                />
            </View>
 */